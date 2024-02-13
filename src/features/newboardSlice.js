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
        },
        removeBoard : (state,action)=>{
            const index = state.boards.findIndex(ele=>ele.boardName == action.payload.boardName)
            state.boards.splice(index,1)
        }
    }
})

export const {addBoard,removeBoard} = boardSlice.actions
export default boardSlice.reducer