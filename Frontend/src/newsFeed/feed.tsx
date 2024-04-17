import './Feed.css'
//import '../../Override.css'
import Postedpost from './components/posted-posts';
import Sharepost from './components/share-post';

function HomeFeed(props: any) {
  return (

    <div className="container bootdey" style={{ background: 'black' }}>
      <div className="col-md-12 bootstrap snippets">
        {/* post textarea component */}
        <Sharepost />
       
        <div className="panel" >
          <div className="panel-body" >

            {/* Newsfeed Component */}
            <div className="media-block" >

              {/* <!-- Comments  Component --> */}
              <Postedpost />

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HomeFeed;