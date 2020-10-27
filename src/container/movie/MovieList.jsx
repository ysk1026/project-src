import React , {useEffect, useState} from 'react'
import axios from 'axios'
import {Movie} from '../../templates'

const MovieList = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8080/api/movies`)
        .then(res=>{
            alert(`List Success`)
            setData(res.data)
        })
        .catch(e=>{
            alert(`List Failure`)
            throw(e)
        })

    },[])
    
    return (<Movie>
  
        <table>
            <h1>Movie List</h1>
            <tr>
                <th>movieid</th>
                <th>title</th>
                <th>subtitle</th>
                <th>description</th>
                <th>imageurl</th>
                <th>year</th>
                <th>rating</th>
            </tr>
            {data.map((i, index)=>(
                <tr key={index}>
                <td>{i.movieid}</td>
                <td>{i.title}</td>
                <td>{i.subtitle}</td>
                <td>{i.description}</td>
                <td>{i.imageurl}</td>
                <td>{i.year}</td>
                <td>{i.rating}</td>
            </tr>
            ))}
            
        </table>

    </Movie>)
}

export default MovieList