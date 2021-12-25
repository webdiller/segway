import * as types from '../types';

export const setWarranty = (tab) => async (dispatch) => {
  dispatch({
    type: types.SET_SELECTED_TAB,
    payload: tab
  });
};
