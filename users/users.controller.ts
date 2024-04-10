import { RequestHandler } from "express";
import { UsersModel, Yit_User } from "./users.model";
import { sign } from "jsonwebtoken";
import bcrypt from "bcrypt"
import { StandardResponse } from "../types/response";

export const post_SignUp: RequestHandler<unknown, StandardResponse<Yit_User>,Yit_User,unknown> = async (req, res, next) => {
  try {
    const new_user = req.body;
    const hashes_password = await bcrypt.hash(new_user.password, 10);
    new_user.password = hashes_password;
    const result = await UsersModel.create(new_user);
    res.json({ success: true, data: result }).sendDate;
  } catch (error) {
    next(error);
  }
};

export const post_SignIn: RequestHandler<unknown, StandardResponse<string>, { email: string; password: string }, unknown> = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const result = await UsersModel.findOne({ userEmail: email, active: true });
      if (!result) throw new Error("User not found!");
      const match_password = await bcrypt.compare(password, result.password);
      if (match_password && process.env.Secret_key) {
        const jwt = sign(
          {
            _id: result._id,
            email: result.userEmail,
            userName: result.userName,
            fullname:
              result.firstName || "" + " " + result.lastName || "",
            path: result.profilePicture.path,
          },
          process.env.Secret_key
        );
        res.json({ success: true, data: jwt }).sendDate;
       
      }
    } catch (error) {
      next(error);
    }
  };

export const deActivate_User: RequestHandler<{ user_id: string },StandardResponse<number | string>,unknown,{ action: string }> = async (req, res, next) => {
  try {
    const { action } = req.query;
    if (action === "deactivate_profile") {
      await UsersModel.updateOne(
        { _id: req.userInfo._id, active: true },
        { $set: { active: false } }
      );
      res.json({ success: true, data: "Account deactivated" });
    } else {
      res.json({ success: false, data: "Account active" });
    }
  } catch (error) {
    next(error);
  }
};
