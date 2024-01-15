// External Modules
import { NextFunction, Request, Response } from "express";

// Internal Modules
import { Video } from "../db/models/Video";
import { User } from "../db/models/User";

export async function post(req: Request, res: Response, next: NextFunction) {
	try {
		// create video object with validated user id
		const newVideo = new Video({ userId: res.locals.user.id, ...req.body });
		// save to db and return
		const savedVideo = await newVideo.save();
		res.status(200).json(savedVideo);
	} catch (err) {
		next(err);
	}
}

export async function read(req: Request, res: Response, next: NextFunction) {
	try {
		const video = await Video.findById(req.params.id);
		res.status(200).json(video);
	} catch (err) {
		next(err);
	}
}

export async function update(req: Request, res: Response, next: NextFunction) {
	try {
		// find video to be updated
		const video = await Video.findById(req.params.id);
		if (!video) return next({ status: 404, message: "Video not found." });
		// check token for authorization
		if (video.userId !== res.locals.user.id)
			return next({
				status: 403,
				message: "You are not authorized to update this video.",
			});
		// update on db and return
		const updatedVideo = await Video.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true },
		);
		res.status(200).json(updatedVideo);
	} catch (err) {
		next(err);
	}
}

export async function destroy(req: Request, res: Response, next: NextFunction) {
	try {
		// find video to be deleted
		const video = await Video.findById(req.params.id);
		if (!video) return next({ status: 404, message: "Video not found." });
		// check token for authorization
		if (video.userId !== res.locals.user.id)
			return next({
				status: 403,
				message: "You are not authorized to delete this video.",
			});
		// delete on db and return
		await Video.findByIdAndUpdate(req.params.id);
		res.status(200).json("Video deleted successfully.");
	} catch (err) {
		next(err);
	}
}

export async function addView(req: Request, res: Response, next: NextFunction) {
	try {
		await Video.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } });
		res.status(200).json("Views increased successfully.");
	} catch (err) {
		next(err);
	}
}

export async function listTrending(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		const videos = await Video.find().sort({ views: -1 });
		res.status(200).json(videos);
	} catch (err) {
		next(err);
	}
}

export async function listRandom(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
		res.status(200).json(videos);
	} catch (err) {
		next(err);
	}
}

export async function listSub(req: Request, res: Response, next: NextFunction) {
	try {
		// find user and subs
		const user = await User.findById(res.locals.user.id);
		const subs = user?.subscribedUsers;
		// get all subscriptions
		const users = await Promise.all(
			subs?.map((channelId: string) => Video.find({ userId: channelId })),
		);
		// flatten, sort, return
		res
			.status(200)
			.json(users.flat().sort((a, b) => b.createdAt - a.createdAt));
	} catch (err) {
		next(err);
	}
}

export async function listTags(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	// get tags from query
	const tags: string[] | undefined = req.query.tags?.toString().split(",");
	try {
		// only return 20 videos
		const videos = await Video.find({
			tags: { $in: tags },
		}).limit(20);
		res.status(200).json(videos);
	} catch (err) {
		next(err);
	}
}

export async function search(req: Request, res: Response, next: NextFunction) {
	// get search query
	const query: string | undefined = req.query.q?.toString();
	try {
		// only return 40 videos
		const videos = await Video.find({
			title: { $regex: query, $options: "i" },
		}).limit(40);
		res.status(200).json(videos);
	} catch (err) {
		next(err);
	}
}
