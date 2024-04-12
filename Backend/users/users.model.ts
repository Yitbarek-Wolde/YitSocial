import { Schema, InferSchemaType, model } from "mongoose";

export const GUEST_PICTURE = {
    originalname: "guest.png",
    mimetype: "image/png",
    path: "uploads/guest.png",
    size: 150
}
const UserSchema = new Schema({
    userEmail: { type: String, unique: true, required: true},
    password: { type: String, required: true },
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    userName: { type: String, unique: true, require: true },
    userBirthDate: { type: String, require: true },
    userPhoneNumber: { type: String, require: true },
    active: { type: Boolean, default: true, timestamps: true  },
    userCurrentPayment: { type: Boolean, default: true, timestamps: true },
    userBio: {type: String, default: "Hi! I'm a new user!"},
    profilePicture: {
        type: {
            originalname: String,
            mimetype: String,
            path: String,
            size: Number
        }, default: GUEST_PICTURE
    }, 
    userFriends: [{type: String, unique: false}]
    
//some features under consideration

    // userComments: [],
    // userActivity: [],
    // userFiles: [],
    // userPost: [],
    // userPaymentRecord: [],
    // userReactions: []

},
    { timestamps: true })

export type Yit_User = InferSchemaType<typeof UserSchema>

export const UsersModel = model<Yit_User>('user', UserSchema)