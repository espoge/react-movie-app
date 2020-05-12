import React, {useEffect, useState } from 'react';
import axios from 'axios';
import './Movie.css'
const Movie = props =>{
    const [movie, setMovie] = useState({})
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=6ac290699faeb117ff37c20029f20b9b&append_to_response=credits`)
        .then(response=>{
          let data = response.data
          setMovie(data)
          console.log(data)
        })
        .catch(e=>{
          console.log(e)
        })
      },[])

    return(
        <div className="movie-container">
            <div>
                <h1>{movie.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            </div>
            <div>
                <p>{movie.overview}</p>
            </div>
        </div>
    )
}

export default Movie
