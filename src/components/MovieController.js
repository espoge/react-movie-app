import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Movies from './Movies'
import Movie from './Movie'

import Home from './Home'
const MovieController = () =>{
    return(
        <div>
          
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/popular" exact component={Movies} />
                <Route path="/now_playing" exact component={Movies} />
                <Route path="/top_rated" exact  component={Movies} />
                <Route path="/upcoming" exact component={Movies} />
                <Route path="/movie/:id"  component={Movie} />
            </Switch>
           
        </div>
    )
}


export default MovieController