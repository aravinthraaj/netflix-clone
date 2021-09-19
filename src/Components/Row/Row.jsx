import React, { useState, useEffect } from 'react';
import axios from "../../axios";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Slide from '../Slide';
import "./Row.scss"


function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])


    return (
        <div className="row">
            <div className="title">
                <h1>{title}</h1>
                <span>
                    Explore All
                </span>
                    <KeyboardArrowRightIcon/>
                
            </div>
            <div className="posters">
                {movies.map((movie) => 
                ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                    <Slide poster={`${base_url}${movie.backdrop_path}`}/>
                    // <img className={`poster ${isLargeRow && "posterLarge"}`} 
                    //     src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                    //         }`}
                    //     alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row
