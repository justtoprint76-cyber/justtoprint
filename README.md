# JUSTTOPRINT — Ecommerce (Next.js + Tailwind)

Sito ecommerce starter per il brand JUSTTOPRINT.

## Sviluppo locale
1. Installa Node.js LTS (18+).
2. `npm install`
3. `npm run dev`
4. Apri http://localhost:3000

## Deploy su Vercel
1. Carica questi file su un repository GitHub.
2. Vai su https://vercel.com → Add New Project → importa il repo → Deploy.
3. Otterrai un URL tipo `https://justtoprint.vercel.app`.

## Attivare Stripe (dopo)
- In Vercel → Settings → Environment Variables aggiungi:
  - `STRIPE_SECRET_KEY` (sk_live... o sk_test...)
  - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (pk_live... o pk_test...)
  - `NEXT_PUBLIC_BASE_URL` (es: https://justtoprint.vercel.app)
- Sostituisci `pages/api/checkout.js` con l'handler Stripe.

Buon lavoro! 🙌
