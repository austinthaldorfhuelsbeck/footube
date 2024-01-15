import { Link } from "react-router-dom";
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
import { PropsWithChildren } from "react";

interface ComponentProps {
	type?: string;
}

export function Card({ type }: PropsWithChildren<ComponentProps>): JSX.Element {
	return (
		<Link to="/video/test" style={{ textDecoration: "none" }}>
			<Container type={type}>
				<Image
					src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/thumbnail-background-youtube-2023-design-template-d1ba8caa87a7e45a222132372cd336a7_screen.jpg?ts=1674608286"
					type={type}
				/>
				<Details type={type}>
					<ChannelImage type={type} />
					<TextContainer>
						<Title>Test Video</Title>
						<ChannelName>FooTube</ChannelName>
						<Info>660,908 views • 1 day ago</Info>
					</TextContainer>
				</Details>
			</Container>
		</Link>
	);
}
