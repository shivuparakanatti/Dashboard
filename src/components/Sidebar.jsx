import { KanbanSquare, PlusSquare } from "lucide-react"
import { Link } from "react-router-dom"

const Sidebar = ()=>{
    return (
        <div className=" hidden sm:flex absolute w-56 flex-col items-start justify-start px-2 py-4 gap-3  h-[89vh]">
            <div>
                <h1 className="text-2xl font-bold">All boards</h1>
            </div>
            <div>
                <div className="flex items-center justify-center">
                <KanbanSquare size={16} color="#0e0101" />
                <h1 className="text-2xl mx-1">name1</h1>
                </div>
                
            </div>
            <div className="flex items-center justify-center hover:bg-blue-100  rounded-lg">
            <PlusSquare size={16} color="#0a0000" />
                <h1 className="text-xl px-1 text-blue-600 "><Link to={'/newboard'}>Create new board</Link></h1>
            </div>
        </div>
    )
}
export default Sidebar