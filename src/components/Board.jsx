import { useSelector } from "react-redux"

const Boards=()=>{
    const boardName = useSelector((state)=>{
        return state.currentBoardReducer.currentBoardName
    })
    const allBoards = useSelector((state)=>{
        return state.boardReducer.boards
    })

     const boardDetails = allBoards.filter(ele=>{
         return ele.boardName == boardName
     })
    
     const tasks = useSelector(state=>{
        return state.tasksSlice.allTasks
    })
    const currentBoardTasks = tasks.filter(ele=>{
        return ele.board == boardName
    })

    console.log(currentBoardTasks)
    return (
    <div className="bg-[#E1F0DA] h-screen ml-56 flex gap-1 ">
        {
             boardDetails && boardDetails[0].columns.map(ele=>{
                return <h1 className="w-1/4  mx-2 my-2">{ele}</h1>
             })
        }
        <div className="w-1/4 flex items-center justify-center ">
            <h1 className="bg-[#756AB6] text-2xl px-1 py-2 rounded-md">Add New Task</h1>
            </div>
    </div>
    )
}

export default Boards