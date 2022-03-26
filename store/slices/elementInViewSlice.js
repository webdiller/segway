import { createSlice, current } from "@reduxjs/toolkit";

/** Если true, то показываем скролл */
const initialState = {
  topSlider: true,
  accessoriesSlider: true,
  otherModelsSlider: true,
  otherSliders: {

  }
}

export const elementInViewSlice = createSlice({
  name: 'elementInView',
  initialState,
  reducers: {
    disableTopSlider: (state, action) => {
      state.topSlider = action.payload
    },
    disableAccessoriesSlider: (state, action) => {
      state.accessoriesSlider = action.payload
    },
    disableOtherModelsSlider: (state, action) => {
      state.otherModelsSlider = action.payload
    },
    setCustomSlider: (state, action) => {
      const { sliderName, payload } = action.payload;
      /**
       * Проверяем ключ.
       * Если есть, то обновляем значение
       * Если нету, то добавляем ключ и занчение
       */
      try {
        if (sliderName in state.otherSliders) {
          state.otherSliders[sliderName] = payload
        } else {
          state.otherSliders = {
            ...state.otherSliders,
            [sliderName]: payload
          }
        }
      } catch (error) {
        console.log('Handle error in elementInView Slice');
      }
    }
  }
})

export const {
  disableTopSlider,
  disableAccessoriesSlider,
  disableOtherModelsSlider,
  setCustomSlider
} = elementInViewSlice.actions
export default elementInViewSlice.reducer