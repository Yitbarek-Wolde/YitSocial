import { Schema, InferSchemaType } from "mongoose";

export const CommentSchema = new Schema({
    post_content: { type: String, required: true },
    created_by: {
        user_id: Schema.Types.ObjectId,
        fullname: String,
        email: String
    },
}, { timestamps: true, versionKey: false });

export type Comment = InferSchemaType<typeof CommentSchema>;
