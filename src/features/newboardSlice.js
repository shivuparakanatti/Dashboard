import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    boards :[{
        id :1,
        name : 'add',
        columns:['todo','completed']
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