import { combineReducers } from "redux";
import DataReducer from "./actions/reducer";

const rootReducer = combineReducers({
  dataReducer: DataReducer,
});

export default rootReducer;
