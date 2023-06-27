import { configureStore } from "@reduxjs/toolkit";
import modeReducer from './modeSlice';
import inputReducer from './inputSlice';
import fontReducer from './fontSlice';


export const store = configureStore({
    reducer: {
        mode: modeReducer,
        input: inputReducer,
        font: fontReducer
    }
})