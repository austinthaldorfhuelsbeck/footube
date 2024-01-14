import { NextFunction, Request, Response } from "express";
import { User } from "../db/models/User";
import { removePassword } from "../utils/passwords";

export async function update(req: Request, res: Response, next: NextFunction) {
	try {
		// update on db and return
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true },
		);
		res.status(200).json(removePassword(updatedUser));
	} catch (err) {
		next(err);
	}
}

export async function destroy(req: Request, res: Response, next: NextFunction) {
	try {
		// delete on db and return
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json();
	} catch (err) {
		next(err);
	}
}

export async function read(req: Request, res: Response, next: NextFunction) {
	try {
		const user = await User.findById(req.params.id);
		res.status(200).json(user);
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
		await User.findById(res.locals.user.id, {
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
		await User.findById(res.locals.user.id, {
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
	try {
	} catch (err) {
		next(err);
	}
}

export async function dislike(req: Request, res: Response, next: NextFunction) {
	try {
	} catch (err) {
		next(err);
	}
}
