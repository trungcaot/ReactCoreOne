import rootReducer from "./reducers";
import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// const loggerMiddleware = (store) => (next) => (action) => {
//   console.log("dispatching", action);
//   let result = next(action);
//   console.log("next state", store.getState());
//   return result;
// };

const configureStore = (initialState?: any) => {
  const composeEnhancers =
    process.env.NODE_ENV !== "production"
      ? composeWithDevTools(applyMiddleware(thunk))
      : applyMiddleware(thunk);
  const store: Store = createStore(rootReducer, initialState, composeEnhancers);

  // if (module.hot) {
  //   module.hot.accept("../reducers", () => {
  //     store.replaceReducer(require("../reducers").default);
  //   });
  // }
  return store;
};

export default configureStore;
