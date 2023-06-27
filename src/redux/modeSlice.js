import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('modeStorage')?JSON.parse(localStorage.getItem('modeStorage')):'light';

export const modeSlice = createSlice({
    name:'mode',
    initialState,
    reducers: {
        changeMode: (state,action)=>{

            state = action.payload;

            localStorage.setItem('modeStorage',JSON.stringify(state));

            return state;


        }
    }

})

export const {changeMode} = modeSlice.actions;
export default modeSlice.reducer;