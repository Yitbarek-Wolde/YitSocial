import { RequestHandler } from "express";
import { UserPost, PostModel } from "./post.model";
import { StandardResponse } from "../types/response";

export const post_UserPost: RequestHandler<unknown, StandardResponse<UserPost>, UserPost, unknown> = async (req, res, next) => {
    try {
        const new_UserPost = req.body;
        const { _id, email, fullname } = req.userInfo;

        const result = await PostModel.create({
            post_content: new_UserPost.post_content,
            created_by: {
                user_id: _id,
                email: email,
                fullname: fullname,
            },
        });
        res.json({ success: true, data: result });
    } catch (error) {
        next(error);
    }
};

export const get_UserPosts: RequestHandler<unknown, StandardResponse<UserPost[] | string>, unknown, { action: string; page: number }> = async (req, res, next) => {
    try {
        const { action, page } = req.query;
        const size = 20;

        if (true) {
            const result = await PostModel.find().sort({createdAt: -1})
                .skip(((page | 1) - 1) * size)
                .limit(size);
            res.json({ success: true, data: result });
        } else if (action === "own") {
            const result = await PostModel.find({
                "created_by.user_id": req.userInfo._id,
            })
                .skip(((page | 1) - 1) * size)
                .limit(size);
            res.json({ success: true, data: result });
        } else {
            res.json({ success: false, data: "No UserPost found!" });
        }
    } catch (error) {
        next(error);
    }
};

export const get_UserPost: RequestHandler<{ UserPost_id: string }, StandardResponse<UserPost | null>, unknown, unknown> = async (req, res, next) => {
    try {
        const { UserPost_id } = req.params;
        const result = await PostModel.findOne({ _id: UserPost_id });
        res.json({ success: false, data: result });
    } catch (error) {
        next(error);
    }
};

export const delete_UserPost: RequestHandler<{ UserPost_id: string }, StandardResponse<number>, unknown, unknown> = async (req, res, next) => {
    try {
        const { UserPost_id } = req.params;
        const result = await PostModel.deleteOne({
            _id: UserPost_id,
            "created_by.user_id": req.userInfo._id,
        });

        res.json({ success: true, data: result.deletedCount });
    } catch (error) {
        next(error);
    }
};

export const put_UserPost: RequestHandler<{ UserPost_id: string }, StandardResponse<number>, UserPost, unknown> = async (req, res, next) => {
    try {
        const { UserPost_id } = req.params;
        const new_UserPost = req.body;

        const result = await PostModel.updateOne(
            { _id: UserPost_id, "created_by.user_id": req.userInfo._id },
            { $set: { post_content: new_UserPost.post_content } }
        );

        res.json({ success: false, data: result.modifiedCount });
    } catch (error) {
        next(error);
    }
};
