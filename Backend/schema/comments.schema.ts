import { Schema, InferSchemaType, model } from "mongoose";

const CommentSchema = new Schema({
    text: { type: String, required: true },
    user: {
        email: { type: String, required: true },
        name: { type: String, required: true }
    },
}, { timestamps: true });