import * as types from '../types';

const initialState = {
  active: false
};

export const compareModal = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.SET_COMPARE_MODAL:
      return {
        ...state,
        active: payload
      };
    default:
      return state;
  }
};
