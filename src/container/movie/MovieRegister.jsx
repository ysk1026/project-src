import React, {useState} from 'react'
import axios from 'axios'

const MovieRegister = () => {
    const [movieid, setMovieid] = useState()
    const [title, setTitle] = useState()
    const [subtitle, setSubTitle] = useState()
    const [description, setDescription] = useState()
    const [imageurl, setImageUrl] = useState()
    const [year, setYear] = useState()
    const [rating, setRating] = useState()

    const register = e => {
        e.preventDefault()
        axios.post(`http:localhost:8080/movie/register`,  {
            movieid,title,subtitle,description,imageurl,year,rating
        })
        .then(
            console.log(`signup SUCCESS`)
        )
        .error(
            console.log(`signup FAIL`)
        )

    }

    
    return (<>
        <h1>MovieRegister</h1><form>
        <table className='tab_layer'>
            
                <tr>
                    <td>ID</td>
                    <td><input type="text" onChange={e => setMovieid(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>PASSWORD</td>
                    <td><input type="text" onChange={e => setTitle(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>NAME</td>
                    <td><input type="text" onChange={e => setSubTitle(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>PCLASS</td>
                    <td><input type="text" onChange={e => setDescription(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>GENDER</td>
                    <td><input type="text" onChange={e => setImageUrl(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>BIRTH YEAR</td>
                    <td><input type="text" onChange={e => setYear(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>EMBARKED</td>
                    <td><input type="text" onChange={e => setRating(e.target.value)}/></td>
                </tr>
                {/* <tr>
                    <td>RANK</td> 
                    <td>Do not enter ratings..</td>
                </tr> */}
                <tr>
                    <td colspan={2}><button onClick={register}>Register</button>
                    <button>Cancel</button></td>
                </tr>
            
        </table></form>
    </>)
}

export default MovieRegister