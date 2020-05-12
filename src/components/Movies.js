import React, {useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Movies.css';
const Movies = props =>{
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie${props.match.url}?api_key=6ac290699faeb117ff37c20029f20b9b`)
        .then(response=>{
          let data = response.data.results
          setMovies(data)
        })
        .catch(e=>{
          console.log(e)
        })
      },[props.match.url])
      console.log(movies)

    return(
        <section className="cardList">
        {movies.map((movie,i)=>(
            <div key={i}>
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
                <Link to={`/movie/${movie.id}`}>
                    <h1>{movie.title}</h1>
                </Link>        
            </div>
        ))}
   </section>)
}

export default Movies
