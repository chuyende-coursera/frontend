import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import * as sagas from "./sagas";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  // const composeEnhancers =
  //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  // // (rootReducer);
  return createStore(
    rootReducer,
    applyMiddleware(createLogger(), sagaMiddleware)
  );
}

for (let saga in sagas) {
  saga;
  // eslint-disable-next-line import/namespace
  sagaMiddleware.run(sagas[saga]);
}
