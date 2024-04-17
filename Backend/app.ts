import express, { NextFunction, Response, Request } from 'express'
import morgan from "morgan"
import { ErrorWithStatus } from './types/error'
import cors from 'cors'
import helmet from 'helmet'
//import { ServerError } from './types/servererror'
import path from "path";
import fs from "fs";
import { Mongo_DB_connect } from './DB_connect'
import UserRouter from './users/users.router'
import PostRouter from './userPost/post.router'
import { VerifyUser } from './middleware/verify.users'


const app = express()

Mongo_DB_connect();


app.set(`port`, 3001);
app.set("x-powered-by", false);
app.use(helmet());
app.use(cors());

// setup logger
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
} else if (process.env.NODE_ENV == "production") {
  const accessLogStream = fs.createWriteStream(
    path.join(__dirname, "access.log"),
    { flags: "a" }
  );
  app.use(morgan("combined", { stream: accessLogStream }));
} else {
  console.error("Node Environment not set.");
}

// start routing here 

app.use('/users', UserRouter)
app.use('/post', VerifyUser, PostRouter)
//end vaild routs here


app.all("*", (req, res, next) => {
  next(new ErrorWithStatus("Route not found", 404));
});
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof ErrorWithStatus) {

    res.status(error.status).send(error.message);
  } else if (error instanceof Error) {
    res.status(500).send(error.message);
  } else {
    res.status(500).send("Unexpected error occurred");
  }
});

app.listen(app.get("port"), () => {
  console.log("Listening to 3000");
})