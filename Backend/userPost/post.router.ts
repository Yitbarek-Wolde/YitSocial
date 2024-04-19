import express from "express";
import { post_UserPost, get_UserPost, get_UserPosts,delete_UserPost, put_UserPost, AddLikes, DisAddLikes } from "./post.controller";

const PostRouter = express.Router({ mergeParams: true });

PostRouter.post("/", express.json(), post_UserPost);
PostRouter.get("/", get_UserPosts);
PostRouter.get("/like/:UserPost_id", AddLikes);
PostRouter.get("/dislike/:UserPost_id", DisAddLikes);
PostRouter.get("/:UserPost_id", get_UserPost);
PostRouter.delete("/:UserPost_id", delete_UserPost);
PostRouter.put("/:UserPost_id", express.json(), put_UserPost);

// postRouter.use("/:post_id/comment", CommentRouter);

export default PostRouter;
