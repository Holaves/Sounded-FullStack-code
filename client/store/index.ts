import { Context,    createWrapper } from "next-redux-wrapper";
import { Action,  Store, applyMiddleware, legacy_createStore } from "redux";
import { RootState, reducer, rootReducer } from "./reducers";
import { ThunkAction, ThunkDispatch, thunk } from "redux-thunk";


const makeStore = (context: Context) => legacy_createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});

export type NextThunkDispatch = ThunkDispatch<RootState, void, Action>