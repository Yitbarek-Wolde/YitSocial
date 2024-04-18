import { useEffect, useState } from "react";
import Comments from "../comments";
import axios from "axios";
import * as ls from "local-storage";
import { jwtDecode } from "jwt-decode";

export let forother: any
export default function Postedpost() {
    const [feedPosts, setFeedhere] = useState<any>([])
    const [addComment, setAddcomment] = useState('')
    
    useEffect(() => {
        async function getdata() {

            const response = await axios.get('http://127.0.0.1:3001/post', {
                headers: {
                    Authorization: `Bearer ${ls.get('secret')}`
                }
            })
            setFeedhere([...response.data.data])
            console.log(response.data.data, ' here is the ')
        }; getdata()
        forother = getdata
    }, [])

    async function giveLike(_id: string) {
        console.log(_id, ' id to')
        const response = await axios.get(`http://127.0.0.1:3001/post/like/${_id}`, {
            headers: {
                Authorization: `Bearer ${ls.get('secret')}`
            }
        }); console.log(response.data.data)
    }
    async function giveDisLike(_id: string) {

        const response = await axios.get(`http://127.0.0.1:3001/post/dislike/${_id}`, {
            headers: {
                Authorization: `Bearer ${ls.get('secret')}`
            }
        }); console.log(response.data.data)
    }
    async function deletePost(_id: string) {
        console.log(_id, ' id to')
        const response = await axios.delete(`http://127.0.0.1:3001/post/${_id}`, {
            headers: {
                Authorization: `Bearer ${ls.get('secret')}`
            }
        }); console.log(response.data.data)
    }
    const { _id } = jwtDecode(ls.get('secret')) as any


    if (!feedPosts[0]) {
        return (<><p> nothing to see</p></>)
    }
    return (
        <>
            {
                feedPosts.map((i: any) => {
                    return (<div key={i._id} >
                        <a className="media-left" href="#"><img className="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar1.png" /></a>
                        <div className="media-body" >
                            <div className="mar-btm">
                                <a href="#" className="btn-link text-semibold media-heading box-inline">{i.created_by.fullname}</a>
                                <p className="text-muted text-sm"><i className="fa fa-mobile fa-lg"></i> {i.createdAt}</p>
                            </div>
                            <p>{i.post_content} </p>
                            <div className="pad-ver">
                                <div className="btn-group">
                                    <a className="btn btn-sm btn-default btn-hover-success" href="#" onClick={() => giveLike(i._id)}><i className="fa fa-thumbs-up">{i.DisLikes.length ? '' : `${i.Likes.length} Liked`}</i></a>
                                    <a className="btn btn-sm btn-default btn-hover-danger" href="#" onClick={() => giveDisLike(i._id)}><i className="fa fa-thumbs-down">{i.Likes.length ? '' : `${i.DisLikes.length} Disliked`}</i></a>
                                </div>
                                <a className="btn btn-sm btn-default btn-hover-primary" href="#" onClick={()=> setAddcomment(i._id)} >Comment</a>
                                {_id === i.created_by.user_id && <a className="btn btn-sm btn-default btn-hover-primary" onClick={() => deletePost(i._id)} href="#">Delete</a>}
                            </div>
                            <hr /> 
                            {addComment === i._id && <div className="panel-body">
                                <textarea className="form-control" rows={2} ></textarea>
                                <div className="mar-top clearfix">
                                    <button className="btn btn-sm btn-primary pull-right" type="submit">Add</button>

                                </div>
                            </div>}
                           {i.Comments[0] ? < Comments /> : ''}
                        </div>
                    </div>)
                }
                )
            }
        </>
    )
}