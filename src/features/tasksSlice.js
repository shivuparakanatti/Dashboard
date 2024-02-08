import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"



const initialState = {

    allTasks : []
}


const tasksSlice=createSlice({
    name : 'tasks',
    initialState,
    reducers : {
        addNewTask : (state,action)=>{
          
            const task = {
                
                    board : action.payload.boardname,
                    taskName : action.payload.taskName,
                    taskDisc : action.payload.taskDisc,
                    taskStatus : action.payload.taskStatus
                
            }
            state.allTasks.push(task)

    }
}
})
export const {addNewTask} = tasksSlice.actions
export default tasksSlice.reducer