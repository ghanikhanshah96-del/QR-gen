'use client';

import { useState } from 'react';
import { SITE } from '@/lib/config';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LIMITS = { name: 100, email: 254, message: 2000 };

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = 'Please enter your name.';
  if (!email.trim()) errors.email = 'Please enter your email.';
  else if (!EMAIL_RE.test(email.trim())) errors.email = 'Please enter a valid email address.';
  if (!message.trim()) errors.message = 'Please write a message.';
  else if (message.trim().length < 10) errors.message = 'Please write a little more (at least 10 characters).';
  return errors;
}

/**
 * Contact form. Posts to app/api/contact (server), which emails the message via Resend.
 */
export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [serverError, setServerError] = useState('');
  const [website, setWebsite] = useState(''); // honeypot

  function update(field) {
    return (e) => {
      const value = e.target.value.slice(0, LIMITS[field]);
      setValues((v) => ({ ...v, [field]: value }));
      if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
    };
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === 'sending') return;
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(`contact-${Object.keys(found)[0]}`)?.focus();
      return;
    }

    setStatus('sending');
    setServerError('');
    try {
      const res = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, website }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Your message could not be sent. Please try again.');
      setStatus('sent');
      setValues({ name: '', email: '', message: '' });
    } catch (err) {
      setServerError(err.message || 'Your message could not be sent. Please try again.');
      setStatus('error');
    }
  }

  const fieldClass = (field) => `field-input${field === 'message' ? ' min-h-[140px] resize-y' : ''}`;

  return (
    <form onSubmit={handleSubmit} noValidate className="panel mt-8 space-y-5 p-6 sm:p-8" aria-label="Contact form">
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-ink-950 dark:text-white">Send us a message</h2>
        <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">
          We usually reply within a few days to the email address you enter.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="field-label" htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            className={fieldClass('name')}
            value={values.name}
            onChange={update('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            placeholder="Your name"
          />
          {errors.name ? (
            <p id="contact-name-error" className="text-sm text-red-600 dark:text-red-400">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="space-y-1.5">
          <label className="field-label" htmlFor="contact-email">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            inputMode="email"
            className={fieldClass('email')}
            value={values.email}
            onChange={update('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            placeholder="you@example.com"
          />
          {errors.email ? (
            <p id="contact-email-error" className="text-sm text-red-600 dark:text-red-400">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="field-label" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={6}
          className={fieldClass('message')}
          value={values.message}
          onChange={update('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : 'contact-message-count'}
          placeholder="How can we help?"
        />
        <div className="flex justify-between gap-3">
          {errors.message ? (
            <p id="contact-message-error" className="text-sm text-red-600 dark:text-red-400">
              {errors.message}
            </p>
          ) : (
            <span />
          )}
          <p id="contact-message-count" className="text-xs text-ink-500 dark:text-ink-400">
            {values.message.length}/{LIMITS.message}
          </p>
        </div>
      </div>

      {/* Honeypot for bots — hidden from people and screen readers. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-primary disabled:opacity-60" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        <p className="text-xs text-ink-500 dark:text-ink-400">Your message is sent by email and not stored on our site.</p>
      </div>

      {status === 'sent' ? (
        <p
          role="status"
          className="rounded-lg border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-900 dark:border-brand-800 dark:bg-brand-950/60 dark:text-brand-100"
        >
          Thanks! Your message has been sent. We’ll reply to the email address you gave us.
        </p>
      ) : null}
      {status === 'error' ? (
        <p
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200"
        >
          {serverError} You can also email us directly at{' '}
          <a className="font-semibold underline" href={`mailto:${SITE.contactEmail}`}>
            {SITE.contactEmail}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
