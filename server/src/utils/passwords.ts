import { IUser } from "../interfaces/models.interface";

export interface MongoUser extends IUser {
	_doc: IUser;
}
export function removePassword(user: MongoUser) {
	const { password, ...rest } = Object.assign({}, user._doc);
	return rest;
}
