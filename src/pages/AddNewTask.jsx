import { useNavigate, useParams } from "react-router-dom"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addNewTask } from "../features/tasksSlice";

const Addnewtask = () => {
    const [taskName, setTaskName] = useState()
    const [disc, setDisc] = useState()
    const [status, setStatus] = useState()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const taskDetails = { taskName, disc, status }

    const { boardname } = useParams()

    const boardsDetails = useSelector(state => {
        return state.boardReducer.boards
    })
    const currentBoardDetails = boardsDetails.filter(ele => {
        return ele.boardName == boardname
    })

    const options = currentBoardDetails[0].columns

    let defaultOption = options[0];

    const handleDropdown = (e) => {

        setStatus(e.value)
    }

    const handleCreate = (e) => {

        //console.log(taskDetails)
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(taskDetails)
        dispatch(addNewTask({boardname,taskName :taskName, taskDisc:disc,taskStatus:status}))
        navigate('/')
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4 text-xl h-[95vh] text-[#161A30]">
            <form className="bg-[#C7C8CC] px-10 py-20 flex flex-col items-center justify-center gap-4 rounded-md" onSubmit={handleFormSubmit}>
                <h1 className="text-2xl">Add new Task</h1>
                <div className="flex flex-col gap-2 w-full">
                    <label >Task Name</label>
                    <input type="text" className="border-2 border-black" onChange={(e) => {
                        setTaskName(e.target.value)
                    }} required />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label >Discription</label>
                    <textarea type="textarea" className="border-2 border-black w-full" onChange={(e) => {
                        setDisc(e.target.value)
                    }} required />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label >Current Status</label>
                    <Dropdown options={options} onChange={handleDropdown} placeholder="Select an option" required='true' />

                </div>
                <input type="submit" className="bg-[#1D2B53] cursor-pointer py-1 w-full text-white" onSubmit={handleCreate} value='Create Task' />
            </form>
        </div>

    )
}

export default Addnewtask