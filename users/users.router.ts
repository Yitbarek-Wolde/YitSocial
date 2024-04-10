import express from "express";
import { post_SignIn, post_SignUp, deActivate_User } from "./users.controller";
const UserRouter = express.Router({ mergeParams: true });

UserRouter.post("/signup", express.json(), post_SignUp);
UserRouter.post("/signin", express.json(), post_SignIn);
UserRouter.patch("/:user_id", deActivate_User);



//UserRouter.use("/:user_id/picture", VerifyUser, PicRouter);

export default UserRouter;
