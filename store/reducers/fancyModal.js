import * as types from '../types';

const initialState = {
  active: false,
  activeIndex: 0,
  images: []
};

export const fancyModal = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.SET_FANCY_MODAL:
      const {isActiveModal, activeIndex} = payload;
      return {
        ...state,
        active: isActiveModal,
        activeIndex: activeIndex
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
