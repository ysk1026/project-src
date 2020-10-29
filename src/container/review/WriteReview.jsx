import React, {useState, useEffect} from 'react'
import {Review} from '../../templates'
import axios from 'axios'
const WriteReview = () => {
    const [title, setTitle] = useState('')
    const [userId, setUserId] = useState('')
    const [content, setContent] = useState('')
    const [movieId, setMovieId] = useState('')
    
    const write = () => {
        alert(`Title: ${title}, UserId: ${userId}, Content: ${content}, ItemId: ${movieId}`)
        axios.post(`http://localhost:8080/api/review`,{'title':title,
        'user_id': userId, 'content': content, 'movie_id': movieId})
        .then(res => {
            alert(`WRITING SUCCESS`)
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
                    <tr><td>
                <div class="container" role="main">
                    <h2>Review Write Form</h2>
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
                        <button type="button" class="btn btn-sm btn-primary" id="btnSave" onClick={write}>Save</button>
                        <button type="button" class="btn btn-sm btn-primary" id="btnList">Go Article List</button>
                    </div>
                </div></td></tr>
                </table>
    </Review>)
}

export default WriteReview