import { AccountCircleOutlined, SearchOutlined } from "@mui/icons-material";

import {
	Button,
	Container,
	Input,
	Search,
	Wrapper,
} from "../styles/styled-components/Navbar.style";

export function Navbar(): JSX.Element {
	return (
		<Container>
			<Wrapper>
				<Search>
					<Input placeholder="Search" />
					<SearchOutlined />
				</Search>
				<Button>
					<AccountCircleOutlined />
					Sign In
				</Button>
			</Wrapper>
		</Container>
	);
}
