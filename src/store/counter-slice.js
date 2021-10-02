import {createSlice} from '@reduxjs/toolkit';

const initialState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increse(state, action){
            state.counter+= action.payload;
        },
        toggle(state){
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterAction = counterSlice.actions;

export  default counterSlice.reducer;