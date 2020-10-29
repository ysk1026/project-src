import React , {useEffect, useState} from 'react'
import axios from 'axios'
import {Review} from '../../templates'

const ReviewList = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8080/api/reviews`)
        .then(res=>{
            alert(`List Success`)
            setData(res.data)
        })
        .catch(e=>{
            alert(`List Failure`)
            throw(e)
        })

    },[])
    
    return (<Review>
        <table>
            <h1>Review List</h1>
            <tr>
                <th>Review No.</th>
                {/* <th>User id</th> */}
                <th>Movie</th>
                <th>Title</th>
                <th>Review</th>
                {/* <th>Label</th> */}
            </tr>
            {data.map((i, index)=>(
                <tr key={index}>
                    <td>{i.rev_id}</td>
                    {/* <td>{i.user_id}</td> */}
                    <td>{i.movie_id}</td>
                    <td>{i.title}</td>
                    <td>{i.content}</td>
                    {/* <td>{i.label}</td> */}
                </tr>
            ))}
        </table>
    </Review>)
}

export default ReviewList
