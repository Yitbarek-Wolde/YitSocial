import { RequestHandler } from "express";
import { UserPost, PostModel } from "../userPost/post.model";
import { Comment } from "./comment.model";
import { StandardResponse } from "../types/response";

export const post_Comment: RequestHandler<{ post_id: string }, StandardResponse<number>, Comment, unknown> = async (req, res, next) => {
    try {
        const { post_id } = req.params;
        const result = await PostModel.updateOne(
            { _id: post_id, "created_by.user_id": req.userInfo._id },
            { $push: { Comments: req.body } }
        );
        res.json({ success: true, data: result.modifiedCount });
    } catch (error) {
        next(error);
    }
};

export const get_Comments: RequestHandler<{ post_id: string }, StandardResponse<Comment[]>, unknown, unknown> = async (req, res, next) => {
    try {
        const { post_id } = req.params;
        const result = await PostModel.findOne(
            { _id: post_id },
            { Comments: 1, _id: 0 }
        );
        res.json({ success: true, data: result?.Comments || [] });
    } catch (error) {
        next(error);
    }
};

export const edit_Comment: RequestHandler<{ post_id: string; Comment_id: string }, StandardResponse<number>, { comment: string; url: string }, unknown> = async (req, res, next) => {
    try {
        const { post_id, Comment_id } = req.params;
        const new_Comment = req.body;
        const result = await PostModel.updateOne(
            {
                _id: post_id,
                "created_by.user_id": req.userInfo._id,
                "Comments._id": Comment_id,
            },
            {
                $set: {
                    "Comments.$.comment": new_Comment.comment,
                    "Comments.$.url": new_Comment.url,
                },
            }
        );
        res.json({ success: true, data: result.modifiedCount });
    } catch (error) {
        next(error);
    }
};

export const delete_Comment: RequestHandler<{ post_id: string; Comment_id: string }, StandardResponse<number>, UserPost, unknown> = async (req, res, next) => {
    try {
        const { post_id, Comment_id } = req.params;
        const result = await PostModel.updateOne(
            {
                _id: post_id,
                "created_by.user_id": req.userInfo._id,
                "Comments._id": Comment_id,
            },
            { $pull: { Comments: { _id: Comment_id } } }
        );
        res.json({ success: true, data: result.modifiedCount });
    } catch (error) {
        next(error);
    }
};
