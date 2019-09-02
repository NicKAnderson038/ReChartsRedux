import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

/* Import Reducers */
import firstReducer from "./reducers/first";

const rootReducer = combineReducers({
  /* Include reducers */
      firstReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;