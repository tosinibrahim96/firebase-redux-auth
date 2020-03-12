import { combineReducers } from "redux";
import { setCurrentUserReducer } from "./userReducer";

export default combineReducers({
  user: setCurrentUserReducer
});
