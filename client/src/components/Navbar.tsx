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
import { useState } from "react";
import { Upload } from "./Upload";

export function Navbar(): JSX.Element {
	// redux
	const { currentUser } = useSelector((state: RootState) => state.user);

	// state for show/hide video upload modal dialog
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			<Container>
				<Wrapper>
					<Search>
						<Input placeholder="Search" />
						<SearchOutlined />
					</Search>
					{/* TODO: logout button */}
					{currentUser ? (
						<User>
							<VideoCallOutlined onClick={() => setIsOpen(true)} />
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
			{isOpen && <Upload setIsOpen={setIsOpen} />}
		</>
	);
}
