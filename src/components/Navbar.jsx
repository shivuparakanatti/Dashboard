import { KanbanSquare, MoreVertical } from 'lucide-react';
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeBoard } from '../features/newboardSlice';

const Navbar = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch()

    const [showMore, setShowMore] = useState(false)
    const currentBoard = useSelector(state=>{
        return state.currentBoardReducer.currentBoardName
    })
    const currentName = useSelector(state=>{
        return state.currentBoardReducer.currentBoardName
    })

    const handleNewTask=()=>{
        navigate(`/${currentName}/addnewtask`)
    }

    const handleMore=()=>{
        setShowMore(!showMore)
    }

    const handleDeleteBoard=()=>{
        dispatch(removeBoard({boardName : currentBoard}))
        navigate('/')
    }
    const handleEditBoard=()=>{
        navigate(`/newboard/${currentName}`)
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
                <div className='relative'>

                <MoreVertical className='cursor-pointer' onClick={handleMore}/>
                <div className={` ${showMore ? 'flex' : 'hidden'} absolute top-8 right-2 text-base w-36 bg-slate-50 flex flex-col items-start justify-start gap-2 py-2 px-2 rounded-md `}>
                    <p className='cursor-pointer' onClick={handleEditBoard}>Edit Board</p>
                    <p className='cursor-pointer text-red-500' onClick={handleDeleteBoard}>Delete Board</p>
                </div>
                </div>
            </div>

            
        </div>
    )
}

export default Navbar