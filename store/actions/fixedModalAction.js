import * as types from '../types';

export const setPrice = (price) => async (dispatch) => {
  dispatch({
    type: types.SET_PRICE_FOR_FIXED_MODAL,
    payload: price
  });
};

export const setSegway = (segway) => async (dispatch) => {
  dispatch({
    type: types.SET_SEGWAY_FOR_FIXED_MODAL,
    payload: segway
  });
};
