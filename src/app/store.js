import { configureStore } from "@reduxjs/toolkit";
import boardReducer from '../features/newboardSlice'
import currentBoardReducer from '../features/currentBoardSlice'
import tasksSlice from "../features/tasksSlice";
export const store = configureStore({
    reducer :{
        boardReducer:boardReducer,
        currentBoardReducer : currentBoardReducer,
        tasksSlice : tasksSlice
    } 
})