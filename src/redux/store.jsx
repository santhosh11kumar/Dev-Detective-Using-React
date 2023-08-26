import { configureStore } from "@reduxjs/toolkit";
import { Name } from "./Slice/Name";


export const store = configureStore({
    //  list all the functions and slices 
    // in slice function name given : slice function's name

    reducer:
    {
        NameData: Name.reducer,
    }

})