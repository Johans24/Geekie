import { ApiConfigActionTypes } from "./action-types"

export const setApiConfig = (apiConfig) => {
  return {
    type: ApiConfigActionTypes.SET_API_CONFIG,
    payload: apiConfig
  }
}