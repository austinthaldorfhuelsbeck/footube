import { IUser } from "../interfaces/models.interface";

interface MongoUser {
	_doc: IUser;
}
export function removePassword(user: MongoUser) {
	const { password, ...rest } = Object.assign({}, user._doc);
	return rest;
}
