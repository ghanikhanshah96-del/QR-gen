export const GUIDES = [
  {
    dir: 'what-is-a-qr-code',
    title: 'What Is a QR Code? | GenerateQRFast Guides',
    heading: 'What is a QR code?',
    description:
      'A plain-language explanation of QR codes, how they store information, and why they are used on print and packaging.',
    content: `<p>A QR (Quick Response) code is a two-dimensional barcode that stores data as a pattern of modules. Phone cameras and scanners read the pattern and decode the information instantly.</p>
<p>Unlike one-dimensional barcodes, QR codes can hold URLs, text, contact cards, Wi‑Fi credentials, email drafts, SMS messages, map links, and more — which is why they’re used on packaging, posters, restaurants, and business cards.</p>
<p>With GenerateQRFast you create <strong>static</strong> QR codes in your browser: the content is written into the code itself, with no signup and no watermark.</p>
<h2>Why QR codes are useful</h2>
<p>QR codes connect print to digital content in seconds. Instead of typing a long website address, phone number, or Wi‑Fi password, people scan once and continue.</p>`,
  },
  {
    dir: 'how-qr-codes-work',
    title: 'How QR Codes Work | GenerateQRFast Guides',
    heading: 'How QR codes work',
    description: 'Learn how scanners read QR modules, finder patterns, and error correction.',
    content: `<p>QR codes use finder patterns (the three large corner squares) so scanners can locate and orient the code quickly. Data is encoded into the remaining modules with error correction so damaged codes can still scan.</p>
<p>When you create a static QR with GenerateQRFast, the payload is written directly into those modules in your browser.</p>
<h2>What gets stored</h2>
<p>A URL QR stores a web address. A text QR stores the message. A Wi‑Fi QR stores network details in a standard format. The phone reads that payload and offers the matching action — open a page, show text, join Wi‑Fi, and so on.</p>`,
  },
  {
    dir: 'static-vs-dynamic-qr-codes',
    title: 'Static vs Dynamic QR Codes | GenerateQRFast Guides',
    heading: 'Static vs dynamic QR codes',
    description: 'Understand the difference between static and dynamic QR codes — and when static is the better choice.',
    content: `<p><strong>Static QR codes</strong> encode the final content directly. After you download them, they don’t need our servers. <strong>Dynamic QR codes</strong> usually point to a short redirect URL you can edit later — useful for campaigns, but dependent on a service remaining online.</p>
<p>GenerateQRFast focuses on static QR codes: free, private, and permanent with respect to our infrastructure. That makes them a strong fit for packaging, business cards, menus, and any print run where you want zero vendor lock-in after download.</p>
<h2>Which should you choose?</h2>
<p>Choose static when the destination is stable and you want the code to keep working without an account or subscription. Choose dynamic only if you need to change the destination after printing and accept that the short link must stay online.</p>`,
  },
  {
    dir: 'do-qr-codes-expire',
    title: 'Do QR Codes Expire? | GenerateQRFast Guides',
    heading: 'Do QR codes expire?',
    description: 'Clear answer on QR expiration for static codes generated with GenerateQRFast.',
    content: `<p>Static QR codes generated here do not expire and do not depend on our servers. The encoded destination or information must remain valid for the QR code to remain useful — for example, a website must stay online, or a phone number must still ring.</p>
<p>If you delete a page, change a URL, rotate a Wi‑Fi password, or remove a video, the QR graphic may still scan, but it will no longer lead to the intended result. For long-term print, use stable destinations.</p>`,
  },
  {
    dir: 'qr-code-error-correction',
    title: 'QR Code Error Correction Levels | GenerateQRFast Guides',
    heading: 'QR code error correction',
    description: 'Choose L, M, Q, or H error correction for logos and print durability.',
    content: `<p>Error correction lets scanners recover data if part of the QR is dirty, covered by a logo, or lightly damaged. Levels L, M, Q, and H trade capacity for resilience.</p>
<ul>
<li><strong>L</strong> — lowest recovery, highest capacity</li>
<li><strong>M</strong> — balanced default for many codes</li>
<li><strong>Q</strong> — stronger recovery for lightly styled codes</li>
<li><strong>H</strong> — best when adding a logo or printing small</li>
</ul>
<p>Use <strong>H</strong> when branding the center of the code, and always scan-test before a large print run.</p>`,
  },
  {
    dir: 'qr-code-size-guide',
    title: 'QR Code Size Guide | GenerateQRFast Guides',
    heading: 'QR code size guide',
    description: 'Recommended QR sizes for print, packaging, posters, and screens.',
    content: `<p>As a rule of thumb, printed QR codes should be at least 2 × 2 cm (about 0.8 × 0.8 in) for short URLs, and larger for complex payloads or long scanning distances.</p>
<p>Dense codes (long URLs, vCards, or logos) need more physical size. Test with a real phone from the same distance your customers will use before a large print run.</p>`,
  },
  {
    dir: 'qr-code-printing-guide',
    title: 'QR Code Printing Guide | GenerateQRFast Guides',
    heading: 'QR code printing guide',
    description: 'Print QR codes that scan reliably — contrast, quiet zone, and materials.',
    content: `<p>Maintain strong contrast, keep the quiet zone (margin) clear, avoid distorting the code, and prefer matte finishes over heavy gloss glare. SVG downloads scale cleanly for professional print.</p>
<p>Always print a sample first. Scan it in the lighting and distance you expect in the real environment — table tents, packaging, posters, and outdoor signs can behave differently.</p>`,
  },
  {
    dir: 'qr-code-best-practices',
    title: 'QR Code Best Practices | GenerateQRFast Guides',
    heading: 'QR code best practices',
    description: 'Practical tips for designing QR codes people will actually scan.',
    content: `<p>Tell people what happens when they scan, place codes at comfortable heights, keep designs scannable, and test on multiple devices. Don’t bury critical CTAs behind a QR without a fallback URL when appropriate.</p>
<ul>
<li>Use clear contrast and a clean quiet zone</li>
<li>Add a short call to action (“Scan for Wi‑Fi”, “Leave a Google review”)</li>
<li>Test before printing in bulk</li>
<li>Prefer stable destinations for permanent materials</li>
</ul>`,
  },
  {
    dir: 'qr-code-security',
    title: 'QR Code Security | GenerateQRFast Guides',
    heading: 'QR code security',
    description: 'Stay safe with QR codes — verify destinations and avoid risky scans.',
    content: `<p>QR codes are only as trustworthy as their content. Preview URLs when your device allows it, be cautious with unexpected codes in public places, and never encode secrets you wouldn’t print on paper.</p>
<p>GenerateQRFast generates static codes in your browser for normal use. Wi‑Fi passwords and contact details stay in the payload you create — treat printed Wi‑Fi codes like printed passwords, and prefer guest networks when sharing publicly.</p>`,
  },
  {
    dir: 'qr-code-for-business',
    title: 'QR Codes for Business | GenerateQRFast Guides',
    heading: 'QR codes for business',
    description: 'Business use cases for static QR codes — packaging, cards, and signage.',
    content: `<p>Businesses use QR codes for menus, product info, support links, Wi‑Fi, reviews, and contact cards. Static codes are ideal when the destination is stable and you want zero dependency on a QR vendor after printing.</p>
<p>Common placements include business cards, packaging, brochures, storefront signs, receipts, and event materials. Create each code with GenerateQRFast, test it, then download PNG, SVG, or JPG.</p>`,
  },
  {
    dir: 'qr-code-for-restaurants',
    title: 'QR Codes for Restaurants | GenerateQRFast Guides',
    heading: 'QR codes for restaurants',
    description: 'Menus, Wi‑Fi, and review QR ideas for restaurants and cafes.',
    content: `<p>Restaurants commonly use QR codes for menus, Wi‑Fi access, and Google reviews. Keep table tents clean, high contrast, and easy to scan in low light.</p>
<p>Pair a menu URL QR, a guest Wi‑Fi QR, and a Google review QR so diners can order, connect, and leave feedback without typing long links or passwords.</p>`,
  },
  {
    dir: 'qr-code-for-wifi',
    title: 'Wi‑Fi QR Codes Guide | GenerateQRFast Guides',
    heading: 'QR codes for Wi‑Fi',
    description: 'How Wi‑Fi QR codes work and how to share guest access safely.',
    content: `<p>A Wi‑Fi QR encodes SSID, security type, and password in a standard format many phones understand. Prefer a guest network when sharing access publicly, and reprint if you rotate passwords.</p>
<p>Use GenerateQRFast’s <a href="/wifi-qr-code/">WiFi QR Code Generator</a> to create a free static code in your browser — the password is not uploaded to GenerateQRFast for generation.</p>`,
  },
  {
    dir: 'qr-code-for-google-reviews',
    title: 'Google Review QR Codes | GenerateQRFast Guides',
    heading: 'QR codes for Google reviews',
    description: 'Collect more Google reviews with a simple printable QR code.',
    content: `<p>Place a Google review QR at checkout, on receipts, or near exits. Make sure your Google Business link is correct, then generate a static QR so customers can leave feedback in seconds.</p>
<p>Create yours with the <a href="/google-review-qr-code/">Google Review QR Code Generator</a>, scan-test it, and print it where happy customers are most likely to see it.</p>`,
  },
  {
    dir: 'qr-code-with-logo',
    title: 'QR Codes with Logos | GenerateQRFast Guides',
    heading: 'QR codes with logos',
    description: 'Add a logo without breaking scan reliability — ECC and size tips.',
    content: `<p>Logos should stay relatively small, keep high error correction (H), and preserve enough contrast. Always scan-test after adding branding.</p>
<p>Leave a quiet zone around the full code, avoid covering finder patterns, and download SVG when you need crisp print at any size.</p>`,
  },
];
