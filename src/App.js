import React from "react";
import Routes from "./routes";
import ReduxThunk from "redux-thunk";

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as reducers from "./state";

const rootReducer = combineReducers(reducers);
const enhancer = applyMiddleware(ReduxThunk);

const store =
    process.env.NODE_ENV === "development"
        ? createStore(rootReducer, composeWithDevTools(enhancer))
        : createStore(rootReducer, enhancer);

const App = () => (
    <Provider store={store}>
        <Routes />
    </Provider>
);

export default App;

