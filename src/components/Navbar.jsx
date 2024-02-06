import { KanbanSquare, MoreVertical } from 'lucide-react';
import React from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate=useNavigate()
    const currentBoard = useSelector(state=>{
        return state.currentBoardReducer.currentBoardName
    })
    const currentName = useSelector(state=>{
        return state.currentBoardReducer.currentBoardName
    })

    const handleNewTask=()=>{
        navigate(`/${currentName}/addnewtask`)
    }
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
                <button className='bg-blue-400 px-2 py-1 rounded-lg' onClick={handleNewTask}>Add new Task</button>
                <MoreVertical />
            </div>

            
        </div>
    )
}

export default Navbar