import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    boards :[]
}

export const boardSlice = createSlice({
    name : 'board',
    initialState,
    reducers : {
        addBoard :(state,action)=>{
            const todo= {
                id : nanoid(),
                boardName : action.payload
            }
            state.boards.push(todo)
        }
    }
})

export const {addBoard} = boardSlice.actions
export default boardSlice.reducer