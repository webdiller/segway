import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  discountCode: '',
  email: '',
  emailMeWithNewsAndOffers: false,
  firstName: '',
  lastName: '',
  address: '',
  apartment: '',
  country: '',
  city: '',
  state: '',
  zipCode: '',
  phone: '',
  saveThisInfoForNextTime: false,
  shippingMethod: {
    economy: false
  },
  payment: {
    creditCard: true,
    paypal: false,
    affirm: false,
    coinbase: false,
  }
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setDiscountCode: (state, action) => {
      state.discountCode = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setEmailMeWithNewsAndOffers: (state, action) => {
      state.emailMeWithNewsAndOffers = action.payload
    },
    setLastName: (state, action) => {
      state.lastName = action.payload
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload
    },
    setAddress: (state, action) => {
      state.address = action.payload
    },
    setApartment: (state, action) => {
      state.apartment = action.payload
    },
    setCountry: (state, action) => {
      state.country = action.payload
    },
    setCity: (state, action) => {
      state.city = action.payload
    },
    setState: (state, action) => {
      state.state = action.payload
    },
    setZipCode: (state, action) => {
      state.zipCode = action.payload
    },
    setPhone: (state, action) => {
      state.phone = action.payload
    },
    setSaveThisInfoForNextTime: (state, action) => {
      state.saveThisInfoForNextTime = action.payload
    },

  }
})

export const {
  setDiscountCode,
  setEmail,
  setEmailMeWithNewsAndOffers,
  setLastName,
  setFirstName,
  setAddress,
  setApartment,
  setCountry,
  setCity,
  setState,
  setZipCode,
  setPhone,
  setSaveThisInfoForNextTime } = profileSlice.actions
export default profileSlice.reducer


