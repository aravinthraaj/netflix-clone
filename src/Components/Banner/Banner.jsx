import React, { useState, useEffect } from 'react'
import axios from '../../axios';
import requests from '../../Requests';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import './Banner.scss'

function Banner({category}) {
    const [movie, setMovie] = useState([]);
    

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixoriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request;
        }
        fetchData();
    }, [])


    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }
    return (
        <div className="wrapper">
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}>
            {category && (
        <div className="category">
          <span>{category === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
            <div className="container">
                <h1 className="title">
                    {movie?.name || movie?.title || movie?.original_name}
                </h1>
                <h1 className="description">{truncate(movie?.overview, 150)}</h1>
                <div className="buttons">
                    <button className="button play">
                        <div className="btnAlign">
                            <PlayArrowIcon/>
                            <span>Play</span>
                            
                        </div>
                    </button>
                    <button className="button more">
                        <div className="btnAlign">
                            <InfoOutlinedIcon/>
                            <span>More Info</span>
                            
                        </div>
                    </button>
                </div>
            </div>
            <div className="fadeBottom"></div>
        </header>
        </div>
    )
}

export default Banner
