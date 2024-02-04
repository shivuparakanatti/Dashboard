import { configureStore } from "@reduxjs/toolkit";
import boardReducer from '../features/newboardSlice'
export const store = configureStore({
    reducer : boardReducer,
})