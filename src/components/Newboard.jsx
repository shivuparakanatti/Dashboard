import { X } from "lucide-react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addBoard } from "../features/newboardSlice"
import { currentBoard } from "../features/currentBoardSlice"

const Newboard = ()=>{
    const [boardName,setBoardName]= useState()
    const [tasks,setTasks]= useState([])
    const dispatch = useDispatch()
    
   const navigate = useNavigate()
    const [columns,setColumns] = useState(['column','column'])

    


    const handleInputChange = (event, index) => {
        const value = event.target.value;
       
        // Update the array, creating a new array with the updated value at the specified index
        setTasks((prevData) => {
          const newData = [...prevData];
          newData[index] = value;
          return newData;
        });
      };

    const handleCreateNewBoard=()=>{
        navigate('/');
        dispatch(addBoard({name:boardName,columns:tasks}))
        

    }
    return(
        <div className="flex flex-col  items-center justify-center h-[100vh] bg-[#B4B4B8]">
           <div className="bg-[#F2EFE5] px-8 md:px-12 py-8 md:py-10">
            <h1 className="flex items-center justify-center my-2 text-3xl text-[#113946]">Add New Board</h1>
            <div className="flex flex-col gap-2 ">
                <label htmlFor="name" className="text-2xl">Board Name</label>
                <input type="text" placeholder=" New Board Name" className="border-2 border-black w-40" onChange={(e)=>{setBoardName(e.target.value)}} required />
            </div>
            <div className="flex flex-col gap-4 my-4">
                <label htmlFor="column" className="text-2xl">Board Columns</label>
                {
                    columns && columns.map((ele,index)=>{
                        return(
                            <div className="flex gap-2" key={index}>

                                <input type="text" className="border-2 border-black" onChange={(event) => handleInputChange(event, index)} key={index}/>
                                <X color="#e63737" className="cursor-pointer" onClick={()=>{
                                    
                                    setColumns(columns.slice(0,columns.length-1))
                                    
                                    }}/>
                            </div>
                           
                        )
                    })
                }
            </div>
            <div className="flex flex-col gap-4 my-2 sm:my-4">

            <button className="bg-[#65647C] py-1 rounded-lg text-[#F2EFE5]" onClick={()=>{setColumns([...columns,'columns'])}}>Add columns</button>
            <button className="bg-[#65647C] py-1 rounded-lg text-[#F2EFE5]" onClick={handleCreateNewBoard}>Create new board</button>
            </div>
           </div>
        </div>
    )
}

export default Newboard