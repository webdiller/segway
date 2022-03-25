import stripeAPI from "libs/stripe"

export default async function createCheckoutSession(req, res) {
  switch (req.method) {
    case "POST":
      return res.status(200).json(products)
      const { line_items, customer_email } = req.body;
      if (!line_items || !customer_email) {
        return res.status(400).json({ error: 'Missing required session parameters' })
      }
      
      let session;

      try {
        session = await stripeAPI.checkout.sessions.create({
          payment_method_types: ['card'],
          mode: 'payment',
          line_items,
          customer_email,
          success_url: `${process.env.NEXT_PUBLIC_HOST}payment/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${process.env.NEXT_PUBLIC_HOST}payment/canceled`,
          shipping_address_collection: ['GB', 'US']
        })
        res.status(200).json({sessionID: session.id})
      } catch (error) {
        return res.status(400).json({ error: 'Error. Catn"t create session' })
      }
    default:
      return res.status(400).json({ error: 'Not expected method' })
  }
}
