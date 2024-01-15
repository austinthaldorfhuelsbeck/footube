import {
	Container,
	Input,
	NewComment,
} from "../styles/styled-components/Comments.style";
import { CircleImg } from "../styles/util.style";
import { Comment } from "./Comment";

export function Comments(): JSX.Element {
	return (
		<Container>
			<NewComment>
				<CircleImg src="https://austinthaldorfhuelsbeck.github.io/ath-portf/img/ath.jpeg" />
				<Input placeholder="Add a comment..." />
			</NewComment>
			<Comment />
			<Comment />
			<Comment />
			<Comment />
			<Comment />
			<Comment />
		</Container>
	);
}
