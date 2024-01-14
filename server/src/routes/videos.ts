// External Modules
import { Router } from "express";

// Internal Modules
import {
	addView,
	destroy,
	listRandom,
	listSub,
	listTags,
	listTrending,
	post,
	read,
	search,
	update,
} from "../controllers/video";
import { verifyToken } from "../utils/token";

// Router Definitions
export const VideoRouter: Router = Router();
// create a video
VideoRouter.post("/", verifyToken, post);
// list videos of subscribed channels
VideoRouter.get("/sub", verifyToken, listSub);
// list trending
VideoRouter.get("/trend", listTrending);
// list random
VideoRouter.get("/random", listRandom);
// list tags
VideoRouter.get("/tags", listTags);
// search
VideoRouter.get("/search", search);
// read a video
VideoRouter.get("/:id", read);
// update a video
VideoRouter.put("/:id", verifyToken, update);
// delete a video
VideoRouter.delete("/:id", verifyToken, destroy);
// increment views
VideoRouter.put("/view/:id", addView);