const stripeAPI = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function createPaymentIntentStripe(req, res) {
  if (req.method === "POST") {
    const { email, phone, amount } = req.body;

    if (!amount) {
      return res.status(400).json({ error: 'Missing required session parameters' })
    }

    try {
      const paymentIntent = await stripeAPI.paymentIntents.create({
        amount,
        currency: "usd",
        payment_method_types: ['card'],
        description: `Order from ${email} - ${phone}`,
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret })

    } catch (error) {
      return res.status(400).json({ error: error, errorDescription: 'Error. Catn"t create session' })
    }
  } else {
    return res.status(400).json({ error: 'Not expected method' })
  }
}
