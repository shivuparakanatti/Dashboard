import { createSlice } from "@reduxjs/toolkit"
import { ActivityIcon } from "lucide-react"

const initialState={
    currentBoardName : 'Developers'
}

const currentBoardSlice= createSlice({
    name : 'currentBoardName',
initialState,
reducers : {
    currentBoard : (state,action)=>{
        state.currentBoardName = action.payload
    }
}
})

export const {currentBoard} = currentBoardSlice.actions 
export default currentBoardSlice.reducer