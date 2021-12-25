import * as types from '../types';

const initialState = {
  selectedTab: null,
};

export const selectedWarranty = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.SET_SELECTED_TAB:
      return {
        ...state,
        selectedTab: payload
      };
    default:
      return state;
  }
};
