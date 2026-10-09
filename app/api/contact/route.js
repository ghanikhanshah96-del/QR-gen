import { Resend } from 'resend';

/**
 * Contact form endpoint (runs on the server — the Resend key never reaches the browser).
 * Env: RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL (see .env.local).
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LIMITS = { name: 100, email: 254, message: 2000 };

// Best-effort abuse limit: 5 messages per IP per 10 minutes (per server instance).
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function json(body, status = 200) {
  return Response.json(body, { status });
}

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: 'Invalid request.' }, 400);
  }

  // Honeypot: real visitors never see or fill this field.
  if (data?.website) return json({ ok: true });

  const name = String(data?.name ?? '').trim().slice(0, LIMITS.name);
  const email = String(data?.email ?? '').trim().slice(0, LIMITS.email);
  const message = String(data?.message ?? '').trim().slice(0, LIMITS.message);

  if (!name || !email || !message) return json({ error: 'Please fill in your name, email, and message.' }, 400);
  if (!EMAIL_RE.test(email)) return json({ error: 'Please enter a valid email address.' }, 400);
  if (message.length < 10) return json({ error: 'Please write a little more (at least 10 characters).' }, 400);

  const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) return json({ error: 'Too many messages. Please try again in a few minutes.' }, 429);

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    console.error('Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set.');
    return json({ error: 'The contact form is not available right now.' }, 500);
  }

  const resend = new Resend(RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: CONTACT_FROM_EMAIL || 'GenerateQRFast <onboarding@resend.dev>',
    to: CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `Contact form: ${name.replace(/[\r\n]+/g, ' ')}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${escapeHtml(name)}<br /><strong>Email:</strong> ${escapeHtml(email)}</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
  });

  if (error) {
    console.error('Contact form: Resend error', error);
    return json({ error: 'Your message could not be sent. Please try again later.' }, 502);
  }

  return json({ ok: true });
}
