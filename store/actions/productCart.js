import * as types from '../types';

export const setProducts = (items) => async (dispatch) => {
  dispatch({
    type: types.SET_PRODUCTS,
    payload: items
  });
};

export const setUniqueProductsCount = (productsCount) => async (dispatch) => {
  dispatch({
    type: types.SET_TOTAL_UNIQUE_PRODUCTS,
    payload: productsCount
  });
};

