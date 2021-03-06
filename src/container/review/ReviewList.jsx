import React , {useCallback, useEffect, useState, useRef} from 'react'
import axios from 'axios'
import {Review} from '../../templates'
import {Link} from 'react-router-dom'
import {context as c} from '../../context'
const ReviewList = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8080/api/reviews`)
        .then(res=>{
            // alert(`List Success`)
            setData(res.data)
            // console.log(res.data)
        })
        .catch(e=>{
            alert(`List Failure`)
            throw(e)
        })

    },[])

    const fetchSomeReview = useCallback(async e=> {
        alert("진입")
        const title = document.querySelector('#revTitle').value
        alert(title)
        try {
            const req = {
                method: c.get,
                url: `${c.url}/api/searchreview${title}`,
                // data: {params: title},
                auth: c.auth

            }
            const res = await axios(req)
            alert(res.rev_id)
            setData(res.data)
        } catch (error){
            alert(`fetchSomeReviews failure ${error}`)
        }
    },[])

    const revid = e => {
        // e.preventDefault()
        // const btn = document.getElementById('btn')
        const revId = e.target.getAttribute('rev-id')
        // console.log(revId)
        console.log(revId)
        localStorage.setItem("rev_id", revId);
        // const u_id = document.querySelector('button').firstChild.nodeValue
        // console.log(u_id)

        // axios.get(`http://localhost:8080/api/reviews`)
        // console.log(data[2]['rev_id'])
    }
    return (<Review>
        <table>
            Search ID : <input type="text" id='revTitle'/> 
            <button onClick={fetchSomeReview}>Search</button>
            <h1>Review List</h1>
            <tr>
                <th>Review No.</th>
                {/* <th>User id</th> */}
                <th>Movie</th>
                <th>Title</th>
                <th>Review</th>
                <th>Edit</th>
                {/* <th>Label</th> */}
            </tr>
            {data.map((i, index)=>(
                <tr key={index}>
                    <td>{i.rev_id}</td>
                    {/* <td>{i.user_id}</td> */}
                    <td>{i.movie_id}</td>
                    <td>{i.title}</td>
                    <td>{i.content}</td>
                    <td>
                        <button>
                            <Link to="/edit-review" rev-id={i.rev_id} onClick={revid}>
                            EDIT
                            </Link>
                        </button>
                    </td>
                    
                    {/* <td>{i.label}</td> */}
                </tr>
            ))}
        </table>
    </Review>)
}

export default ReviewList
