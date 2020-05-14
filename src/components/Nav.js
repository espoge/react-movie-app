import React, { useContext }  from 'react';
import { NavLink } from 'react-router-dom';
import { MoviesContext } from './MoviesContext'

import './Nav.css'

const Nav = () =>{
    const [favourite, setFavourite] = useContext(MoviesContext)
    console.log(favourite)
    return(
        <nav>
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/popular">Popular</NavLink></li>
                <li><NavLink to="/now_playing">Now Playing</NavLink></li>
                <li><NavLink to="/top_rated">Top Rated</NavLink></li>
                <li><NavLink to="/upcoming">Upcoming</NavLink></li>
                <li>My favourite:{favourite.length}</li>
            </ul>
        </nav>
    )
}

export default Nav