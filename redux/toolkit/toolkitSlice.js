import { createAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';

const slice = createSlice({
    name: "toolkit",
    initialState: {
        count: 0,
        todos: ["asd", "123123"]
    },
    reducers: {
        increment(state) {
            state.count = state.count + 1
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('HYDRATE', state, action.payload);
            return {
                ...state,
                ...action.payload.some,
            };
        },
    },
})

export default slice
export const { increment } = slice.actions