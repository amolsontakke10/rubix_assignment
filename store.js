import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk"; // Correct way to import redux-thunk
import streamsReducer from "./reducers/streamsReducer";

const rootReducer = combineReducers({
  streams: streamsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
