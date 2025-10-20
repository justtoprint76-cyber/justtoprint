// pages/api/checkout.js
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { items } = req.body; // [{ name, price, qty, image }]
    if (!items?.length) return res.status(400).json({ error: 'Cart is empty' });

    const line_items = items.map(it => ({
      quantity: it.qty || 1,
      price_data: {
        currency: 'eur',
        unit_amount: Math.round((it.price || 0) * 100), // € → cent
        product_data: { name: it.name || 'Item', images: it.image ? [it.image] : [] },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      shipping_address_collection: { allowed_countries: ['IT'] },
      shipping_options: [
        {
          shipping_rate_data: {
            display_name: 'Corriere 24–48h (Italia)',
            type: 'fixed_amount',
            fixed_amount: { amount: 699, currency: 'eur' },
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 2 },
              maximum: { unit: 'business_day', value: 4 },
            },
          },
        },
      ],
      allow_promotion_codes: true,
      line_items,
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
    });

    return res.status(200).json({ url: session.url });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Stripe error' });
  }
}
