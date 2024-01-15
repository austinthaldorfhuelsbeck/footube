// External Modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { UsersRouter } from "./routes/users";
import { VideosRouter } from "./routes/videos";
import { CommentsRouter } from "./routes/comments";
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
app.use("/api/users", UsersRouter);
app.use("/api/videos", VideosRouter);
app.use("/api/comments", CommentsRouter);

// Error handlers
app.use(notFound);
app.use(errorHandler);
