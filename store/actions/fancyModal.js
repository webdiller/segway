import * as types from '../types';

/**
 * @param {number} activeIndex 
 * @param {boolean} isActiveModal 
 */
export const setFancyModal = (isActiveModal, activeIndex) => async (dispatch) => {
  dispatch({
    type: types.SET_FANCY_MODAL,
    payload: {isActiveModal, activeIndex}
  });
};

export const setFancyImages = (images) => async (dispatch) => {
  dispatch({
    type: types.SET_FANCY_IMAGES,
    payload: images
  });
};
