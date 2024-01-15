// External Modules
import { Router } from "express";
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
} from "../controllers/videos";
import { verifyToken } from "../utils/token";

// Router Definitions
export const VideosRouter: Router = Router();
// create a video
VideosRouter.post("/", verifyToken, post);
// list videos of subscribed channels
VideosRouter.get("/sub", verifyToken, listSub);
// list trending
VideosRouter.get("/trend", listTrending);
// list random
VideosRouter.get("/random", listRandom);
// list tags
VideosRouter.get("/tags", listTags);
// search
VideosRouter.get("/search", search);
// read a video
VideosRouter.get("/:id", read);
// update a video
VideosRouter.put("/:id", verifyToken, update);
// delete a video
VideosRouter.delete("/:id", verifyToken, destroy);
// increment views
VideosRouter.put("/view/:id", addView);