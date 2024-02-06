import { useParams } from "react-router-dom"

const Addnewtask = ()=>{
    const {boardname} = useParams()
   
    return (
        <div>
            <div>
                <label >Task Name</label>
                <input type="text" />
            </div>
            <div>
                <label >Discription</label>
                <textarea type="textarea" />
            </div>
            <div>
                <label >Current Status</label>
                
            </div>
        </div>
    )
}

export default Addnewtask