import { createSlice } from "@reduxjs/toolkit";

const initialState = 'russo-one';

export const fontSlice = createSlice({
    name:'font',
    initialState,
    reducers: {
        changeFont: (state,action)=>{

            state = action.payload;

            return state;


        }
    }

})

export const {changeFont} = fontSlice.actions;
export default fontSlice.reducer;