import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  compareModels: {
    activeModal: false,
    selectedModeltoCompare: null
  },
}

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    compareModelsActive: (state, action) => {
      state.compareModels.activeModal = action.payload;
      if (action.payload === true) {
        document.body.classList.add('disabled')
      }
      if (action.payload === false) {
        document.body.classList.remove('disabled')
      }
    },
    selectModelToCompare: (state, action) => {
      state.compareModels.selectedModeltoCompare = action.payload;
    },
  }
})

export const {compareModelsActive, selectModelToCompare} = modalsSlice.actions
export default modalsSlice.reducer