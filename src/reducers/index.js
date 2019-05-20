
import { combineReducers } from "redux";
import { questsReducer } from "./questsReducer";

const rootReducer = combineReducers({
  quests: questsReducer
});

export default rootReducer;
