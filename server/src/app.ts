// External Modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Internal Modules
import { UserRouter } from "./routes/users";
import { VideoRouter } from "./routes/videos";
import { CommentRouter } from "./routes/comments";
import { AuthRouter } from "./routes/auth";
import { errorHandler, notFound } from "./errors/error.handlers";

// Config
dotenv.config();

// App Definition
export const app = express();

// Middleware
app.use(express.json());
app.set("json spaces", 2);
app.use((req, res, next) => {
	res.contentType("application/json; charset=utf-8");
	next();
});
app.use(cors());
app.use(cookieParser());

// Route handlers
app.use("/api/auth", AuthRouter);
app.use("/api/users", UserRouter);
app.use("/api/videos", VideoRouter);
app.use("/api/comments", CommentRouter);

// Error handlers
app.use(notFound);
app.use(errorHandler);
