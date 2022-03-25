const stripeAPI = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default stripeAPI;
