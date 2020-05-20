import React, { useContext }  from 'react';
import { NavLink,Link, useLocation, useHistory  } from 'react-router-dom';
import { MoviesContext } from './MoviesContext';
import './Nav.css'

const Nav = (props) =>{
    const [favourite, setFavourite] = useContext(MoviesContext)
    const {pathname} = useLocation();
    const {history} = useHistory();
    const path = pathname
    console.log('history',history)
        return(
        <nav>
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
               {/* <li><Link className={pathname === '/favourite' && 'active'} to="/favourite">Favourite</Link></li>
                <li><Link className={pathname === '/popular' ? 'active' : 'null' } to="/popular">Popular</Link></li>*/}
                <li><NavLink to="/now_playing">Now Playing</NavLink></li>
                <li><NavLink to="/top_rated">Top Rated</NavLink></li>
                <li><NavLink to="/upcoming">Upcoming</NavLink></li>
                <li>My favourite:{favourite.length}</li>
            </ul>
        </nav>
    )
}

export default Nav