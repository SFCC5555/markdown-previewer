import { createSlice } from "@reduxjs/toolkit";
import {data} from '../data.js'


const initialState = data;

export const inputSlice = createSlice({
    name:'input',
    initialState,
    reducers: {
        updateInput: (state,action)=>{

            state = action.payload;

            return state;


        }
    }

})

export const {updateInput} = inputSlice.actions;
export default inputSlice.reducer;