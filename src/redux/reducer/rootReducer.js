import { combineReducers } from "redux";
import movieReducer from "../reducer/movieReducer";
import commonReducers from "./common.Reducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  common: commonReducers,
});

export default rootReducer;
