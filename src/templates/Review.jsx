import React from 'react'
import {ReviewMenu as Menu} from '../components'
import './table.style.css'

const Review = ({children}) => (<>
    <h1>Reviews</h1>
    <Menu/>
    {children}
</>)

export default Review
