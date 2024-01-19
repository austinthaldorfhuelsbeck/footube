import { PropsWithChildren, useEffect, useState } from "react";
import {
	Container,
	Input,
	NewComment,
} from "../styles/styled-components/Comments.style";
import { CircleImg } from "../styles/util.style";
import { Comment } from "./Comment";
import { IComment } from "../interfaces/models";
import axios, { AxiosResponse } from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface ComponentProps {
	videoId: string;
}

export function Comments({
	videoId,
}: PropsWithChildren<ComponentProps>): JSX.Element {
	// redux
	const { currentUser } = useSelector((state: RootState) => state.user);

	// state for loading comments
	const [comments, setComments] = useState<(IComment | undefined)[]>([]);

	// fetch comments on page load
	useEffect(() => {
		async function fetchComments() {
			const res: AxiosResponse = await axios.get(`/api/comments/${videoId}`);
			if (res.data) setComments(res.data);
		}
		fetchComments();
	}, [videoId]);

	return (
		<Container>
			<NewComment>
				<CircleImg src={currentUser?.img} />
				<Input placeholder="Add a comment..." />
			</NewComment>
			{comments?.map(
				(comment) => comment && <Comment key={comment._id} comment={comment} />,
			)}
		</Container>
	);
}
