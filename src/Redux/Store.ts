import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import rootReducer from "./Reducers/RootReducer";

import thunk from "redux-thunk";

const saga = createSagaMiddleware();
const middlewares = [thunk, saga];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
