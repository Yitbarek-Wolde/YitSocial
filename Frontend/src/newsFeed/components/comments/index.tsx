export default function Comments() {
    return (
        <div>
            <div className="media-block">
                <a className="media-left" href="#"><img className="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar2.png" /></a>
                <div className="media-body">
                    <div className="mar-btm">
                        <a href="#" className="btn-link text-semibold media-heading box-inline">Bobby Marz</a>
                        <p className="text-muted text-sm"><i className="fa fa-mobile fa-lg"></i> - From Mobile - 7 min ago</p>
                    </div>
                    <p>this is a comment.</p>
                    <div className="pad-ver">
                        <div className="btn-group">
                            <a className="btn btn-sm btn-default btn-hover-success active" href="#"><i className="fa fa-thumbs-up"></i> You Like it</a>
                            <a className="btn btn-sm btn-default btn-hover-danger" href="#"><i className="fa fa-thumbs-down"></i></a>
                        </div>
                        <a className="btn btn-sm btn-default btn-hover-primary" href="#">Comment</a>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}