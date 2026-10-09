# GenerateQRFast

Free, permanent, private, unlimited static QR code generator — **no signup, no expiration, no watermark**.

## Stack

- [Next.js](https://nextjs.org/) (App Router, pre-rendered pages, deployed on Vercel)
- Tailwind CSS
- Client-side QR generation via `qr-code-styling`
- LocalStorage + IndexedDB for preferences and saved designs

No accounts, no server-side QR processing. Generation stays in the browser. The only server code is the contact form (`app/api/contact`), which emails messages via [Resend](https://resend.com).

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Next.js development server |
| `npm run build` | Production build (Vercel runs this on deploy) |
| `npm start` | Serve the production build (Node) |

## Contact form (Resend)

Set these environment variables in `.env.local` locally and in Vercel → Project → Settings → Environment Variables:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key (server only — never put it in client code) |
| `CONTACT_TO_EMAIL` | Inbox that receives contact messages |
| `CONTACT_FROM_EMAIL` | Sender, e.g. `GenerateQRFast <onboarding@resend.dev>` or an address on your verified domain |

## Architecture

```
Generator form → payload formatter → validator → QR engine → live renderer → export
```

Generators under `lib/generators/` only build payloads. Rendering and export stay in `lib/core/`. The UI shell lives in `app/` and `components/`; `components/GeneratorApp.jsx` boots the client generator.

## Privacy

Static QR content is processed in the browser. GenerateQRFast does not need your Wi‑Fi passwords, messages, or logos on a server to generate downloads.

> Static QR codes generated here do not expire and do not depend on our servers. The encoded destination or information must remain valid for the QR code to remain useful.

## License

MIT — see `LICENSE`.
