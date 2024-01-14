interface IUser {
	name: string;
	email: string;
	password: string;
	img?: string;
	subscribers: number;
	subscribedUsers: string[];
}

export { IUser };
