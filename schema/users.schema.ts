import { Schema, InferSchemaType, model } from "mongoose";

const UserSchema = new Schema({
    userEmail: { type: String, required: true },
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    userName: { type: String, require: true },
    userBirthDate: { type: Number, require: true },
    userPhoneNumber: { type: Number, requre: true },
    userDeleted: { type: Boolean, default: false },
    userActive: { type: Boolean, default: true, timestamps: true },
    userCurrentPayment: { type: Boolean, default: true, timestamps: true },
    userActivity: [],
    userBio: [],
    userComments: [],
    userFiles: [],
    userPost: [],
    userPaymentRecord: [],
    userReactions: []

},
    { timestamps: true })

export type Yit_User = InferSchemaType<typeof UserSchema>

export const UsersModel = model<Yit_User>('user', UserSchema)