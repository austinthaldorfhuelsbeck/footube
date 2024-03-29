// External Modules
import { compare, genSalt, hash } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../db/models/User";
import { MongoUser, removePassword } from "../utils/passwords";

// Controller Functions
export async function signup(
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> {
	try {
		// encrypt password with bcrypt
		const salt: string = await genSalt(10);
		const hashValue: string = await hash(req.body.password, salt);
		// use encrypted password and save to db
		const newUser = new User({ ...req.body, password: hashValue });
		await newUser.save();
		// return user
		res.status(200).json({ data: newUser });
	} catch (err) {
		next(err);
	}
}

export async function signin(req: Request, res: Response, next: NextFunction) {
	// load secret key from env vars
	const JWT: string = process.env.JWT || "";
	try {
		// find provided user or return error
		const user: MongoUser | null = await User.findOne({
			email: req.body.email,
		});
		if (!user) return next({ status: 404, message: "User not found." });
		// check password and return user or error
		const isCorrect: boolean = (await compare(
			req.body.password.toString(),
			user.password,
		)) as boolean;
		if (!isCorrect)
			return next({ status: 400, message: "Incorrect password." });
		// create web token for password with cookies
		const token: string = jwt.sign({ id: user._id }, JWT);
		// remove hashed password value and return
		res
			.cookie("access_token", token, { httpOnly: true })
			.status(200)
			.json(removePassword(user));
	} catch (err) {
		next(err);
	}
}

export async function googleAuth(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	// load secret key from env vars
	const JWT: string = process.env.JWT || "";
	try {
		const user = await User.findOne({ email: req.body.email });
		if (user) {
			// create web token for password with cookies
			const token: string = jwt.sign({ id: user._id }, JWT);
			// remove hashed password value and return
			res
				.cookie("access_token", token, { httpOnly: true })
				.status(200)
				.json(user._doc);
		} else {
			const newUser = new User({
				...req.body,
				fromGoogle: true,
			});
			const savedUser = await newUser.save();
			// create web token for password with cookies
			const token: string = jwt.sign({ id: savedUser._id }, JWT);
			// remove hashed password value and return
			res
				.cookie("access_token", token, { httpOnly: true })
				.status(200)
				.json(savedUser);
		}
	} catch (err) {
		next(err);
	}
}