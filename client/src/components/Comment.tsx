import { PropsWithChildren, useEffect, useState } from "react";
import { IComment, IUser } from "../interfaces/models";
import {
	Container,
	Date,
	Details,
	Name,
	Text,
} from "../styles/styled-components/Comment.style";
import { CircleImg } from "../styles/util.style";
import axios, { AxiosResponse } from "axios";
import { format } from "timeago.js";

interface ComponentProps {
	comment: IComment;
}

export function Comment({
	comment,
}: PropsWithChildren<ComponentProps>): JSX.Element {
	// state for loading the channel that posted the comment
	const [channel, setChannel] = useState<IUser | undefined>();

	// fetch video and user on page load
	useEffect(() => {
		async function fetchChannel() {
			const res: AxiosResponse = await axios.get(
				`/api/users/${comment.userId}`,
			);
			if (res.data) setChannel(res.data);
		}
		fetchChannel();
	}, [comment.userId]);

	return (
		<Container>
			<CircleImg src={channel?.img} />
			<Details>
				<Name>{channel?.name}</Name>
				<Date>{format(comment.createdAt)}</Date>
				<Text>{comment.desc}</Text>
			</Details>
		</Container>
	);
}
