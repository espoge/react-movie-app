import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { MoviesContext } from './MoviesContext'
import './Home.css'

const Home = () =>{
    const [favourite, setFavourite] = useContext(MoviesContext)

    const removeToFav = index =>{
        const updateFav = [...favourite]
        let removeIndex = updateFav.map(item => item.id).indexOf(index);
        updateFav.splice(removeIndex, 1);
        setFavourite(updateFav)
      } 

    return (
        <div className="main">
          <h1>Home</h1>
          <section className="favourite-container">
            {favourite.length !=0  
            ?
            favourite.map((fav,i)=>(
              <div key={i}>
                      <img src={`https://image.tmdb.org/t/p/w200/${fav.poster}`} />
                  <Link to={`/movie/${fav.id}`}>
                      <h5>{fav.title}</h5>
                  </Link>
                  <button type="button" onClick={()=>removeToFav(fav.id)}>Remove</button>        
              </div>
            ))
            : 
            <p className="empty-list">Any favourite to show...start your list now!</p>}
          </section>
        </div>
    )
}

export default Home