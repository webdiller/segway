import * as types from '../types';

export const setFancyModal = (active) => async (dispatch) => {
  dispatch({
    type: types.SET_FANCY_MODAL,
    payload: active
  });
};

export const setFancyImages = (images) => async (dispatch) => {
  dispatch({
    type: types.SET_FANCY_IMAGES,
    payload: images
  });
};
