import { KanbanSquare, PlusSquare } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { currentBoard } from "../features/currentBoardSlice"

const Sidebar = ()=>{

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const allBoards = useSelector(state=>{
        return state.boardReducer.boards
    })

    const currentName = useSelector(state=>{
        return state.currentBoardReducer.currentBoardName
    })

    const handleBoard=(board)=>{
      
        dispatch(currentBoard(board.boardName))
       
    }

    
    return (
        <div className=" hidden sm:flex absolute w-56 flex-col items-start justify-start px-2 py-4 gap-3  h-[89vh]">
            <div>
                <h1 className="text-2xl font-bold">All boards</h1>
            </div>

            {
                allBoards && allBoards.map((ele,i)=>{
                    return(
                        <div key={i}>
                        <div className={`flex items-center justify-center ${currentName==ele.boardName ? 'bg-[#6962AD] text-white rounded-md px-1 py-1': ''} `}>
                        <KanbanSquare size={16} color="#0e0101" />
                        <h1 className="text-2xl mx-1" onClick={(e)=>{handleBoard(ele)}}>{ele.boardName}</h1>
                        </div>
                        
                    </div>
                    )
                })
            }
           
            <div className="flex items-center justify-center hover:bg-blue-100  rounded-lg">
            <PlusSquare size={16} color="#0a0000" />
                <h1 className="text-xl px-1 text-blue-600 "><Link to={'/newboard'}>Create new board</Link></h1>
            </div>
        </div>
    )
}
export default Sidebar