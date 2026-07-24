import { configureStore } from "@reduxjs/toolkit";
import BlogsReducer from "../Slices";
const store=configureStore({
    reducer:{
        Blogs:BlogsReducer
    }
})
export type RootStateType= ReturnType<typeof store.getState>;
export default store