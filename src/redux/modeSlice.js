import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the 'mode' slice of the Redux store
const initialState = localStorage.getItem('modeStorage') ? JSON.parse(localStorage.getItem('modeStorage')) : 'light';

// Create a 'modeSlice' using createSlice
export const modeSlice = createSlice({
    name: 'mode', // Specify the name of the slice
    initialState, // Set the initial state
    reducers: {
        // Define the 'changeMode' reducer function
        changeMode: (state, action) => {
            // Update the state with the payload (new mode)
            state = action.payload;

            // Store the updated mode in localStorage
            localStorage.setItem('modeStorage', JSON.stringify(state));

            // Return the updated state
            return state;
        }
    }
});

// Export the 'changeMode' action for use in components
export const { changeMode } = modeSlice.actions;

// Export the 'modeSlice' reducer
export default modeSlice.reducer;