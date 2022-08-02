import { MovieActionTypes } from "../action-types/action-types";

const initialState = {
  movies: [],
};

export const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MovieActionTypes.SET_MOVIES:
      return state;
    default:
      return state;
  }
};
