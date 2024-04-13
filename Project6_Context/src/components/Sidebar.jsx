import { useContext } from "react"
import MovieContext from "../context/MovieContext"

function Sidebar(){
const {setMovie} = useContext(MovieContext)

    return(
      <div className="bg-orange-500 text-white h-screen w-3/12 text-center p-4">  
      
      <ul>
        <li className="cursor-pointer" onClick={()=>{setMovie("Sam Bahadur")}}>Sam Bahadur</li>
        <li className="cursor-pointer" onClick={()=>{setMovie("Major")}}>Major</li>
      </ul>
      </div>
    )
  }
  
  export default Sidebar