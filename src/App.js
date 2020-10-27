import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {Nav} from './components'
import {ItemDetail, ItemList, ModifyItem, RegisterItem, RemoveItem } from './container/item'
import {UserRegister, UserLogin, UserDetail, UserModify, UserWithdrawal, UserList} from './container/user'
import {ReviewList, EditReview, ReadReview, RemoveReview, WriteReview} from './container/review'
import {MovieDetail, MovieList, MovieModify, MovieRegister, MovieWithdrawal, } from './container/movie'
import {Home, User, Movie, Review, Item} from './templates'
import { createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider} from'react-redux'
import {itemReducer } from './container/item/ItemList'

import ReduxThunk from 'redux-thunk'
const rootReducer = combineReducers({
    itemReducer
})

export default function App(){
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))
    return (<>
    <Router>
        <Nav isAuth = {loggedIn}/>
        <hr/>
        <main>
        <Switch>
            <Provider store = {createStore(rootReducer, applyMiddleware(ReduxThunk))}>
                <Route exact path='/' component={Home}/>
                <Redirect from = {'/home'} to={'/'}/> 
                <Route path='/user' component={User}/>
                <Route path='/signup-form' component={UserRegister}/>
                <Route path='/signin-form' component={UserLogin}/>
                <Route path='/mypage' component={UserDetail}/>
                <Route path='/modifying-user-info' component={UserModify}/>
                <Route path='/membership-withdrawal' component={UserWithdrawal}/>
                <Route path='/userlist' component={UserList}/>
                <Route path='/item' component={Item}/>
                <Route path='/item-list' component={ItemList}/>
                <Route path='/item-detail' component={ItemDetail}/>
                <Route path='/modify-item' component={ModifyItem}/>
                <Route path='/register-item' component={RegisterItem}/>
                <Route path='/remove-item' component={RemoveItem}/>
                <Route path='/movie' component={Movie}/>
                <Route path='/movie-list' component={MovieList}/>
                <Route path='/movie-detail' component={MovieDetail}/>
                <Route path='/modify-movie' component={MovieModify}/>
                <Route path='/register-movie' component={MovieRegister}/>
                <Route path='/remove-movie' component={MovieWithdrawal}/>
                <Route path='/review' component={Review}/>
                <Route path='/review-list' component={ReviewList}/>
                <Route path='/edit-review' component={EditReview}/>
                <Route path='/read-review' component={ReadReview}/>
                <Route path='/remove-review' component={RemoveReview}/>
                <Route path='/write-review' component={WriteReview}/>
            </Provider>,    
        </Switch>
        </main>
    </Router>
</>)}
