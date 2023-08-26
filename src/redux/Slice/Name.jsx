import { createSlice } from "@reduxjs/toolkit";

export const Name = createSlice({

    name: "NameData",
    initialState: [],  // selected things
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            return [];
        }
    }
})

export const { add, remove } = Name.actions;
export default Name.reducer;