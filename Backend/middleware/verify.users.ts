import { RequestHandler } from "express";
import { verify } from "jsonwebtoken";
import { ErrorWithStatus } from "../types/error"
import { JWTtype } from "../types/jwtTypes";

export const VerifyUser: RequestHandler<unknown,unknown,unknown,unknown> = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (token && process.env.Secret_key) {
      const result = verify(token, process.env.Secret_key) as JWTtype;
      if (result) {
        req.userInfo = result;
        next();
      }
    } else {
      res.json({ success: false, data: "Token verification failed" });
    }
  } catch (error) {
    throw new ErrorWithStatus("Verification error on server " + error, 500);
  }
};