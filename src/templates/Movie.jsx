import React from 'react'
import {MovieMenu as Menu} from '../components'
import './table.style.css'

const Movie = ({children}) => (<>
    <h1>Movie</h1>
    <Menu/>
    {children}
</>)

export default Movie


