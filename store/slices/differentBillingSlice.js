import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  differentFirstName: '',
  differentLastName: '',
  differentAddress: '',
  differentApartment: '',
  differentCity: '',
  differentCountry: 'United States',
  differentState: '',
  differentZipCode: '',
  differentPhone: '',
}

export const differentBillingSlice = createSlice({
  name: 'differentBilling',
  initialState,
  reducers: {
    setDifferentFirstName: (state, action) => {
      state.differentFirstName = action.payload
    },
    setDifferentLastName: (state, action) => {
      state.differentLastName = action.payload
    },
    setDifferentAddress: (state, action) => {
      state.differentAddress = action.payload
    },
    setDifferentApartment: (state, action) => {
      state.differentApartment = action.payload
    },
    setDifferentCity: (state, action) => {
      state.differentCity = action.payload
    },
    setDifferentCountry: (state, action) => {
      state.differentCountry = action.payload
    },
    setDifferentState: (state, action) => {
      state.differentState = action.payload
    },
    setDifferentZipCode: (state, action) => {
      state.differentZipCode = action.payload
    },
    setDifferentPhone: (state, action) => {
      state.differentPhone = action.payload
    },
  }
})

export const {
  setDifferentFirstName,
  setDifferentLastName,
  setDifferentAddress,
  setDifferentApartment,
  setDifferentCity,
  setDifferentCountry,
  setDifferentState,
  setDifferentZipCode,
  setDifferentPhone
} = differentBillingSlice.actions

export default differentBillingSlice.reducer
