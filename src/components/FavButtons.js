import React, {useContext} from  'react'
import {MoviesContext} from './MoviesContext'
import PropTypes from 'prop-types';
import './FavButtons.css'

const FavButtons = ({movie}) =>{
    const [favourite, setFavourite] = useContext(MoviesContext)
    const addToFav = movie =>{
        setFavourite(prevFav=>[
          ...prevFav, movie
        ])
        console.log('aggiunto',movie)
    }
  
  const removeToFav = index =>{
      const updateFav = [...favourite]
      let removeIndex = updateFav.map(item => item.id).indexOf(index);
      updateFav.splice(removeIndex, 1);
      setFavourite(updateFav)
    } 

    return(
        <div>
            {favourite.some(el=>el.id === movie.id) 
                ? 
            <button type="button" className="removeToFav" onClick={()=>removeToFav(movie.id)}>Remove To Fav</button>        
                : 
            <button type="button" className="addToFav" onClick={()=>addToFav({id:movie.id, title:movie.title, poster:movie.poster_path})}>Add To Fav</button>        
            }
        </div>
    )
}
FavButtons.propTypes = {
    movie: PropTypes.object.isRequired,
}    

export default FavButtons