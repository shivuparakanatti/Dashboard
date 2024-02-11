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

    },
    updateTask : (state,action)=>{
        const indexToUpdate = state.allTasks.findIndex(obj => obj.taskName === action.payload.taskName);
        if (indexToUpdate !== -1) {
            state.allTasks[indexToUpdate].taskName = action.payload.taskName;
            state.allTasks[indexToUpdate].taskDisc =  action.payload.taskDisc;
            state.allTasks[indexToUpdate].taskStatus =  action.payload.taskStatus;
            
          }
        
    }
}
})
export const {addNewTask,updateTask} = tasksSlice.actions
export default tasksSlice.reducer