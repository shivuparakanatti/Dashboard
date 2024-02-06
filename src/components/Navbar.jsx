import { KanbanSquare, MoreVertical } from 'lucide-react';
import React from "react";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const currentBoard = useSelector(state=>{
        return state.currentBoardReducer.currentBoardName
    })
    return (
        <div className='flex items-center justify-between px-10 py-4 text-3xl'>

            <div className='flex items-center justify-between  '>
                <div className='flex items-center justify-center gap-10 '>
                    <KanbanSquare color="#b05ead" size={35}/>
                    <h1 className='hidden sm:flex'>Kanban</h1>

                </div>
               
            </div>

            <div className='items-start justify-start'>
                    <h1>{currentBoard}</h1>
                </div>
            <div className='flex items-center justify-center gap-4 '>
                <button className='bg-blue-400 px-2 py-1 rounded-lg'>Add new Task</button>
                <MoreVertical />
            </div>
        </div>
    )
}

export default Navbar