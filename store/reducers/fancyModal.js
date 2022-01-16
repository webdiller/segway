import * as types from '../types';

const initialState = {
  active: false,
  images: []
};

export const fancyModal = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.SET_FANCY_MODAL:
      return {
        ...state,
        active: payload
      };
      case types.SET_FANCY_IMAGES:
      return {
        ...state,
        images: payload
      };
    default:
      return state;
  }
};
