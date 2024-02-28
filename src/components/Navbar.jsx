import { ArrowBigDown, ArrowDown, ArrowDown01, ArrowDownFromLine, ArrowDownIcon, KanbanSquare, MoreVertical } from 'lucide-react';
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeBoard } from '../features/newboardSlice';
import {
    DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Button } from './ui/button'
import { currentBoard } from '@/features/currentBoardSlice';
import { cn } from '@/lib/utils';
const Navbar = () => {
            
    const dispatch = useDispatch()
    const navigate=useNavigate()

    const [position, setPosition] = React.useState("bottom")

    const allBoards = useSelector(state=>{
        return state.boardReducer.boards
    })
const handleBoard=(board)=>{
      dispatch(currentBoard(board.boardName))
       
    }

    const [showMore, setShowMore] = useState(false)
    const currentboardName = useSelector(state=>{
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
        dispatch(removeBoard({boardName : currentboardName}))
        navigate('/')
    }
    const handleEditBoard=()=>{
        navigate(`/newboard/${currentName}`)
    }
    return (
        <div className='flex items-center justify-between px-2 md:px-10 py-4 text-3xl'>

            <div className='flex items-center justify-between  '>
                <div className='flex items-center justify-center gap-10 '>
                    <KanbanSquare color="#b05ead" size={35}/>
                    <h1 className='hidden sm:flex'>Kanban</h1>

                </div>
               
            </div>

            <div className='items-start justify-start hidden sm:flex'>
                    <h1>{currentboardName}</h1>
                    
                </div>
            <div className='items-start justify-start sm:hidden'>
            <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{currentboardName} <ArrowDown/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>All Boards</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>


        {
            allBoards.map(ele=>{
                return (
                    <>
                    <DropdownMenuRadioItem value={ele.boardName} key={ele.boardName} onClick={(e)=>{handleBoard(ele)}}>{ele.boardName}</DropdownMenuRadioItem>
         
                    
                    </>
                )
            })
        }                   <Link to="/newboard">

                            <DropdownMenuRadioItem value='New Board' className={cn('bg-slate-200 hover:bg-blue-500')}> Create New Board</DropdownMenuRadioItem>
        </Link>

          
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
                    
                </div>
            <div className='flex items-center justify-center gap-4 '>
                <Button className='bg-blue-400 hover:bg-blue-300 px-2 py-1 rounded-lg' variant="secondary" onClick={handleNewTask}>Add New Task</Button>
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