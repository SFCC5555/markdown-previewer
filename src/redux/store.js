import { configureStore } from "@reduxjs/toolkit";

// Import the individual reducers for mode, input, and font from their respective files
import modeReducer from './modeSlice';
import inputReducer from './inputSlice';
import fontReducer from './fontSlice';

// Create the Redux store using configureStore
export const store = configureStore({
    // Define the reducers for the store, associating each reducer with a specific state slice
    reducer: {
        mode: modeReducer,   // Reducer for managing the mode state
        input: inputReducer, // Reducer for managing the input state
        font: fontReducer    // Reducer for managing the font state
    }
});