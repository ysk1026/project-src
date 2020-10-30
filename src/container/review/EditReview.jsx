import React, {useState, useEffect} from 'react'
import {Review} from '../../templates'
import axios from 'axios'
import {Link} from 'react-router-dom'
const EditReview = () => {
    const [data, setData] = useState([])
    const [title, setTitle] = useState('')
    const [userId, setUserId] = useState('')
    const [content, setContent] = useState('')
    const [movieId, setMovieId] = useState('')
    const revId = localStorage.getItem("rev_id")
    
    useEffect(() => {
        alert("진입!")
        axios.get(`http://localhost:8080/api/review`, {'rev_id' : revId})
        .then(res => {

            setData(res.data)
            alert(res.data[0]['title'])
        })
        .catch(e => {
            throw(e)
        })
    }) 
    
    const modify = () => {
        alert(`Title: ${title}, UserId: ${userId}, Content: ${content}, ItemId: ${movieId}`)
        axios.post(`http://localhost:8080/api/review`,{'title':title,
        'user_id': userId, 'content': content, 'movie_id': movieId})
        .then(res => {
            alert(`Update SUCCESS`)
        })
        .catch(
            e => {
                alert(`Writing ${e}`)
            }
        )

    }
    const options = [
        {
            label: "Select One",
            value: "0",
          },
        {
          label: "item",
          value: "1",
        },
        {
          label: "news",
          value: "2",
        },
      ];

    return (<Review>
        <table>
            <h1>{revId}</h1>
            <tr><td>
                <div class="container" role="main">
                    <h2>Review Update Form</h2>
                    <form>
                        <div class="mb-3">
                            <label htmlFor="title">Title</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                name="title" id="title" 
                                placeholder="Input Title" 
                                onChange={e=>setTitle(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="userid">Name</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                name="userid" id="userid" 
                                placeholder="Input Writer's Name" 
                                onChange={e=>setUserId(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="content">Content</label>
                            <textarea 
                                class="form-control" rows="5" 
                                name="content" id="content" 
                                placeholder="Please Leave a Review." 
                                onChange={e=>setContent(e.target.value)}></textarea>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="itemid">Movie</label>
                            <select value={movieId} 
                                    onChange={e=>setMovieId(e.target.value)}>
                                {options.map(o=>(
                                    <option value={o.value}>{o.label}</option>
                                ))}
                            </select>
                        </div>
                    </form>
                    <div >
                        <button type="button" class="btn btn-sm btn-primary" id="btnSave" onClick={modify}>Save</button>
                        <button type="button" class="btn btn-sm btn-primary" id="btnSave" onClick={modify}>Delete</button>
                        <button type="button" class="btn btn-sm btn-primary" id="btnList">
                            <Link to="review-list">Go Review List</Link>
                        </button>
                    </div>
                </div></td></tr>
                </table>
    </Review>)
}
export default EditReview