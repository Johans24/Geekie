import { SeriesActionTypes } from "../action-types/action-types";

const initialState = {
  series: [
    {
      name: "The Big Bang Theory",
      seasons: 10,
    },
  ],
};

export const seriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SeriesActionTypes.SET_SERIES:
      return state;
    default:
      return state;
  }
};
