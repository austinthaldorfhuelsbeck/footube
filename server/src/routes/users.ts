// External Modules
import { Router } from "express";
import {
	destroy,
	dislike,
	like,
	read,
	subscribe,
	unsubscribe,
	update,
} from "../controllers/users";
import { verifyToken } from "../utils/token";

// Router Definition
export const UsersRouter: Router = Router();

// Route Definitions
// update a user
UsersRouter.put("/:id", verifyToken, update);
// delete a user
UsersRouter.delete("/:id", verifyToken, destroy);
// get a user
UsersRouter.get("/:id", read);
// subscribe a user
UsersRouter.put("/sub/:id", verifyToken, subscribe);
// unsubscribe a user
UsersRouter.put("/unsub/:id", verifyToken, unsubscribe);
// like a video
UsersRouter.put("/like/:videoId", verifyToken, like);
// dislike a video
UsersRouter.put("/dislike/:videoId", verifyToken, dislike);

