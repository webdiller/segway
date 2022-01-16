import * as types from '../types';

export const setSlideIndex = (slideIndex) => async (dispatch) => {
  dispatch({
    type: types.SET_SLIDE_INDEX,
    payload: slideIndex
  });
};
