import * as types from '../types';

/** Фиксированная модалка */
const initialState = {
  currentPrice: 0,
  currentSegway: null
};

export const fixedModal = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.SET_PRICE_FOR_FIXED_MODAL:
      return {
        ...state,
        currentPrice: payload
      };
    case types.SET_SEGWAY_FOR_FIXED_MODAL:
      return {
        ...state,
        currentSegway: payload
      };
    default:
      return state;
  }
};
