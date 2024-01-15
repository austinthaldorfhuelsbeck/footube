import { AccountCircleOutlined, SearchOutlined } from "@mui/icons-material";

import {
	Button,
	Container,
	Input,
	Search,
	Wrapper,
} from "../styles/styled-components/Navbar.style";
import { Link } from "react-router-dom";

export function Navbar(): JSX.Element {
	return (
		<Container>
			<Wrapper>
				<Search>
					<Input placeholder="Search" />
					<SearchOutlined />
				</Search>
				<Link to="signin">
					<Button>
						<AccountCircleOutlined />
						Sign In
					</Button>
				</Link>
			</Wrapper>
		</Container>
	);
}
