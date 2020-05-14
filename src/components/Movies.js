import React, {useEffect, useState, useContext } from 'react';
import {Link, useRouteMatch } from 'react-router-dom';
import { MoviesContext } from './MoviesContext'
import FavButtons from './FavButtons'
import axios from 'axios';
import './Movies.css';
const Movies = props =>{
    const [movies,setMovies] = useState([])
    const [isError,setIsError] = useState(false)

    /***SENZA GESTIONE DELL'ERRRORE****/
    /*useEffect(async()=>{
      const data = await axios.get(`https://api.themoviedb.org/3/movie${props.match.url}?api_key=6ac290699faeb117ff37c20029f20b9b`)
      setMovies(data.data.results) 
    },[props.match.url])*/


    const {path} = useRouteMatch()
    const fetchData = async () =>{
      try{
        setIsError(false)
        const data = await axios.get(`https://api.themoviedb.org/3/movie${path}?api_key=6ac290699faeb117ff37c20029f20b9b`)
        setMovies(data.data.results)
      }catch(error){
        setIsError(true)
        console.log(error)
      }
    }

    useEffect(()=>{
      fetchData()
    },[path])

    return(
        <section className="cardList">
          {!isError ?  
          movies.map((movie,i)=>(
            <div key={i}>
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
                <Link to={`/movie/${movie.id}`}>
                    <h5>{movie.title}</h5>
                </Link>
                <FavButtons movie={movie}/>
            
            </div>
            )): <h1>Oops..something wrong</h1>}

   </section>)
}

export default Movies
