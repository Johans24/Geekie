import { SeriesActionTypes } from "../action-types/action-types"

export const setSeries = (series) => {
  return {
    type: SeriesActionTypes.SET_SERIES,
    payload: series
  }
}