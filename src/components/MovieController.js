import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Movies from './Movies'
import Movie from './Movie'
import PageNotFound from './PageNotFound'
import Home from './Home'
import UserForm from './UserForm'
import TimePicker from './TimePicker'

const MovieController = () =>{
    return(
            <Switch>
                <Route path="/" exact component={TimePicker} />
                <Route path="/user-form" exact component={UserForm} />
                <Route path="/favourite" exact component={Home} />
                <Route path="/popular" component={()=><Movies title="Qui passo i params del componente Movies ma mi perdo quelli del componente Route" />} />
                <Route path="/now_playing" component={Movies} />
                <Route path="/top_rated" component={Movies} />
                <Route path="/upcoming" component={Movies} />
                <Route path="/movie/:id"  component={Movie} />
                <Route  component={PageNotFound} />
            </Switch>
    )
}


export default MovieController