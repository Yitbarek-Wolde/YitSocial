import http from "../axios";

const getMainFeed = () => {
    return http.get("/post")
}