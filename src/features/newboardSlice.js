import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    boards :[{
      
        boardName: "Developers",
        columns:[ 'in progress', 'completed', 'todo'],
        id: "20000"
    }]
}

export const boardSlice = createSlice({
    name : 'board',
    initialState,
    reducers : {
        addBoard :(state,action)=>{
            const todo= {
                id : nanoid(),
                boardName : action.payload.name,
                columns : action.payload.columns
            }
            state.boards.push(todo)
        }
    }
})

export const {addBoard} = boardSlice.actions
export default boardSlice.reducer