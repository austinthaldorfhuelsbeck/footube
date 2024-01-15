import { Request, Response, NextFunction } from "express";
import { Comment } from "../db/models/Comment";
import { Video } from "../db/models/Video";

export async function addComment(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		// create comment object with validated user id
		const newComment = new Comment({
			userId: res.locals.user.id,
			...req.body,
		});
		// save to db and return
		const savedComment = await newComment.save();
		res.status(200).send(savedComment);
	} catch (err) {
		next(err);
	}
}

export async function destroy(req: Request, res: Response, next: NextFunction) {
	try {
		// find comment to be deleted
		const comment = await Comment.findById(req.params.id);
		const video = await Video.findById(req.params.id);
		// check token for authorization
		// can only delete if owner of video or comment
		if (
			res.locals.user.id !== comment?.userId ||
			res.locals.user.id !== video?.userId
		)
			return next({
				status: 403,
				message: "You are not authorized to delete this comment.",
			});
		// delete on db and return
		await Comment.findByIdAndDelete(req.params.id);
		res.status(200).json("Comment successfully deleted.");
	} catch (err) {
		next(err);
	}
}

export async function getComments(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		const comments = await Comment.find({ videoId: req.params.videoId });
		res.status(200).json(comments);
	} catch (err) {
		next(err);
	}
}
