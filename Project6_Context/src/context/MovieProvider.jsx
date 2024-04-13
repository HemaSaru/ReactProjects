import React, { useState } from "react";
import MovieContext from "./MovieContext";

const MovieProvider = ({ children }) => {
    const [movie, setMovie] = useState("Dhamal");

    return (
        <MovieContext.Provider value={{ movie, setMovie }}>
            {children}
        </MovieContext.Provider>

    );
};

export default MovieProvider;


