import Link from 'next/link';
import QrRepairApp from '@/components/QrRepairApp';
import ToolArticle from '@/components/ToolArticle';
import FaqList from '@/components/FaqList';
import ToolGrid from '@/components/ToolGrid';

export const metadata = {
  title: { absolute: 'QR Code Repair – Fix Blurry or Damaged QR Codes Free | GenerateQRFast' },
  description:
    'Repair a blurry, small, or damaged QR code online for free. Upload a photo or screenshot, read what it contains, and download a clean, sharp copy.',
  alternates: { canonical: '/qr-code-repair/' },
};

const STEPS = [
  'Upload a photo, screenshot, or scan of the QR code (or paste it with Ctrl/Cmd + V).',
  'The tool cleans the image step by step until it can read the code.',
  'Check the content it found: a link, WiFi network, contact, or text.',
  'Download a new, sharp QR code with the same content as PNG, SVG, or JPG.',
];

const ARTICLE = [
  {
    heading: 'What Does QR Code Repair Do?',
    blocks: [
      'QR Code Repair reads a QR code from a poor-quality image and gives you a clean copy of it.',
      'Upload a blurry photo, a small screenshot, a faded print, or a code with a scratch or stain. The tool improves the image, reads the information stored in the code, and creates a brand-new QR code with exactly the same content.',
      'The new code is sharp at any size, so you can print it again, add it to a new design, or download it as an SVG for professional printing.',
    ],
  },
  {
    heading: 'How the Repair Works',
    blocks: [
      'The tool first tries to read your image as it is. If that fails, it applies a series of fixes and tries again after each one:',
      {
        steps: [
          'Adds a white border, because codes cropped too tightly often cannot be read.',
          'Enlarges small or low-resolution images.',
          'Boosts contrast for faded or washed-out codes.',
          'Converts the image to pure black and white.',
          'Sharpens blurry images and removes noise from grainy or compressed ones.',
          'Tries rotated, inverted (light-on-dark), and alternative black-and-white versions.',
        ],
      },
      'As soon as one of these works, the tool shows you what fixed it and what the code contains.',
    ],
  },
  {
    heading: 'Which QR Codes Can Be Repaired?',
    blocks: [
      'Every QR code includes extra backup data called error correction. It lets a scanner recover the content even when part of the code is missing or unclear.',
      {
        cards: [
          { title: 'Level L', body: 'Recovers about 7% damage.' },
          { title: 'Level M', body: 'Recovers about 15% damage.' },
          { title: 'Level Q', body: 'Recovers about 25% damage.' },
          { title: 'Level H', body: 'Recovers about 30% damage.' },
        ],
      },
      'Repair works best on codes that are blurry, small, low in contrast, rotated, or lightly damaged. If a large part of the code is torn off, covered, or missing, the information may be lost, and no tool can bring it back.',
      { note: 'Tip: if you know what the code should contain, you can always create a new QR code with our free generator.' },
    ],
  },
  {
    heading: 'Common Reasons a QR Code Will Not Scan',
    blocks: [
      [
        'The photo is blurry or out of focus',
        'The image is too small or low resolution',
        'Faded print or low contrast',
        'Glare or shadows on the code',
        'The code was cropped without a white border',
        'Scratches, stains, or folds',
        'Heavy JPEG compression',
        'Light code on a dark background',
      ],
      'QR Code Repair is designed to handle all of these. For the best result, upload the clearest version of the image you have.',
    ],
  },
  {
    heading: 'Tips for a Better Result',
    variant: 'tips',
    blocks: [
      'Crop the image so the QR code fills most of the picture, but keep a little space around it.',
      'If you are photographing a printed code, hold the phone straight above it in good, even light without glare.',
      'Use the original file instead of a screenshot of a screenshot. Every copy loses quality.',
      'After downloading the new code, scan it with your phone to confirm it opens the right content before you print it.',
    ],
  },
  {
    heading: 'Is My Image Private?',
    blocks: [
      'Yes. QR Code Repair runs entirely in your browser. Your image is cleaned and read on your own device, and it is never uploaded to our servers.',
      'The decoded content, such as a link, WiFi password, or contact details, stays on your device too.',
    ],
  },
  {
    heading: 'Things to Know Before Reusing a Repaired Code',
    blocks: [
      'The new QR code contains exactly the same information as the original. If the original pointed to a website, the new one points to the same address.',
      'Some QR codes made by other services are dynamic: they point to a short redirect link owned by that service. A repaired copy still depends on that service keeping the link active.',
      'Always check a decoded web address before opening it. QR codes can be used to send people to scam websites.',
    ],
  },
];

const FAQS = [
  {
    q: 'Can a damaged QR code be fixed?',
    a: 'Often, yes. If the code is blurry, small, faded, or lightly damaged, the tool can usually read it and create a clean copy. If too much of the code is missing (more than its error correction can recover, up to about 30%), the information cannot be restored.',
  },
  {
    q: 'Is QR Code Repair free?',
    a: 'Yes. It is free to use, with no sign-up and no watermark on the new QR code.',
  },
  {
    q: 'Is my image uploaded anywhere?',
    a: 'No. The image is processed in your browser on your own device and is never sent to our servers.',
  },
  {
    q: 'Will the new QR code work the same as the old one?',
    a: 'Yes. It contains exactly the same content, so it opens the same link, WiFi network, contact, or text. Scan it once to confirm before printing.',
  },
  {
    q: 'What image types can I upload?',
    a: 'PNG, JPG, WebP, GIF, and screenshots up to 15 MB. You can also paste an image from your clipboard.',
  },
  {
    q: 'Can I change the color of the repaired QR code?',
    a: 'Yes. You can choose the QR color, background color, and error correction level, then download it as PNG, SVG, or JPG.',
  },
];

export default function QrRepairPage() {
  return (
    <>
      <section className="site-container pt-8 sm:pt-12">
        <nav className="text-sm text-ink-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link className="hover:text-brand-700" href="/">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-ink-800 dark:text-ink-200">QR Code Repair</li>
          </ol>
        </nav>
        <div className="mt-6 max-w-3xl animate-rise-in">
          <h1 className="text-2xl font-bold tracking-tight text-ink-950 dark:text-white sm:text-3xl">QR Code Repair</h1>
          <p className="mt-2 max-w-2xl text-sm text-ink-600 dark:text-ink-300 sm:text-base">
            Fix a blurry, small, faded, or slightly damaged QR code. Upload a photo or screenshot, see what the code contains,
            and download a clean, sharp copy with the same content. Free, private, and done entirely in your browser.
          </p>
        </div>
      </section>

      <QrRepairApp />

      <section className="site-container grid gap-10 py-12 lg:grid-cols-2">
        <div className="panel p-6">
          <h2 className="section-title">How to use</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-ink-700 dark:text-ink-300">
            {STEPS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </div>
        <div className="panel p-6">
          <h2 className="section-title">Privacy</h2>
          <p className="mt-4 leading-relaxed text-ink-600 dark:text-ink-300">
            Your image never leaves your device. The QR code is cleaned and read in your browser, and nothing is uploaded to our
            servers. Repair works when the code can still be read with its built-in error correction; codes with large missing
            parts cannot be recovered.
          </p>
        </div>
      </section>

      <ToolArticle sections={ARTICLE} />

      <section className="site-container pb-16">
        <h2 className="section-title">Frequently asked questions</h2>
        <div className="mt-6">
          <FaqList items={FAQS} />
        </div>
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-ink-950 dark:text-white">Create a new QR code</h2>
          <div className="mt-4">
            <ToolGrid />
          </div>
        </div>
      </section>
    </>
  );
}
