import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import componentData from "../reducers/componentDataReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      allData: componentData
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
