import React, {useContext} from "react";
import MovieContext from "../context/MovieContext";


function Header() {

    const {movie} = useContext(MovieContext)
    return (
        <div className="bg-slate-800 text-white h-20 text-center p-6"> Movie Name : {movie}</div>
    )
}

export default Header;