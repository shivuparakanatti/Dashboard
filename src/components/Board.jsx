import { MoreVertical } from "lucide-react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
 

const Boards=()=>{
  const navigate = useNavigate()
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

   const columns= boardDetails[0].columns.map(ele=>{
    return ele
   })

   const data = currentBoardTasks.map(ele=>{
    return ele.taskStatus
   })

   


    const tasksByStatus = {};
    currentBoardTasks.forEach((row) => {
        const { taskStatus } = row;
        if (!tasksByStatus[taskStatus]) {
          tasksByStatus[taskStatus] = [];
        }
        tasksByStatus[taskStatus].push(row);
      });

      const handleEdit=(e)=>{
        console.log(e)
        navigate(`/${boardName}/addnewtask/${e}`)
      }
     
    return (
<div className="bg-[#E1F0DA] h-screen ml-0 sm:ml-56">
 <table className=" ">
      <thead>
        <tr  className="">
          {columns.map((column, index) => (
            <th key={index} className="w-48 md:w-60 text-2xl ">{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Determine the maximum number of rows needed for any status */}
        {Array.from(
          { length: Math.max(...Object.values(tasksByStatus).map((arr) => arr.length)) },
          (_, rowIndex) => (
            <tr key={rowIndex} className="">
              {columns.map((column, columnIndex) => (
               
                <td key={columnIndex} className="w-24 md:w-60">
                  {/* Display task details for the current status and column */}
                  {tasksByStatus[column] &&
                    tasksByStatus[column][rowIndex] && (
                    
                      <div className={`mx-4 flex flex-col  relative items-center justify-center w-48 my-4 ${columnIndex%2 == 0 ? 'bg-[#B19470]' : 'bg-[#C6A969]' }  px-2 py-4`}>
                        <div className="group ">

                        <MoreVertical color="#fafafa" className="absolute  top-1 right-0 cursor-pointer" onClick={()=>{handleEdit(tasksByStatus[column][rowIndex].taskName)}}/>
                        <span className="absolute -top-6 right-0 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white z-10 group-hover:scale-100" >Edit</span>
                        </div>
                        
                        <p className="text-xl ">{tasksByStatus[column][rowIndex].taskName}</p>
                        <p className="text-sm"> {tasksByStatus[column][rowIndex].taskDisc}</p>
                      </div>
                    )}
                </td>
              ))}
            </tr>
          )
        )}
      </tbody>
    </table>
    </div>
        
  
    )
}

export default Boards