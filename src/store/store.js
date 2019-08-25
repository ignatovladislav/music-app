import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer/reducer";
import thunk from "redux-thunk";

export default createStore(
  reducer,
  {
    songs: {},
    loading: true,
    error: false
  },
  applyMiddleware(thunk)
);