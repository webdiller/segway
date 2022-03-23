import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPosition: 0
}

export const topSwiperSlice = createSlice({
  name: 'topSwiper',
  initialState,
  reducers: {
    setPositionSlide: (state, action) => {
      state.currentPosition = action.payload
    }
  }
})

export const { setPositionSlide } = topSwiperSlice.actions
export default topSwiperSlice.reducer