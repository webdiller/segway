const stripeAPI = require('stripe')(process.env.STRIPE_SECRET_KEY_DEV)

export default stripeAPI;
