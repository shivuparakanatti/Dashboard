import Boards from "../components/Board"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Home = ()=>{
    return (
        <div>

            <Navbar/>
            <div className="flex flex-col">

            <Sidebar/>
           <Boards/>
            </div>
        </div>
    )
}

export default Home