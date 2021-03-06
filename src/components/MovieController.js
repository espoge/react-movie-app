import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Movies from './Movies'
import Movie from './Movie'
import PageNotFound from './PageNotFound'

import Home from './Home'
const MovieController = () =>{
    return(
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/popular" exact component={Movies} />
                <Route path="/now_playing" exact component={Movies} />
                <Route path="/top_rated" exact  component={Movies} />
                <Route path="/upcoming" exact component={Movies} />
                <Route path="/movie/:id"  component={Movie} />
                <Route  component={PageNotFound} />
            </Switch>
    )
}


export default MovieController