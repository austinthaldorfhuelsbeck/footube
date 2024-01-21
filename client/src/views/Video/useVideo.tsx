import { useEffect, useState } from "react";

import { Dispatch } from "redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { IUser } from "../../interfaces/models";
import { RootState } from "../../reducers/store";
import { subscribe } from "../../reducers/userSlice";
import { IApiResponse } from "../../interfaces/interfaces";
import { dislike, fetchSuccess, like } from "../../reducers/videoSlice";
import {
	dislikeVideo,
	fetchUser,
	fetchVideo,
	likeVideo,
	subscribeChannel,
	unsubscribeChannel,
} from "../../middleware/api";

interface UseVideo {
	onLike: () => void;
	onDislike: () => void;
	onSub: () => void;
	channel?: IUser;
}
export const useVideo = (): UseVideo => {
	// Redux
	const { currentUser } = useSelector((state: RootState) => state.user);
	const { currentVideo } = useSelector((state: RootState) => state.video);
	// redux dispatch
	const dispatch: Dispatch = useDispatch();

	// find video id from path
	const id: string = useLocation().pathname.split("/")[2];

	// state for loading the channel that posted the video
	const [channel, setChannel] = useState<IUser | undefined>();

	// handlers
	async function onLike() {
		if (currentVideo) await likeVideo(currentVideo._id);
		if (currentUser) dispatch(like(currentUser._id));
	}
	async function onDislike() {
		if (currentVideo) await dislikeVideo(currentVideo._id);
		if (currentUser) dispatch(dislike(currentUser._id));
	}
	async function onSub() {
		if (channel?._id) {
			currentUser?.subscribedUsers.includes(channel._id)
				? await unsubscribeChannel(channel._id)
				: await subscribeChannel(channel._id);
			dispatch(subscribe(channel._id));
		}
	}

	// fetch video and user on page load
	useEffect(() => {
		async function fetchData() {
			const videoRes: IApiResponse = await fetchVideo(id);
			if (videoRes.data) {
				dispatch(fetchSuccess(videoRes.data));
				const userRes: IApiResponse = await fetchUser(videoRes.data.userId);
				if (userRes.data) setChannel(userRes.data);
			}
		}
		fetchData();
	}, [dispatch, id]);

	return { onLike, onDislike, onSub, channel };
};
