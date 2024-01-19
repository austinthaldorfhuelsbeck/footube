import { useEffect, useState } from "react";

import { Dispatch } from "redux";
import { format } from "timeago.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios, { AxiosResponse } from "axios";
import { useLocation } from "react-router-dom";

import {
	AddTaskOutlined,
	ReplyOutlined,
	ThumbDown,
	ThumbDownOutlined,
	ThumbUp,
	ThumbUpOutlined,
} from "@mui/icons-material";

import { Card } from "../components/Card";
import { RootState } from "../redux/store";
import { IUser } from "../interfaces/models";
import { Comments } from "../components/Comments";
import { dislike, fetchSuccess, like } from "../redux/videoSlice";
import { CircleImg, Hr } from "../styles/util.style";
import {
	Button,
	Buttons,
	Channel,
	ChannelDetail,
	ChannelInfo,
	ChannelName,
	Container,
	Content,
	Counter,
	Description,
	Details,
	Info,
	Recommendation,
	Subscribe,
	Title,
	Wrapper,
} from "../styles/styled-components/Video.style";
import { subscribe } from "../redux/userSlice";

export function Video(): JSX.Element {
	const { currentUser } = useSelector((state: RootState) => state.user);
	const { currentVideo } = useSelector((state: RootState) => state.video);

	const dispatch: Dispatch = useDispatch();

	// find video id from path
	const id: string = useLocation().pathname.split("/")[2];

	// state for loading the channel that posted the video
	const [channel, setChannel] = useState<IUser | undefined>();

	// handlers
	async function onLike() {
		await axios.put(`/api/users/like/${currentVideo?._id}`);
		dispatch(like(currentUser?._id));
	}
	async function onDislike() {
		await axios.put(`/api/users/dislike/${currentVideo?._id}`);
		dispatch(dislike(currentUser?._id));
	}
	async function onSub() {
		if (channel?._id) {
			currentUser?.subscribedUsers.includes(channel._id)
				? await axios.put(`/api/users/unsub/${channel._id}`)
				: await axios.put(`/api/users/sub/${channel._id}`);
			dispatch(subscribe(channel._id));
		}
	}

	useEffect(() => {
		async function fetchData() {
			// TODO error handling
			const videoRes: AxiosResponse = await axios.get(`/api/videos/${id}`, {
				withCredentials: true,
			});

			if (videoRes.data) {
				dispatch(fetchSuccess(videoRes.data));
				const userRes: AxiosResponse = await axios.get(
					`/api/users/${videoRes.data.userId}`,
					{
						withCredentials: true,
					},
				);
				if (userRes.data) setChannel(userRes.data);
			}
		}
		fetchData();
	}, [dispatch, id]);

	return (
		<Container>
			{currentVideo && (
				<Content>
					<Wrapper>
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/CCF-xV3RSSs?si=vt007ibCwn1lDero"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						></iframe>
					</Wrapper>
					<Title>{currentVideo.title}</Title>
					<Details>
						<Info>
							{`${currentVideo.views} views • ${format(
								currentVideo.createdAt || "",
							)}`}
						</Info>
						<Buttons>
							<Button onClick={onLike}>
								{currentVideo.likes?.includes(currentUser?._id) ? (
									<ThumbUp />
								) : (
									<ThumbUpOutlined />
								)}{" "}
								{currentVideo.likes?.length}
							</Button>
							<Button onClick={onDislike}>
								{currentVideo.dislikes?.includes(currentUser?._id) ? (
									<ThumbDown />
								) : (
									<ThumbDownOutlined />
								)}
							</Button>
							<Button>
								<ReplyOutlined /> Share
							</Button>
							<Button>
								<AddTaskOutlined /> Save
							</Button>
						</Buttons>
					</Details>
					<Hr />
					{channel && (
						<Channel>
							<ChannelInfo>
								<CircleImg src={channel.img} />
								<ChannelDetail>
									<ChannelName>{channel.name}</ChannelName>
									<Counter>{channel.subscribers}</Counter>
									<Description>{currentVideo.desc}</Description>
								</ChannelDetail>
							</ChannelInfo>
							<Subscribe onClick={onSub}>
								{currentUser?.subscribedUsers?.includes(channel._id)
									? "Subscribed"
									: "Subscribe"}
							</Subscribe>
						</Channel>
					)}
					<Hr />
					<Comments />
				</Content>
			)}
			<Recommendation>
				{/* <Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" /> */}
			</Recommendation>
		</Container>
	);
}
