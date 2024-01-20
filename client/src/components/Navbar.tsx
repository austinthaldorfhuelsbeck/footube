import { FormEvent, SyntheticEvent, useEffect, useState } from "react";

import { Dispatch } from "redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {
	AccountCircleOutlined,
	SearchOutlined,
	VideoCallOutlined,
} from "@mui/icons-material";

import { Upload } from "./Upload";
import { RootState } from "../reducers/store";
import { logout } from "../reducers/userSlice";
import {
	Avatar,
	Button,
	Container,
	ContextMenu,
	Input,
	Search,
	User,
	Wrapper,
} from "../styles/styled-components/Navbar.style";
import { NavbarProps } from "../App";
import { MenuHeader } from "./MenuHeader";

export const Navbar: React.FC<NavbarProps> = ({ isMenu, setIsMenu }) => {
	// react router
	const navigate = useNavigate();

	// redux
	const { currentUser } = useSelector((state: RootState) => state.user);
	const dispatch: Dispatch = useDispatch();

	// state for show/hide logout context menu
	const [uploadIsOpen, setUploadIsOpen] = useState<boolean>(false);
	// state for show/hide video upload modal dialog
	const [logoutIsOpen, setLogoutIsOpen] = useState<boolean>(false);
	// state for searching
	const [q, setQ] = useState<string>("");

	// handlers
	function onSearch(
		e: FormEvent<HTMLFormElement> | SyntheticEvent<SVGSVGElement>,
	) {
		e.preventDefault();
		navigate(`/search?q=${q}`);
	}
	function onLogout(e: SyntheticEvent<HTMLDivElement>) {
		e.preventDefault();
		dispatch(logout());
	}
	const onMenuClick = (e: SyntheticEvent<HTMLOrSVGElement>) => {
		e.preventDefault();
		setIsMenu(!isMenu);
	};

	useEffect(() => {
		console.log("Current User: ", currentUser);
	}, [currentUser]);

	return (
		<>
			<Container>
				<Wrapper>
					{isMenu ? <span></span> : <MenuHeader toggle={onMenuClick} />}
					<Search onSubmit={onSearch}>
						<Input
							placeholder="Search"
							onChange={(e) => setQ(e.target.value)}
						/>
						<SearchOutlined onClick={onSearch} />
					</Search>
					{currentUser ? (
						<User>
							<VideoCallOutlined onClick={() => setUploadIsOpen(true)} />
							<Avatar
								src={currentUser.img}
								onClick={() => setLogoutIsOpen(!logoutIsOpen)}
							/>
							{logoutIsOpen && (
								<ContextMenu onClick={onLogout}>Sign Out</ContextMenu>
							)}
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
			{uploadIsOpen && <Upload setIsOpen={setUploadIsOpen} />}
		</>
	);
};
