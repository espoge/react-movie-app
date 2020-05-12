import React  from 'react';
import {Link} from 'react-router-dom';

const Nav = () =>{
    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/popular">Popular</Link></li>
            <li><Link to="/now_playing">Now Playing</Link></li>
            <li><Link to="/top_rated">Top Rated</Link></li>
            <li><Link to="/upcoming">Upcoming</Link></li>
        </ul>
    )
}

export default Nav