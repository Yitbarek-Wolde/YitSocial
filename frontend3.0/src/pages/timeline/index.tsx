import TimelinePostCards from "./components/postContainer";

export default function Timeline() {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    left sidebar
                </div>
                <div className="col">
                {/* here is where the time line goes for now 
                later it should change to profile dynamically */}
                    <TimelinePostCards />

                </div>
                <div className="col">
                    right sidebar
                </div>
            </div>
        </div>
    )
}