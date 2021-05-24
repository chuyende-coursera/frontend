import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import sagas from "./sagas";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(createLogger(), sagaMiddleware))
);

for (let saga in sagas) {
  saga;
  // eslint-disable-next-line import/namespace
  sagaMiddleware.run(sagas[saga]);
}

export default store;
