import React from "react";

import { useSelector } from "react-redux";

import { RootState } from "../../reducers/store";
import { IComment } from "../../interfaces/models";
import { useChannel } from "../../hooks/useChannel";
import { CircleImg } from "../../styles/util.style";
import { useComment } from "./useComment";
import { ErrorAlert } from "../ErrorAlert/ErrorAlert";
import { useComments } from "./useComments";
import {
	Button,
	Date,
	Details,
	Form,
	Name,
	NewComment,
	Text,
	TextArea,
} from "./Comments.style";
import { timeago } from "../../utils/timeago";

// Types
interface CommentProps {
	comment: IComment;
}
interface VideoProps {
	videoId: string;
}

// New comment form component
const CommentForm: React.FC<VideoProps> = ({ videoId }) => {
	// get user with redux
	const { currentUser } = useSelector((state: RootState) => state.user);
	// get form functionality with hook
	const { desc, onChange, onSubmit, onCancel, err } = useComment(videoId);

	return (
		currentUser && (
			<NewComment>
				<CircleImg src={currentUser.img} />
				<Form onSubmit={onSubmit}>
					<TextArea
						placeholder="Add a comment..."
						onChange={onChange}
						value={desc}
					/>
					{desc && (
						<>
							<Button onClick={onCancel}>Cancel</Button>
							<Button type="submit">Comment</Button>
						</>
					)}
				</Form>
				<ErrorAlert err={err} />
			</NewComment>
		)
	);
};

// Single comment component
const Comment: React.FC<CommentProps> = ({ comment }) => {
	// get channel with hook
	const { channel, err } = useChannel(comment.userId);

	// add channel details when channel loads from db
	return (
		<>
			{channel && <CircleImg src={channel.img} />}
			<Details>
				{channel && <Name>{channel.name}</Name>}
				<Date>{timeago(comment.createdAt)}</Date>
				<Text>{comment.desc}</Text>
			</Details>
			<ErrorAlert err={err} />
		</>
	);
};

// Comments array component
export const Comments: React.FC<VideoProps> = ({ videoId }) => {
	// get comments with hook
	const { comments, err } = useComments(videoId);

	// display new comment form and map comments from db
	return (
		<>
			<CommentForm videoId={videoId} />
			{comments.map(
				(comment) => comment && <Comment key={comment._id} comment={comment} />,
			)}
			<ErrorAlert err={err} />
		</>
	);
};
