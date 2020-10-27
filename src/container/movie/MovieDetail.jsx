import React, {useState} from 'react'
import {Movie} from '../../templates'
import axios from 'axios'
const MovieDetail = () => {
    const detail = e => {
        e.preventDefault()
        axios.get(`http:localhost:8080/movie/detail`)
        .then(

        )
        .error(
            
        )

    }
    return (<Movie>
        <h1>MovieDetail</h1>
        <form>
        <table className='tab_layer'>
            
                <tr>
                    <td>MOVIEID</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>TITLE</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>SUBTITLE</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td>DESCRIPTION</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>IMAGEURL</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td>YEAR</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td>RATING</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td colspan={2}><button onClick={detail}>Update Info</button>
                    <button>취소</button></td>
                </tr>
        </table></form>
    </Movie>)
}

export default MovieDetail