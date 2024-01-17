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
app.use(cookieParser());
app.use(express.json());
app.set("json spaces", 2);
app.use((req, res, next) => {
	res.contentType("application/json; charset=utf-8");
	next();
});
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", req.headers.origin);
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin,X-Requested-With,X-HTTP-Method-Override,Content-Type,Accept,content-type,application/json",
	);
	next();
});

// Route handlers
app.use("/api/auth", AuthRouter);
app.use("/api/users", UsersRouter);
app.use("/api/videos", VideosRouter);
app.use("/api/comments", CommentsRouter);

// Error handlers
app.use(notFound);
app.use(errorHandler);
