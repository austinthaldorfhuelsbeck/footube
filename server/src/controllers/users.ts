import { NextFunction, Request, Response } from "express";
import { User } from "../db/models/User";
import { MongoUser, removePassword } from "../utils/passwords";
import { Video } from "../db/models/Video";

export async function update(req: Request, res: Response, next: NextFunction) {
	try {
		// check token for authorization
		if (req.params.id !== res.locals.user.id)
			return next({
				status: 403,
				message: "You are not authorized to update this user.",
			});
		// update on db and return
		const user: MongoUser | null = await User.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true },
		);
		if (!user) return next({ status: 404, message: "User not updated." });
		res.status(200).json(removePassword(user));
	} catch (err) {
		next(err);
	}
}

export async function destroy(req: Request, res: Response, next: NextFunction) {
	// check token for authorization
	if (req.params.id !== res.locals.user.id)
		return next({
			status: 403,
			message: "You are not authorized to delete this user.",
		});
	try {
		// delete on db and return
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json("User deleted successfully.");
	} catch (err) {
		next(err);
	}
}

export async function read(req: Request, res: Response, next: NextFunction) {
	try {
		const user: MongoUser | null = await User.findById(req.params.id);
		if (user) res.status(200).json(removePassword(user));
	} catch (err) {
		next(err);
	}
}

export async function subscribe(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		// add user to list of subscribers
		await User.findByIdAndUpdate(res.locals.user.id, {
			$push: { subscribedUsers: req.params.id },
		});
		// increment subscribers count
		await User.findByIdAndUpdate(req.params.id, {
			$inc: { subscribers: 1 },
		});
		res.status(200).json("Subscribed successfully.");
	} catch (err) {
		next(err);
	}
}

export async function unsubscribe(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		// remove user from list of subscribers
		await User.findByIdAndUpdate(res.locals.user.id, {
			$pull: { subscribedUsers: req.params.id },
		});
		// decrement subscribers count
		await User.findByIdAndUpdate(req.params.id, { $inc: { subscribers: -1 } });
		res.status(200).json("Unsubscribed successfully.");
	} catch (err) {
		next(err);
	}
}

export async function like(req: Request, res: Response, next: NextFunction) {
	const { id } = res.locals.user;
	const { videoId } = req.params;
	try {
		await Video.findByIdAndUpdate(videoId, {
			$addToSet: { likes: id },
			$pull: { dislikes: id },
		});
		res.status(200).json("Video successfully liked.");
	} catch (err) {
		next(err);
	}
}

export async function dislike(req: Request, res: Response, next: NextFunction) {
	const { id } = res.locals.user;
	const { videoId } = req.params;
	try {
		await Video.findByIdAndUpdate(videoId, {
			$addToSet: { dislikes: id },
			$pull: { likes: id },
		});
		res.status(200).json("Video successfully disliked.");
	} catch (err) {
		next(err);
	}
}
