// External Modules
import { Router } from "express";
import { verifyToken } from "../utils/token";
import { addComment, destroy, getComments } from "../controllers/comments";

// Router Definition
export const CommentsRouter: Router = Router();

// Route Definitions
CommentsRouter.post("/", verifyToken, addComment);
CommentsRouter.delete("/:id", verifyToken, destroy);
CommentsRouter.get("/:videoId", verifyToken, getComments);
