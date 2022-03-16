import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  preparedProduct: null,
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

      // console.log(current(state.preparedProduct).id);

      // const currentId = new URLSearchParams(currentProduct.id);
      // const newId = new URLSearchParams(currentProduct.id);

      // newId.set('warranty', selectedWarranty);
      // newId.set('color', selectedColor);
    },

    setCurrentPrice: (state, action) => {
      state.currentPrice = action.payload
    }

  }

})

export const { initProduct, setProperties, setCurrentPrice } = preparedProductSlice.actions
export default preparedProductSlice.reducer