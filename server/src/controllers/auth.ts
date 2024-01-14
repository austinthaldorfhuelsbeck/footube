import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { User } from "../db/models/User";
import { genSalt, hash, compare } from "bcrypt";
import { errorHandler } from "../errors/error.handlers";

async function signup(req: Request, res: Response): Promise<void> {
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
		errorHandler(err, res);
	}
}

async function signin(req: Request, res: Response) {
	try {
		// find provided user
		const user = await User.findOne({ name: req.body.name });
		if (!user) {
			errorHandler({ status: 404, message: "User not found" }, res);
		}
		// check password against hashed value
		const isCorrect: boolean = await compare(req.body.password, user.password);
		if (!isCorrect)
			errorHandler({ status: 400, message: "Incorrect password" }, res);
		//
		const token: string = jwt.sign({ id: user._id }, process.env.JWT);
		res
			.cookie("access_token", token, { httpOnly: true })
			.status(200)
			.json(user);
	} catch (err) {
		errorHandler(err, res);
	}
}

export const AuthController = { signup, signin };
