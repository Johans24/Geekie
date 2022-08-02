import { combineReducers, createStore } from "redux";
import { moviesReducer } from "./movies/reducers/reducers";
import { seriesReducer } from "./series/reducers/reducers";
import { mediaReducer } from "./media/reducers/reducers";
import { apiConfigReducer } from "./api-config/reducers";

const reducers = combineReducers({
  MoviesStore: moviesReducer,
  SeriesStore: seriesReducer,
  MediaStore: mediaReducer,
  ApiConfigStore: apiConfigReducer
})

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;