// pages/api/checkout.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { items = [] } = req.body;

    if (!items.length) {
      return res.status(400).json({ error: 'No items in cart' });
    }

    // Crea le righe dell'ordine
    const line_items = items.map((item) => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
          images: item.image ? [item.image] : [],
        },
        unit_amount: Math.round(item.price * 100), // euro → centesimi
      },
      quantity: item.qty || 1,
    }));

    // Aggiunge spedizione fissa
    line_items.push({
      price_data: {
        currency: 'eur',
        product_data: { name: 'Spedizione - Corriere 24–48h (Italia)' },
        unit_amount: 699, // 6,99€
      },
      quantity: 1,
    });

    // Crea la sessione di pagamento
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      shipping_address_collection: { allowed_countries: ['IT'] },
      line_items,
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
      allow_promotion_codes: true,
      metadata: { source: 'justtoprint' },
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Errore durante il checkout:', error);
    return res.status(500).json({ error: 'Errore durante la creazione del checkout' });
  }
}
