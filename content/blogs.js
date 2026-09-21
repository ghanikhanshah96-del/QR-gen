/**
 * Blog posts for each QR tool + helpers.
 * Slugs live under /blogs/[slug]/
 */

const POSTS = [
  {
    slug: 'how-to-create-a-url-qr-code',
    toolId: 'url',
    title: 'How to Create a URL QR Code (Free & Permanent) | EverQR Blog',
    heading: 'How to create a URL QR code',
    description:
      'Learn how to make a free static URL QR code that does not expire, with tips for print, logos, and scan reliability.',
    date: '2026-09-21',
    excerpt:
      'Turn any website link into a scannable static QR — private, watermark-free, and generated in your browser.',
    content: `
<p>A <strong>URL QR code</strong> encodes a web address so phones open that page after a scan. It is one of the most common QR uses — menus, packaging, posters, business cards, and product inserts.</p>
<p>With EverQR you create a <strong>static</strong> URL QR: the link is written into the code itself. After you download PNG, SVG, or JPG, the graphic does not depend on our servers.</p>
<h2>Steps</h2>
<ol>
<li>Open the <a href="/url-qr-code/">URL QR code generator</a>.</li>
<li>Paste your full website URL (we can add https:// if you leave it out).</li>
<li>Customize colors, pattern, and an optional logo.</li>
<li>Download PNG for screens, SVG for print, or JPG when you need a flat image.</li>
</ol>
<h2>Tips for reliable scans</h2>
<ul>
<li>Keep strong contrast (dark modules on a light background).</li>
<li>Leave a quiet zone (margin) around the code.</li>
<li>Use error correction <strong>H</strong> if you add a logo.</li>
<li>Test with a real phone before a large print run.</li>
</ul>
<p>Static codes do not expire because of EverQR — but the website you encode must stay online for the QR to remain useful.</p>
`,
  },
  {
    slug: 'how-to-make-a-text-qr-code',
    toolId: 'text',
    title: 'How to Make a Text QR Code | EverQR Blog',
    heading: 'How to make a text QR code',
    description:
      'Encode plain text, notes, or short instructions in a free static QR code — no short link required.',
    date: '2026-09-21',
    excerpt: 'Put a message directly inside a QR code for notes, codes, and offline-friendly sharing.',
    content: `
<p>A <strong>text QR code</strong> stores plain text in the modules. When scanned, phones show the message — useful for Wi‑Fi notes (without the Wi‑Fi format), coupon codes, event instructions, or short announcements.</p>
<p>Keep messages concise. QR capacity shrinks as error correction and styling increase, so shorter text scans more reliably.</p>
<h2>Steps</h2>
<ol>
<li>Open the <a href="/text-qr-code/">text QR generator</a>.</li>
<li>Type or paste your message.</li>
<li>Style the design, then download PNG, SVG, or JPG.</li>
</ol>
<p>Generation stays in your browser. EverQR does not need an account and does not watermark downloads.</p>
`,
  },
  {
    slug: 'wifi-qr-code-for-guests',
    toolId: 'wifi',
    title: 'WiFi QR Codes for Guests — Share Access Safely | EverQR Blog',
    heading: 'WiFi QR codes for guests',
    description:
      'Create a guest Wi‑Fi QR so visitors join without typing the password. Privacy tips and print advice.',
    date: '2026-09-21',
    excerpt: 'Let guests join your network with one scan — password stays in the QR, not on our servers.',
    content: `
<p>A <strong>WiFi QR code</strong> uses a standard payload (SSID, security type, password) that many phones understand. Guests scan and join without spelling a long passphrase aloud.</p>
<p>Prefer a <strong>guest network</strong> when sharing access in cafés, offices, or events. Reprint the QR if you rotate the password.</p>
<h2>Steps</h2>
<ol>
<li>Open the <a href="/wifi-qr-code/">WiFi QR generator</a>.</li>
<li>Enter network name (SSID), security (WPA/WEP/none), and password.</li>
<li>Mark the network as hidden if needed.</li>
<li>Style and download for table tents or posters.</li>
</ol>
<p>SSID and password are processed in the browser for static generation — they are not uploaded to EverQR to create the file.</p>
`,
  },
  {
    slug: 'whatsapp-qr-code-for-business',
    toolId: 'whatsapp',
    title: 'WhatsApp QR Codes for Business | EverQR Blog',
    heading: 'WhatsApp QR codes for business',
    description:
      'Help customers start a WhatsApp chat instantly with a static QR and optional prefilled message.',
    date: '2026-09-21',
    excerpt: 'Put a chat link on packaging, posters, or cards so customers message you in one scan.',
    content: `
<p>A <strong>WhatsApp QR</strong> encodes a <code>wa.me</code> chat link (and optional prefilled text). Scanning opens WhatsApp to your number on supported devices.</p>
<p>This does not create a WhatsApp Business account — it only links to a number you already use.</p>
<h2>Steps</h2>
<ol>
<li>Open the <a href="/whatsapp-qr-code/">WhatsApp QR generator</a>.</li>
<li>Enter country code and phone number.</li>
<li>Optionally add a prefilled message (for example “Hi, I saw your product”).</li>
<li>Brand the code and download for print or digital use.</li>
</ol>
`,
  },
  {
    slug: 'google-review-qr-code-tips',
    toolId: 'google-review',
    title: 'Google Review QR Codes That Get More Feedback | EverQR Blog',
    heading: 'Google review QR codes that get more feedback',
    description:
      'Place a Google review QR at checkout or on receipts so happy customers leave feedback in seconds.',
    date: '2026-09-21',
    excerpt: 'Make leaving a Google review effortless with a printable static QR code.',
    content: `
<p>Happy customers often forget to leave a review. A <strong>Google review QR</strong> on a table card, receipt, or exit sign removes friction.</p>
<p>Copy your Google Business review or share link, then encode it as a static QR so the graphic stays useful as long as the Google link remains valid.</p>
<h2>Steps</h2>
<ol>
<li>Open Google Business Profile and copy your review / share link.</li>
<li>Paste it into the <a href="/google-review-qr-code/">Google Review QR generator</a>.</li>
<li>Style for print, download, and place where customers already feel positive about the visit.</li>
</ol>
`,
  },
  {
    slug: 'vcard-qr-code-digital-business-card',
    toolId: 'vcard',
    title: 'vCard QR Codes — Digital Business Cards | EverQR Blog',
    heading: 'vCard QR codes as digital business cards',
    description:
      'Share name, phone, email, and company details with a scannable contact QR (vCard).',
    date: '2026-09-21',
    excerpt: 'Network faster — let people save your contact with one scan.',
    content: `
<p>A <strong>vCard QR</strong> stores contact fields in a format most smartphones recognize. Scanning usually offers “Add contact.”</p>
<p>Ideal for events, badges, email signatures (as an image), and printed cards when you want an always-updatable feel without reprinting a phone number change — remember that static QRs encode the data you put in; update by generating a new file if details change.</p>
<h2>Steps</h2>
<ol>
<li>Open the <a href="/vcard-qr-code/">vCard QR generator</a>.</li>
<li>Fill in the fields you want to share.</li>
<li>Add brand colors or a logo, then download.</li>
</ol>
`,
  },
  {
    slug: 'email-qr-code-prefilled-messages',
    toolId: 'email',
    title: 'Email QR Codes with Subject & Message | EverQR Blog',
    heading: 'Email QR codes with subject and message',
    description:
      'Create a mailto QR so scanners open a draft email with address, subject, and body filled in.',
    date: '2026-09-21',
    excerpt: 'One scan starts an email to you — optional subject and body included.',
    content: `
<p>An <strong>email QR</strong> uses a <code>mailto:</code> link. On most phones it opens the default mail app with the destination address (and optional subject/body) ready to send.</p>
<p>Desktop behavior varies — some apps show the address instead of composing immediately.</p>
<h2>Steps</h2>
<ol>
<li>Open the <a href="/email-qr-code/">email QR generator</a>.</li>
<li>Enter the destination email and optional subject/message.</li>
<li>Customize and download.</li>
</ol>
`,
  },
  {
    slug: 'sms-qr-code-use-cases',
    toolId: 'sms',
    title: 'SMS QR Code Use Cases | EverQR Blog',
    heading: 'SMS QR code use cases',
    description:
      'Start a text conversation from a poster or package with an SMS QR and optional prefilled body.',
    date: '2026-09-21',
    excerpt: 'Posters and packaging can open a prefilled text message in one scan.',
    content: `
<p>An <strong>SMS QR</strong> opens the messaging app to a number with an optional prefilled body. Useful for support shortcuts, contest keywords, or “text us to book.”</p>
<p>EverQR does not send SMS. Standard carrier rates may apply when the user sends the message.</p>
<h2>Steps</h2>
<ol>
<li>Open the <a href="/sms-qr-code/">SMS QR generator</a>.</li>
<li>Enter the phone number and optional message.</li>
<li>Style, download, and place where people expect to text you.</li>
</ol>
`,
  },
  {
    slug: 'phone-number-qr-code-click-to-call',
    toolId: 'phone',
    title: 'Phone Number QR Codes — Click to Call | EverQR Blog',
    heading: 'Phone number QR codes (click to call)',
    description:
      'Encode a telephone number so scanning offers a call on mobile devices.',
    date: '2026-09-21',
    excerpt: 'Let customers call you from print or digital materials with one scan.',
    content: `
<p>A <strong>phone QR</strong> encodes a <code>tel:</code> link. Mobile devices typically offer Call; desktop scanners may only show the number.</p>
<p>Include the country code for international audiences.</p>
<h2>Steps</h2>
<ol>
<li>Open the <a href="/phone-number-qr-code/">phone number QR generator</a>.</li>
<li>Enter the number with country code.</li>
<li>Preview, customize, and download.</li>
</ol>
`,
  },
  {
    slug: 'location-qr-code-map-pins',
    toolId: 'location',
    title: 'Location QR Codes for Map Pins | EverQR Blog',
    heading: 'Location QR codes for map pins',
    description:
      'Share a precise place with a QR that opens Google Maps at your coordinates.',
    date: '2026-09-21',
    excerpt: 'Directions in one scan — encode lat/long as a Google Maps link.',
    content: `
<p>A <strong>location QR</strong> typically encodes a Google Maps URL for your latitude and longitude so scanners open that pin.</p>
<p>Enter latitude and longitude in separate fields (not both in one box) for accurate results.</p>
<h2>Steps</h2>
<ol>
<li>Open the <a href="/location-qr-code/">location QR generator</a>.</li>
<li>Enter coordinates and an optional label.</li>
<li>Customize and download for event signs or storefronts.</li>
</ol>
`,
  },
  {
    slug: 'image-to-qr-code-explained',
    toolId: 'image',
    title: 'Image to QR Code Explained | EverQR Blog',
    heading: 'Image to QR code explained',
    description:
      'How image QR codes work: the QR opens a public image URL — not the image bytes inside the code.',
    date: '2026-09-21',
    excerpt: 'Upload or paste a lasting image URL — the QR opens the photo, it does not embed the file.',
    content: `
<p>QR capacity is only a few kilobytes. Photos are megabytes, so an <strong>image QR</strong> encodes a public <strong>https URL</strong> that opens the photo — the same approach used by popular QR tools.</p>
<p>Optional uploads may use a temporary third-party host (~48 hours). For print or long-term use, paste a permanent URL from your own site, CDN, or Drive.</p>
<h2>Steps</h2>
<ol>
<li>Open the <a href="/image-to-qr-code/">image to QR generator</a>.</li>
<li>Upload an image or paste a public https URL.</li>
<li>Confirm the link, style the QR, and download.</li>
</ol>
`,
  },
  {
    slug: 'video-to-qr-code-youtube-vimeo',
    toolId: 'video',
    title: 'Video to QR Code — YouTube, Vimeo & More | EverQR Blog',
    heading: 'Video to QR code (YouTube, Vimeo & more)',
    description:
      'Link a QR to YouTube, Vimeo, Drive, or an uploaded video URL. Why video cannot live inside the QR.',
    date: '2026-09-21',
    excerpt: 'Videos are too large for QR modules — encode a watch or share link instead.',
    content: `
<p>A <strong>video QR</strong> opens a public video URL when scanned. You cannot embed an MP4 inside a QR; capacity is far too small.</p>
<p>Paste YouTube, Vimeo, or Drive links, or use a temporary upload link when you only need short-lived access. Prefer platform hosts for lasting campaigns.</p>
<h2>Steps</h2>
<ol>
<li>Open the <a href="/video-to-qr-code/">video to QR generator</a>.</li>
<li>Paste a video URL or upload a short file for a temporary public link.</li>
<li>Customize and download — no watermark.</li>
</ol>
`,
  },
  {
    slug: 'file-qr-code-pdf-doc-txt',
    toolId: 'file',
    title: 'File QR Codes for PDF, DOC & TXT | EverQR Blog',
    heading: 'File QR codes for PDF, DOC & TXT',
    description:
      'Share documents via QR by encoding a download URL — PDFs cannot fit inside the QR itself.',
    date: '2026-09-21',
    excerpt: 'Menus, manuals, and forms — the QR opens the file link, not the file bytes.',
    content: `
<p>A <strong>file QR</strong> encodes a public download or view URL for PDF, Word, text, and similar documents. Files are too large to embed in QR modules.</p>
<p>Temporary upload links may expire (~48 hours). For print, use a permanent Drive or website URL.</p>
<h2>Steps</h2>
<ol>
<li>Open the <a href="/file-qr-code/">file QR generator</a>.</li>
<li>Upload a supported document or paste a lasting https link.</li>
<li>Style the code and download PNG, SVG, or JPG.</li>
</ol>
`,
  },
];

const CATEGORY_BY_TOOL = {
  url: 'How-tos',
  text: 'How-tos',
  email: 'How-tos',
  sms: 'How-tos',
  phone: 'How-tos',
  wifi: 'For business',
  whatsapp: 'For business',
  'google-review': 'For business',
  vcard: 'For business',
  location: 'Smart uses',
  image: 'Media',
  video: 'Media',
  file: 'Media',
};

export const BLOG_CATEGORIES = ['How-tos', 'For business', 'Smart uses', 'Media'];

export const BLOGS = POSTS.map((post) => ({
  ...post,
  category: CATEGORY_BY_TOOL[post.toolId] || 'How-tos',
}));

export function getBlogBySlug(slug) {
  return BLOGS.find((b) => b.slug === slug) ?? null;
}

export function getBlogByToolId(toolId) {
  return BLOGS.find((b) => b.toolId === toolId) ?? null;
}

export function formatBlogDate(iso) {
  try {
    return new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return iso;
  }
}
