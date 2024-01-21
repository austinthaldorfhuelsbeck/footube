import React from "react";

import { useSelector } from "react-redux";

import {
	AddTaskOutlined,
	ReplyOutlined,
	ThumbDown,
	ThumbDownOutlined,
	ThumbUp,
	ThumbUpOutlined,
} from "@mui/icons-material";

import { useVideo } from "./useVideo";
import { timeago } from "../../utils/timeago";
import { IUser } from "../../interfaces/models";
import { RootState } from "../../reducers/store";
import { CircleImg } from "../../styles/util.style";
import { Comments } from "../../components/Comments/Comments";
import { Recommended } from "../../components/Recommended/Recommended";
import {
	Button,
	Buttons,
	ChannelContainer,
	ChannelDetail,
	ChannelInfo,
	ChannelName,
	Container,
	Content,
	Counter,
	Description,
	Details,
	Info,
	Subscribe,
	Title,
	VideoFrame,
} from "./Video.style";

interface ChannelProps {
	channel: IUser;
	onSub: () => void;
}

const Channel: React.FC<ChannelProps> = ({ channel, onSub }) => {
	// Redux
	const { currentUser } = useSelector((state: RootState) => state.user);
	const { currentVideo } = useSelector((state: RootState) => state.video);

	return (
		<ChannelContainer>
			<ChannelInfo>
				<CircleImg src={channel.img} />
				<ChannelDetail>
					<ChannelName>{channel.name}</ChannelName>
					<Counter>{channel.subscribers}</Counter>
					<Description>{currentVideo?.desc}</Description>
				</ChannelDetail>
			</ChannelInfo>
			<Subscribe onClick={onSub}>
				{currentUser?.subscribedUsers?.includes(channel._id)
					? "Subscribed"
					: "Subscribe"}
			</Subscribe>
		</ChannelContainer>
	);
};

export const Video: React.FC = () => {
	// Redux
	const { currentUser } = useSelector((state: RootState) => state.user);
	const { currentVideo } = useSelector((state: RootState) => state.video);

	// custom hook
	const { onLike, onDislike, onSub, channel } = useVideo();

	return (
		<Container>
			{currentVideo && (
				<Content>
					<VideoFrame src={currentVideo?.video} controls autoPlay />
					<Title>{currentVideo.title}</Title>
					<Details>
						<Info>
							{`${currentVideo.views} views • ${timeago(
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
					<hr />
					{channel && <Channel channel={channel} onSub={onSub} />}
					<hr />
					<Comments videoId={currentVideo._id} />
				</Content>
			)}
			{currentVideo?.tags && (
				<Recommended tags={currentVideo.tags}></Recommended>
			)}
		</Container>
	);
};
