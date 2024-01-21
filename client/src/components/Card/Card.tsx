import React from "react";

import { useChannel } from "../../hooks/useChannel";
import { IVideo } from "../../interfaces/models";
import {
	ChannelImage,
	ChannelName,
	Container,
	Details,
	Image,
	Info,
	Title,
} from "./Card.style";
import { ErrorAlert } from "../ErrorAlert/ErrorAlert";
import { timeago } from "../../utils/timeago";

// Types
interface CardProps {
	type: string;
	video: IVideo;
}

// Card displaying a preview of a video
export const Card: React.FC<CardProps> = ({ type, video }) => {
	// get channel with hook
	const { channel, err } = useChannel(video.userId);
	// type prop specifies lg or sm preview
	// add channel details when channel loads from db
	return (
		<Container type={type} to={`/video/${video._id}`}>
			<Image src={video.img} type={type} />
			<Details type={type}>
				<>
					<Title>{video.title}</Title>
					{channel && (
						<>
							<ChannelImage type={type} src={channel.img} />
							<ChannelName>{channel.name}</ChannelName>
						</>
					)}
					<Info>{`${video.views} views • ${timeago(video.createdAt)}`}</Info>
				</>
			</Details>
			<ErrorAlert err={err} />
		</Container>
	);
};
