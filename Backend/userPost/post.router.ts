import express from "express";
import { post_UserPost, get_UserPost, get_UserPosts,delete_UserPost, put_UserPost } from "./post.controller";

const PostRouter = express.Router({ mergeParams: true });

PostRouter.post("/", express.json(), post_UserPost);
PostRouter.get("/", get_UserPosts);
PostRouter.get("/:post_id", get_UserPost);
PostRouter.delete("/:post_id", delete_UserPost);
PostRouter.put("/:post_id", express.json(), put_UserPost);

// postRouter.use("/:post_id/comment", CommentRouter);

export default PostRouter;
