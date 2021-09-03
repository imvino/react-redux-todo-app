import {createSlice} from "@reduxjs/toolkit";
import {nanoid} from "nanoid";


export const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push( action.payload+nanoid());
            console.log(action)
        },
    },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
