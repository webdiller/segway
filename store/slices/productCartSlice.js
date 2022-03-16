import { createSlice, current } from "@reduxjs/toolkit";
import e from "cors";
import { calculateTotalPrice } from "helpers/calculateTotalPrice";

const initialState = {
  products: [],
  totalPrice: 0
}

export const productCartSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    addQuantity: (state, action) => {
      const { id, count = 1 } = action.payload;
      const product = state.products.find((product) => product.id === id)

      if (product) {
        product.quantity = product.quantity + count
      } else {
        console.log('can"t fint product');
      }
      state.totalPrice = calculateTotalPrice(state.products)
    },

    pushProduct: (state, action) => {
      const item = action.payload;
      const product = state.products.find((product) => product.id === item.id)
      if (product) {
        product.quantity = ++product.quantity
      } else {
        state.products.push(item)
      }

      const accessories = state.products.filter(product => product.type === 'accessory');
      const models = state.products.filter(product => product.type !== 'accessory');
      state.products = [...models, ...accessories]
      state.totalPrice = calculateTotalPrice(state.products)
    },

    removeProduct: (state, action) => {
      const item = action.payload;
      const product = state.products.find((product) => product.id === item.id)

      if (product) {
        if (product.quantity === 1) {
          state.products = state.products.filter((product) => product.id !== item.id)
        }
        if (product.quantity > 1) {
          product.quantity = --product.quantity
        }
      }
      state.totalPrice = calculateTotalPrice(state.products)
    },

    setPropertiesForProduct: (state, action) => {
      const { currentProduct, selectedWarranty, selectedColor } = action.payload;

      const currentId = new URLSearchParams(currentProduct.id);
      const newId = new URLSearchParams(currentProduct.id);

      newId.set('warranty', selectedWarranty);
      newId.set('color', selectedColor);

      const existProduct = state.products.find(product => product.id === newId.toString());

      if (!existProduct) {
        const currentProduct = state.products.find(product => product.id === currentId.toString());
        currentProduct.id = newId.toString()
      } else {
        const currentProductQuantity = state.products.find(product => product.id === currentId.toString()).quantity;
        const newProductQuantity = state.products.find(product => product.id === newId.toString()).quantity;
        const summOfQUantity = Number(currentProductQuantity) + Number(newProductQuantity);

        const filteredProducts = state.products.filter(product => product.id !== newId.toString())
        const currentProduct = state.products.find(product => product.id === currentId.toString())
        currentProduct.quantity = summOfQUantity
        currentProduct.id = newId.toString()
        state.products = filteredProducts
      }
      state.totalPrice = calculateTotalPrice(state.products)
    }

  }
})

export const { addQuantity, pushProduct, removeProduct, setPropertiesForProduct } = productCartSlice.actions
export default productCartSlice.reducer