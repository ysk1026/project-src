import React, {useState} from 'react'
import {Movie} from '../../templates'
import axios from 'axios'
const MovieModify = () => {
    const [password, setPassword] = useState()
    const modify = e => {
        e.preventDefault()
        axios.get(`http:localhost:8080/movie/modify`)
        .then(

        )
        .error(
            
        )

    }
    return (<Movie>
        <h1>MovieModify</h1> <form>
        <table className='tab_layer'>
           
                <tr>
                    <td>MOVIEID</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>PASSWORD</td>
                    <td><input type="text" onChange={e => setPassword(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>TITLE</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td>SUBTITLE</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>DESCRIPTION</td>
                    <td><input type="text" /></td>
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
                    <td colspan={2}><button onClick={modify}>Modify</button>
                    <button>Cancel</button></td>
                </tr>
           
        </table> </form>
    </Movie>)
}

export default MovieModify