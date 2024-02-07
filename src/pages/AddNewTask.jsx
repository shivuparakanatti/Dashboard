import { useParams } from "react-router-dom"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useSelector } from "react-redux";

const Addnewtask = ()=>{
    const {boardname} = useParams()

    const boardsDetails = useSelector(state=>{
        return state.boardReducer.boards
    })
    const currentBoardDetails = boardsDetails.filter(ele=>{
        return ele.boardName == boardname
    })
    console.log(currentBoardDetails)
    const options = currentBoardDetails[0].columns

      let defaultOption = options[0];

      const handleDropdown=(e)=>{
        console.log(e.value)
      }
   
    return (
        <div className="flex flex-col items-center justify-center gap-4 text-xl h-[95vh] text-[#161A30]">
            <div className="bg-[#C7C8CC] px-10 py-20 flex flex-col items-center justify-center gap-4 rounded-md">
                <h1 className="text-2xl">Add new Task</h1>
            <div className="flex flex-col gap-2 w-full">
                <label >Task Name</label>
                <input type="text" className="border-2 border-black" required />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label >Discription</label>
                <textarea type="textarea" className="border-2 border-black w-full"  required/>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label >Current Status</label>
                <Dropdown options={options}  onChange={handleDropdown} placeholder="Select an option" required='true'/>

            </div>
            <button className="bg-[#1D2B53]  py-1 w-full text-white">Create Task</button>
            </div>
        </div>

    )
}

export default Addnewtask