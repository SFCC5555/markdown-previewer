import { configureStore } from "@reduxjs/toolkit";
import modeReducer from './modeSlice';
import inputReducer from './inputSlice';


export const store = configureStore({
    reducer: {
        mode: modeReducer,
        input: inputReducer,
    }
})