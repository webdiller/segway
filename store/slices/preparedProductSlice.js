import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  preparedProduct: null,
  preparedProtectionAccessory: null,
  currentPrice: null
}

export const preparedProductSlice = createSlice({
  name: 'preparedProduct',
  initialState,
  reducers: {
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
    setPreparedProtectionAccessory: (state, action) => {
      let preparedProtection = action.payload;
      state.preparedProtectionAccessory = preparedProtection
    }
  }

})

export const { initProduct, setProperties, setCurrentPrice, setPreparedProtectionAccessory } = preparedProductSlice.actions
export default preparedProductSlice.reducer