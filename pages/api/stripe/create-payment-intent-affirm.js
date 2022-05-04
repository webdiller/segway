const stripeAPI = require('stripe')(process.env.STRIPE_SECRET_KEY_DEV)

export default async function createPaymentIntentAffirm(req, res) {
  if (req.method === "POST") {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({ error: 'Missing required session parameters' })
    }

    try {
      const paymentIntent = await stripeAPI.paymentIntents.create({
        amount,
        currency: "usd",
        payment_method_types: ['afterpay_clearpay']
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret })

    } catch (error) {
      return res.status(400).json({ error: error, errorDescription: 'Error. Catn"t create session' })
    }
  } else {
    return res.status(400).json({ error: 'Not expected method' })
  }
}