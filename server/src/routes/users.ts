// External Modules
import { Router } from "express";

// Internal Modules
import {
	destroy,
	dislike,
	like,
	read,
	subscribe,
	unsubscribe,
	update,
} from "../controllers/user";
import { verifyToken } from "../utils/token";

// Router Definition
export const UserRouter: Router = Router();

// Route Definitions
// update a user
UserRouter.put("/:id", verifyToken, update);
// delete a user
UserRouter.delete("/:id", verifyToken, destroy);
// get a user
UserRouter.get("/:id", read);
// subscribe a user
UserRouter.put("/sub/:id", verifyToken, subscribe);
// unsubscribe a user
UserRouter.put("/unsub/:id", verifyToken, unsubscribe);
// like a video
UserRouter.put("/like/:videoId", verifyToken, like);
// dislike a video
UserRouter.put("/dislike/:videoId", verifyToken, dislike);

