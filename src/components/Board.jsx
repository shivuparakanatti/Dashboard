import { useSelector } from "react-redux"
import ReactTable from "react-table";  

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

   const columns= boardDetails[0].columns.map(ele=>{
    return ele
   })

   const data = currentBoardTasks.map(ele=>{
    return ele.taskStatus
   })

    console.log(currentBoardTasks)


    const tasksByStatus = {};
    currentBoardTasks.forEach((row) => {
        const { taskStatus } = row;
        if (!tasksByStatus[taskStatus]) {
          tasksByStatus[taskStatus] = [];
        }
        tasksByStatus[taskStatus].push(row);
      });
    return (
<div className="bg-[#E1F0DA] h-screen ml-56">
 <table className=" ">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Determine the maximum number of rows needed for any status */}
        {Array.from(
          { length: Math.max(...Object.values(tasksByStatus).map((arr) => arr.length)) },
          (_, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, columnIndex) => (
                <td key={columnIndex}>
                  {/* Display task details for the current status and column */}
                  {tasksByStatus[column] &&
                    tasksByStatus[column][rowIndex] && (
                      <div>
                        <p>Board: {tasksByStatus[column][rowIndex].board}</p>
                        <p>Task Name: {tasksByStatus[column][rowIndex].taskName}</p>
                        <p>Task Description: {tasksByStatus[column][rowIndex].taskDisc}</p>
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