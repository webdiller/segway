const stripeAPI = require('stripe')(process.env.STRIPE_SECRET_KEY_DEV)

export default async function createPaymentIntentStripe(req, res) {
  if (req.method === "POST") {

    try {
      const { productName } = req.body;

      if (!productName || productName.length <= 0) {
        return res.status(400).json({ error: 'Missing required productName' })
      }

      const product = await stripeAPI.products.create({
        name: productName,
        images: [`https://segway-ninebot.us/icon-extend.jpg`]
      });

      res.status(200).json({ product })
    } catch (error) {
      return res.status(400).json({ error: error, message: 'Error. Catn"t create product' })
    }

  } else if (req.method === "GET") {
    const products = await stripeAPI.products.list({
      limit: 100,
    });
    return res.status(200).json(products)
  }

  else if (req.method === "DELETE") {
    const {productId} = req.body;
    const product = await stripeAPI.products.del(
      productId
    );
    return res.status(200).json(product)
  }

  else {
    return res.status(400).json({ error: 'Not expected method' })
  }
}