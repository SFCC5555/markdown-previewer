// Import createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";
import { data } from '../data.js';

// Initialize the state with the data from 'data.js'
const initialState = data;

// Create an 'inputSlice' using createSlice
export const inputSlice = createSlice({
    name: 'input', // Specify the name of the slice
    initialState, // Set the initial state
    reducers: {
        // Define the 'updateInput' reducer function
        updateInput: (state, action) => {
            // Update the state with the payload (new input data)
            state = action.payload;

            // Return the updated state
            return state;
        }
    }
});

// Export the 'updateInput' action for use in components
export const { updateInput } = inputSlice.actions;

// Export the 'inputSlice' reducer
export default inputSlice.reducer;