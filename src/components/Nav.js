import React  from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css'

const Nav = () =>{
    return(
        <nav>
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/popular">Popular</NavLink></li>
                <li><NavLink to="/now_playing">Now Playing</NavLink></li>
                <li><NavLink to="/top_rated">Top Rated</NavLink></li>
                <li><NavLink to="/upcoming">Upcoming</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav