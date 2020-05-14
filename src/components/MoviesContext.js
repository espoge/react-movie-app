import React, {useState} from 'react'

const MoviesContext = React.createContext()

const MoviesProvider = (props) =>{
const [favourite, setFavourite] = useState([{id: 419704, title: "Ad Astra", poster: "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"}])

    return (
        <MoviesContext.Provider value={[favourite, setFavourite]}>
            {props.children}
        </MoviesContext.Provider>
    )
}

export {MoviesContext, MoviesProvider}