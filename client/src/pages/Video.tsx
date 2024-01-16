import {
	AddTaskOutlined,
	ReplyOutlined,
	ThumbDownOutlined,
	ThumbUpOutlined,
} from "@mui/icons-material";

import { Comments } from "../components/Comments";
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
import { Card } from "../components/Card";

export function Video(): JSX.Element {
	return (
		<Container>
			<Content>
				<Wrapper>
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/yIaXoop8gl4?si=HBmRFd9wt4drZMdD"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</Wrapper>
				<Title>Test Video</Title>
				<Details>
					<Info>7,948,154 views • Jun 22, 2022</Info>
					<Buttons>
						<Button>
							<ThumbUpOutlined /> 123
						</Button>
						<Button>
							<ThumbDownOutlined />
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
				<Channel>
					<ChannelInfo>
						<CircleImg src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/thumbnail-background-youtube-2023-design-template-d1ba8caa87a7e45a222132372cd336a7_screen.jpg?ts=1674608286" />
						<ChannelDetail>
							<ChannelName>Test Channel</ChannelName>
							<Counter>200K subscribers</Counter>
							<Description>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
								nesciunt numquam aut. Impedit voluptates excepturi quod deserunt
								rem cumque veritatis iure praesentium aperiam. Officiis
								praesentium magni facere dolores ut quos.
							</Description>
						</ChannelDetail>
					</ChannelInfo>
					<Subscribe>Subscribe</Subscribe>
				</Channel>
				<Hr />
				<Comments />
			</Content>
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
