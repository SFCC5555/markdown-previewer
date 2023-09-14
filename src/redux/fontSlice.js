import { createSlice } from "@reduxjs/toolkit";

// Initialize the state with the default font name
const initialState = 'russo-one';

// Create a 'fontSlice' using createSlice
export const fontSlice = createSlice({
    name: 'font', // Specify the name of the slice
    initialState, // Set the initial state
    reducers: {
        // Define the 'changeFont' reducer function
        changeFont: (state, action) => {
            // Update the state with the payload (new font name)
            state = action.payload;

            // Return the updated state
            return state;
        }
    }
});

// Export the 'changeFont' action for use in components
export const { changeFont } = fontSlice.actions;

// Export the 'fontSlice' reducer
export default fontSlice.reducer;