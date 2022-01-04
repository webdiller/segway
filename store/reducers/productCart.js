import * as types from '../types';

/** Карточка товара (не модалка) */
const initialState = {
  items: [],
  cartTotal: 0,
  totalUniqueItems: 0
};

export const productCart = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.SET_PRODUCTS:
      return {
        ...state,
        items: payload,
        cartTotal: calculateTotalPrice(payload)
      };
    case types.SET_TOTAL_UNIQUE_PRODUCTS:
      return {
        ...state,
        totalUniqueItems: payload
      };
    default:
      return state;
  }
};

const calculateTotalPrice = (products) => {
  let calculatedPrice = 0;
  products.map((product) => {
    if (product.id.includes('warrancy')) {
      const {id, warranty, price, quantity} = product;
      let warrantyId = id.split('warrancy=')[1];
      let priceOfWarranty = Number(warranty[warrantyId].price);
      let totalPrice = (priceOfWarranty + Number(price)) * Number(quantity);
      calculatedPrice = calculatedPrice + totalPrice;
    } else {
      const {price, quantity} = product;
      let totalPrice = Number(price) * quantity;
      calculatedPrice = calculatedPrice + totalPrice;
    }
  });
  return calculatedPrice;
};
