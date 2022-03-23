import { createSlice, current } from "@reduxjs/toolkit";
import { calculateTotalPrice } from "helpers/calculateTotalPrice";

const initialState = {
  products: [],
  totalPrice: 0,

  preparedProduct: null,
  preparedProtectionAccessory: null,
  currentPrice: null
}

export const productCartSlice = createSlice({
  name: 'productCart',
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

      /** Если нашли продукт в текущей корзине, то увеличиваем значение */
      if (product) product.quantity = product.quantity + 1

      /** Если не нашли продукт в текущей корзине, то добавляем его в корзину */
      if (!product) state.products.push(item)

      /** Если в корзине есть продукт и нету защиты, то добавляем ее в корзину */
      let existAnyProduct = state.products.filter(product => product.type !== 'accessory');
      let existProtectionAccessory = state.products.filter(product => product.id === 'segway-protective-gear-set');
      let condition = existAnyProduct.length !== 0 && existProtectionAccessory.length === 0 ? true : false;
      
      if (condition) state.products = [...state.products, state.preparedProtectionAccessory]

      /** Сортируем товары в корзине */
      const accessories = state.products.filter(product => product.type === 'accessory');
      const models = state.products.filter(product => product.type !== 'accessory');
      state.products = [...models, ...accessories]
      state.totalPrice = calculateTotalPrice(state.products)
    },

    removeProduct: (state, action) => {
      const item = action.payload;
      const product = state.products.find((product) => product.id === item.id)

      if (product) {
        if (product.quantity === 1 || product.quantity === 0) {
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
    },

    /** Инициализуруем продукт для кнопок с быстрым добавлением товара в корзину */
    initProduct: (state, action) => {
      const { product, currentPrice } = action.payload;
      state.preparedProduct = product
      state.currentPrice = currentPrice
    },

    setProperties: (state, action) => {
      const { selectedWarranty, selectedColor } = action.payload;

      const idParams = new URLSearchParams(state.preparedProduct.id);
      idParams.set('warranty', selectedWarranty)
      idParams.set('color', selectedColor)

      state.preparedProduct.id = idParams.toString()
    },

    setCurrentPrice: (state, action) => {
      state.currentPrice = action.payload
    },
    
    /** Инициализуруем подарок для кнопок с быстрым добавлением товара в корзину */
    setPreparedProtectionAccessory: (state, action) => {
      let preparedProtection = action.payload;
      state.preparedProtectionAccessory = preparedProtection
    }

  }
})

export const {
  addQuantity,
  pushProduct,
  removeProduct,
  setPropertiesForProduct,
  initProduct,
  setProperties,
  setCurrentPrice,
  setPreparedProtectionAccessory
} = productCartSlice.actions
export default productCartSlice.reducer