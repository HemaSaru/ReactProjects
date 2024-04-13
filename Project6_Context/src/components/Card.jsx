import React, {useContext} from "react";
import MovieContext from "../context/MovieContext";

function Card(){

    const {movie} = useContext(MovieContext); 
    return(
      <div className="bg-slate-500 w-96 rounded-md text-center p-6 text-white h-20">  
      
     Movie Name : {movie}
      
      </div>
    )
  }
  
  export default Card;