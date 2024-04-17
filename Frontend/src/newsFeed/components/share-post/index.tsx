import { useRef, useState } from "react"
import axios from "axios"
import * as ls from "local-storage";
import { forother } from "../posted-posts";

export default function Sharepost(){
    const [postIt, setPostit] = useState<any>()
  
    async function postdata() {

       await axios.post('http://127.0.0.1:3001/post',{ post_content: `${postIt}` }, {
            headers: {
                Authorization: `Bearer ${ls.get('secret')}`
            }
        })
       forother()
       setPostit('')
       
    }
    return (
        <div className="panel">
            <div className="panel-body">
                <textarea className="form-control" rows={2} placeholder="What are you thinking?" value={postIt} onChange={(e)=> setPostit(e.target.value)}></textarea>
                <div className="mar-top clearfix">
                    <button className="btn btn-sm btn-primary pull-right" type="submit"><i className="fa fa-pencil fa-fw" onClick={postdata}></i> Share</button>
                    <a className="btn btn-trans btn-icon fa fa-video-camera add-tooltip" href="#"></a>
                    <a className="btn btn-trans btn-icon fa fa-camera add-tooltip" href="#"></a>
                    <a className="btn btn-trans btn-icon fa fa-file add-tooltip" href="#"></a>
                </div>
            </div>
        </div>
    )
}