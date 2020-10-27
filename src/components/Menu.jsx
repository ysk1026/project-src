import React from 'react'
import {Link} from 'react-router-dom'

export const UserMenu = () => (<nav>
        <ol>
            <li><Link to='/mypage'>My Page</Link></li>
            <li><Link to='/modifying-user-info'>Modifying User Information</Link></li>
            <li><Link to='/membership-withdrawal'>Membership Withdrawal</Link></li>
            <li><Link to='/userlist'>User List</Link></li>
        </ol>
    </nav>)

export const ReviewMenu = () =>(<nav>
    <ol>
        <li><Link to='/write-review'>Writing Review Form</Link></li> 
        <li><Link to='/review-list'>Review List</Link></li> 
        <li><Link to='/edit-review'>Update Review Form</Link></li> 
        <li><Link to='/delete-review'>Delete Review Form</Link></li> 
    </ol>
</nav>)

export const ItemMenu = () => (<nav>
    <ol>
        <li><Link to='/item-list'>Item List</Link></li>
        <li><Link to='/register-item'>Register Item</Link></li>
        <li><Link to='/modify-item'>Modify Item</Link></li>
        <li><Link to='/remove-item'>Remove Item</Link></li>
    </ol>
</nav>)

export const MovieMenu = () => (<nav>
    <ol>
        <li><Link to='/moviedetail'>Movie</Link></li>
        <li><Link to='/modify-movie'>Modify Movie</Link></li>
        <li><Link to='/remove-movie'>Remove Movie</Link></li>
        <li><Link to='/movielist'>Movie List</Link></li>
    </ol>
</nav>)
export const AuthMenu = () => (<nav>
    <ol>
        <li><Link to='/signup-form'>Siginup Form</Link></li>
        <li><Link to='/signin-form'>Signin Form</Link></li>
    </ol>
</nav>)



