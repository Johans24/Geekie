import { ApiConfigActionTypes } from "./action-types";

const initialState = {
  apiConfig: {}
};

export const apiConfigReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ApiConfigActionTypes.SET_API_CONFIG:
      return {
        ...state,
        apiConfig: payload
      }
    default:
      return {...state};
  }
};
