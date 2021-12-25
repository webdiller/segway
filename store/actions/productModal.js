import * as types from '../types';

export const setProductModal = (active) => async (dispatch) => {
  dispatch({
    type: types.SET_PRODUCT_MODAL,
    payload: active
  });
};
