import { configureStore, createSlice, ThunkAction } from '@reduxjs/toolkit';
import slice from "../toolkit/toolkitSlice"
import { createWrapper } from 'next-redux-wrapper';
import { Action, combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

const rootRedusers = combineReducers({
    [slice.name]: slice.reducer,
});

const makeStore = () =>
    configureStore({
        reducer
    });

export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        }
        if (state.count) nextState.count = state.count
        return nextState
    } else {
        return rootRedusers(state, action)
    }
}

export const wrapper = createWrapper(makeStore, { debug: true });