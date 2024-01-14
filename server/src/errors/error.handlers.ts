// External Modules
import { NextFunction, Request, Response } from "express";

// Internal Modules
import { ErrorStatus } from "../interfaces/error.status.interface";

// Functions
// eslint-disable-next-line
function isAnErrorStatus(object: any): object is ErrorStatus {
	// checks type of any input for error status structure
	return "status" in object;
}

export const errorHandler = (
	err: unknown,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	if (isAnErrorStatus(err)) {
		res.status(err.status).json({ error: err });
	} else if (err instanceof Error) {
		res.status(500).json({ error: { status: 500, message: err.message } });
	} else if (err) {
		res.status(500).json({ error: { message: String(err) } });
	} else {
		res.status(500).json({ error: { message: "Something went wrong!" } });
	}
};

export const methodNotAllowed = (req: Request, res: Response) => {
	res
		.status(405)
		.json({ message: `${req.method} not allowed for ${req.originalUrl}.` });
};

// Exports
export const notFound = (req: Request, res: Response) => {
	res.status(404).json({ message: `Not found: ${req.originalUrl}.` });
};
