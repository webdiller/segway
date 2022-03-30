// import stripeAPI from "libs/stripe"
const stripeAPI = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function createCheckoutSession(req, res) {
  if (req.method === "POST") {
    const { line_items, customer_email } = req.body;
    
    if (!line_items || !customer_email) {
      return res.status(400).json({ error: 'Missing required session parameters' })
    }

    try {
      const session = await stripeAPI.checkout.sessions.create({
        mode: 'payment',
        shipping_address_collection: { allowed_countries: ['GB', 'US'] },
        success_url: `${process.env.NEXT_PUBLIC_HOST}payment/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_HOST}payment/canceled`,

        line_items,
        customer_email,
        phone_number_collection: {
          enabled: true,
        },
      });
      res.status(200).json({ sessionID: session.id })

    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: error, errorDescription: 'Error. Catn"t create session' })
    }
  } else {
      return res.status(400).json({ error: 'Not expected method' })
  }
}
