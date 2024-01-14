// External Modules
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

// Functions
export function verifyToken(req: Request, res: Response, next: NextFunction) {
	// get secret key and token
	const JWT: string = process.env.JWT || "";
	const token: string = req.cookies.access_token.toString();
	// return 401 if no token
	if (!token)
		return next({
			status: 401,
			message: "You are not authorized for this request.",
		});
	jwt.verify(token, JWT, (err, user) => {
		// return 403 if invalid
		if (err) return next({ status: 403, message: "Token is invalid." });
		// pass result thru locals
		res.locals.user = user;
		// check user in token for authorization
		if (req.params.id !== res.locals.user.id)
			return next({
				status: 401,
				message: "You are not authorized for this request.",
			});
		return next();
	});
}
