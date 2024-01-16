import { PropsWithChildren, useEffect, useState } from "react";

import { format } from "timeago.js";
import { Link } from "react-router-dom";

import { IUser, IVideo } from "../interfaces/models";
import {
	ChannelImage,
	ChannelName,
	Container,
	Details,
	Image,
	Info,
	TextContainer,
	Title,
} from "../styles/styled-components/Card.style";
import axios, { AxiosResponse } from "axios";

interface ComponentProps {
	type?: string;
	video: IVideo;
}

export function Card({
	type,
	video,
}: PropsWithChildren<ComponentProps>): JSX.Element {
	const [user, setUser] = useState<IUser | undefined>();

	useEffect(() => {
		async function fetchUser() {
			const apiUrl: string = process.env.REACT_APP_API_BASE_URL || "";
			// TODO error handling
			const res: AxiosResponse = await axios.get(
				`${apiUrl}/users/${video.userId}`,
			);
			if (res.data) setUser(res.data);
		}
		fetchUser();
	}, [video.userId]);

	return (
		<Link to="/video/test" style={{ textDecoration: "none" }}>
			<Container type={type}>
				<Image src={video.img} type={type} />
				<Details type={type}>
					<ChannelImage type={type} src={user?.img} />
					<TextContainer>
						<Title>{video.title}</Title>
						<ChannelName>{user?.name}</ChannelName>
						<Info>{`${video.views} views • ${format(video.createdAt)}`}</Info>
					</TextContainer>
				</Details>
			</Container>
		</Link>
	);
}
