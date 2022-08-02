import { MediaActionTypes } from "../action-types/action-types"

export const setMedia = (media) => {
  return {
    type: MediaActionTypes.SET_MEDIA,
    payload: media
  }
}

export const setLoadingMedia = (loadingMedia) => {
  console.log("CALLED")
  return {
    type: MediaActionTypes.SET_LOADING_MEDIA,
    payload: loadingMedia
  }
}