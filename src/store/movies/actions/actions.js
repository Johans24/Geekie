import { MovieActionTypes } from "../action-types/action-types"

export const setMovies = (movies) => {
  return {
    type: MovieActionTypes.SET_MOVIES,
    payload: movies
  }
}