import React, {useEffect, useState, useContext } from 'react';
import {MoviesContext} from './MoviesContext'
import FavButtons from './FavButtons'
import {useParams, useHistory} from 'react-router-dom';

import axios from 'axios';
import './Movie.css'
const Movie = props =>{
    const {id} = useParams()
    const {goBack} = useHistory()
    const [movie, setMovie] = useState({})

    const [isError,setIsError] = useState(false)
    
    useEffect(()=>{
      const fetchData = async () =>{
        try{
          setIsError(false)
          const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6ac290699faeb117ff37c20029f20b9b&append_to_response=credits`)
          setMovie(data.data)
        }catch(error){
          setIsError(true)
          console.log(error)
        }
      }
      fetchData()
    },[id])

    const error = (<h1>Oops..something wrong</h1>)
    return(
        <section>
         <button type="button" onClick={()=>goBack()}>go back</button>
        {!isError ? <div className="movie-container">
            <div>
                <h5>{movie.title}</h5>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            </div>
            <div>
                <p>{movie.overview}</p>
                <div>
                  <FavButtons movie={movie}/>
              </div>
            </div>

        </div> : error}
        </section>
    )
}

export default Movie
