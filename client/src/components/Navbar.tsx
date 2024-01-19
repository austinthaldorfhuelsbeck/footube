import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
	AccountCircleOutlined,
	SearchOutlined,
	VideoCallOutlined,
} from "@mui/icons-material";

import { RootState } from "../redux/store";
import {
	Avatar,
	Button,
	Container,
	Input,
	Search,
	User,
	Wrapper,
} from "../styles/styled-components/Navbar.style";

export function Navbar(): JSX.Element {
	const { currentUser } = useSelector((state: RootState) => state.user);

	return (
		<Container>
			<Wrapper>
				<Search>
					<Input placeholder="Search" />
					<SearchOutlined />
				</Search>
				{/* TODO: logout button */}
				{currentUser ? (
					<User>
						<VideoCallOutlined />
						<Avatar src={currentUser.img} />
						{currentUser.name}
					</User>
				) : (
					<Link to="signin">
						<Button>
							<AccountCircleOutlined />
							Sign In
						</Button>
					</Link>
				)}
			</Wrapper>
		</Container>
	);
}
