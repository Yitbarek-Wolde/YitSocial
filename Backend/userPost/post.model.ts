import { Schema, InferSchemaType, model } from "mongoose";
import { CommentSchema } from "../PostComment/comment.model";

const PostSchema = new Schema({
    post_content: { type: String, required: true },
    created_by: {
        user_id: Schema.Types.ObjectId,
        fullname: String,
        email: String
    },
    Comments: [CommentSchema],
    Likes: [],
    DisLikes: []
}, { timestamps: true, versionKey: false });

export type UserPost = InferSchemaType<typeof PostSchema>;

export const PostModel = model<UserPost>('course', PostSchema)