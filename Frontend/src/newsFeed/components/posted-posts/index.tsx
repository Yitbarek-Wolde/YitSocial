import { useEffect, useState } from "react";
import Comments from "../comments";
import axios from "axios";
import * as ls from "local-storage";
export let forother: any 
export default function Postedpost() {
    const [feedPosts, setFeedhere] = useState<any>([])

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
if(!feedPosts[0]){
    return (<><p> nothing to see</p></>)
}
    return (
        <>
            {
                feedPosts.map((i: any) => {
                    return (<div  key={i._id} >
                        <a className="media-left" href="#"><img className="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar1.png" /></a>
                        <div className="media-body" >
                            <div className="mar-btm">
                                <a href="#" className="btn-link text-semibold media-heading box-inline">{i.created_by.fullname}</a>
                                <p className="text-muted text-sm"><i className="fa fa-mobile fa-lg"></i> {i.createdAt}</p>
                            </div>
                            <p>{i.post_content} </p>
                            <div className="pad-ver">
                                <div className="btn-group">
                                    <a className="btn btn-sm btn-default btn-hover-success" href="#"><i className="fa fa-thumbs-up"></i></a>
                                    <a className="btn btn-sm btn-default btn-hover-danger" href="#"><i className="fa fa-thumbs-down"></i></a>
                                </div>
                                <a className="btn btn-sm btn-default btn-hover-primary" href="#">Comment</a>
                            </div>
                            <hr />
                            < Comments />
                        </div>
                    </div>)
                }
                )
            }
        </>
    )
}