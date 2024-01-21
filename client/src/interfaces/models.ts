interface ITimestamps {
	createdAt: string;
	updatedAt: string;
}

export interface IUser extends ITimestamps {
	_id: string;
	name: string;
	email: string;
	password?: string;
	img?: string;
	subscribers: number;
	subscribedUsers: (string | undefined)[];
}

export interface IComment extends ITimestamps {
	_id: string;
	userId: string;
	videoId: string;
	desc: string;
}

export interface IVideo extends ITimestamps {
	_id: string;
	userId: string;
	title: string;
	desc: string;
	img: string;
	video: string;
	views: number;
	tags: (string | undefined)[];
	likes: (string | undefined)[];
	dislikes: (string | undefined)[];
}
