import { MediaActionTypes } from "../action-types/action-types";

const initialState = {
  media: [],
  loadingMedia: false
};

export const mediaReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MediaActionTypes.SET_MEDIA:
      return {
        ...state,
        media: payload
      }
    case MediaActionTypes.SET_LOADING_MEDIA:
        return {
          ...state,
          loadingMedia: payload
        }
    default:
      return {...state};
  }
};
