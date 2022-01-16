import * as types from '../types';

export const setCompareModal = (active) => async (dispatch) => {
  dispatch({
    type: types.SET_COMPARE_MODAL,
    payload: active
  });
};
