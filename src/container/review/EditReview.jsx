import React, {useState, useEffect} from 'react'
import {Review} from '../../templates'
import axios from 'axios'
import {Link} from 'react-router-dom'
const EditReview = () => {
    const [data, setData] = useState([])
    const [title, setTitle] = useState('')
    const [userId, setUserId] = useState('')
    const [content, setContent] = useState('')
    // const [movieId, setMovieId] = useState('')
    const revId = localStorage.getItem("rev_id")
    
    useEffect(() => {
        alert("진입!")
        axios.get(`http://localhost:8080/api/review${revId}`)
        .then(res => {
            setData(res.data)
            // console.log(res.data)
        })
        .catch(e => {
            throw(e)
        })
    },[]) 
    
    const modify = () => {
        // alert(`Title: ${title}, UserId: ${userId}, Content: ${content}, ItemId: ${movieId}`)
        alert(`Title: ${title}, Content: ${content}`)
        axios.put(`http://localhost:8080/api/review${revId}`,{'title':title, 'content': content})
        .then(res => {
            alert(`Update SUCCESS`)
        })
        .catch(
            e => {
                alert(`Writing ${e}`)
            }
        )

    }

    const del = () => {
        alert(`Review ID: ${revId}`)
        axios.post(`http://localhost:8080/api/delreview${revId}`, {'rev_id' : revId})
        .then(res => {
            alert('Delete SUCCESS')
        })
        .catch(err => {
            throw(err)
        })
    }

    const useConfirm = (message = null, onConfirm, onCancel) => {
        if (!onConfirm || typeof onConfirm !== "function") {
            return;
        }
        if (onCancel && typeof onCancel !== "function") {
            return;
        }
    

        const confirmAction = () => {
            if (window.confirm(message)) {
                onConfirm();
            } else {
                onCancel();
            }
        };
        return confirmAction
    }

    const deleteConfirm = () => {
        del()
        alert("리뷰 삭제 완료")
    }

    const cancelConfirm = () => alert("리뷰 삭제 취소")

    const confirmDelete = useConfirm(
        "정말 삭제하시겠습니까?",
        deleteConfirm,
        cancelConfirm
    ) 
    return (<Review>
        <div style={{textAlign: "center"}}>
            {/* FIRST TABLE  */}
            <table style={{display:"inline-block" , margin:"0 50em 0 0;"}}>
            {/* <h1>{revId}</h1> */}
                    <div>
                    {/* {data.map((i, index)=>( */}
                    {/* <tr key={index}> */}
                    <h2>Current Review</h2>
                    <td>{data['title']}</td>
                    <td>{data['content']}</td>
                    {/* <td>{i.label}</td> */}
                {/* </tr> */}
                
            {/* ))} */}
            </div>
                </table>

                {/* SECOND TABLE */}
        <table style={{display:"inline-block", margin:'0 15px;'}}>
            {/* <h1>{revId}</h1> */}
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
                        {/* <div class="mb-3">
                            <label htmlFor="userid">Name</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                name="userid" id="userid" 
                                placeholder="Input Writer's Name" 
                                onChange={e=>setUserId(e.target.value)}/>
                        </div> */}
                        <div class="mb-3">
                            <label htmlFor="content">Content</label>
                            <textarea 
                                class="form-control" rows="5" 
                                name="content" id="content" 
                                placeholder="Please Leave a Review." 
                                onChange={e=>setContent(e.target.value)}></textarea>
                        </div>
                        {/* <div class="mb-3">
                            <label htmlFor="itemid">Movie</label>
                            <select value={movieId} 
                                    onChange={e=>setMovieId(e.target.value)}>
                                {options.map(o=>(
                                    <option value={o.value}>{o.label}</option>
                                ))}
                            </select>
                        </div> */}
                    </form>
                    <div >
                        <button type="button">
                            <Link to="review" class="btn btn-sm btn-primary" id="btnSave" onClick={modify}>Save</Link>
                        </button>
                        <button type="button">
                            <Link to="review" class="btn btn-sm btn-primary" id="btnSave" onClick={confirmDelete}>Delete</Link>
                        </button>
                        {/* <button type="button" class="btn btn-sm btn-primary" id="btnSave" onClick={del}>Delete</button> */}
                        <button type="button" class="btn btn-sm btn-primary" id="btnList">
                            <Link to="review-list">Go Review List</Link>
                        </button>
                    </div>
                </div></td></tr>
                </table>
                </div>
    </Review>)
}
export default EditReview