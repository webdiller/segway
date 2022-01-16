import * as types from '../types';

const initialState = {
  selectedSlide: 0,
};

export const welcomeSlider = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.SET_SLIDE_INDEX:
      return {
        ...state,
        selectedSlide: payload
      };
    default:
      return state;
  }
};
