import { useSelector } from "react-redux"

const Boards=()=>{
    const boards = useSelector((state)=>{
        return state.boards
    })
    console.log(boards)
    return (
    <div className="bg-blue-500 h-screen ml-56">Board</div>
    )
}

export default Boards