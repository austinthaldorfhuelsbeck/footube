import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";

import { IComment, IUser } from "../interfaces/models";
import { fetchComments, fetchUser, postComment } from "../middleware/api";
import { IApiResponse, IAppError } from "../interfaces/interfaces";

// for loading a channel
// input: id of the channel to load
// returns: user if found; else undefined
type UseChannel = {
	channel?: IUser;
	err?: IAppError;
};
export const useChannel = (userId: string): UseChannel => {
	const [channel, setChannel] = useState<IUser | undefined>();
	const [err, setErr] = useState<IAppError | undefined>();
	useEffect(() => {
		const load = async () => {
			const res: IApiResponse = await fetchUser(userId);
			if (res.data) setChannel(res.data);
			if (res.error) setErr(res.error);
		};
		load();
	}, [userId]);

	return { channel, err };
};

// for loading comments for a video
// input: id of the video to load comments of
// returns: array containing possible comments
type UseComments = {
	comments: (IComment | undefined)[];
	err?: IAppError;
};
export const useComments = (videoId: string): UseComments => {
	const [comments, setComments] = useState<(IComment | undefined)[]>([]);
	const [err, setErr] = useState<IAppError | undefined>();
	useEffect(() => {
		async function load() {
			const res: IApiResponse = await fetchComments(videoId);
			if (res.data) setComments(res.data);
			if (res.error) setErr(res.error);
		}
		load();
	}, [videoId]);

	return { comments, err };
};

// for posting a new comment on a video
// input: id of the video to comment on
// returns: change handler; submit handler
type UseComment = {
	desc: string;
	onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	onSubmit: (e: SyntheticEvent<HTMLFormElement>) => void;
	onCancel: (e: SyntheticEvent<HTMLButtonElement>) => void;
	err?: IAppError;
};
export const useComment = (videoId: string): UseComment => {
	// state for form input and err
	const [desc, setDesc] = useState("");
	const [err, setErr] = useState<IAppError | undefined>();
	// handlers for form actions
	const onChange: UseComment["onChange"] = (e) => setDesc(e.target.value);
	const onSubmit: UseComment["onSubmit"] = async (e) => {
		const res: IApiResponse = await postComment({ videoId, desc });
		if (res.error) setErr(res.error);
	};
	const onCancel: UseComment["onCancel"] = (e) => {
		e.preventDefault();
		setDesc("");
	};

	return { desc, onChange, onSubmit, onCancel, err };
};
