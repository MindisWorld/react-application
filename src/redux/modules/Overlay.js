
const initialState = {
  isOverlayVisible: false
}

const SET_OVERLAY_VISIBILITY = 'SET_OVERLAY_VISIBILITY';

export const setOverlayVisibility = (isVisible) => {
  return {
    type: SET_OVERLAY_VISIBILITY,
    ...isVisible
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_OVERLAY_VISIBILITY': {
      return {
        ...state,
        isOverlayVisible: action.isOverlayVisible
      }
      break;
    }
    default: {
      return state;
    }
  }
};