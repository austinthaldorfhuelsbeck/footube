import React, { SyntheticEvent } from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
	AccountCircleOutlined,
	SearchOutlined,
	VideoCallOutlined,
} from "@mui/icons-material";

import { useNavbar } from "./useNavbar";
import { Header } from "../Header/Header";
import { Upload } from "../../Upload/Upload";
import { RootState } from "../../../reducers/store";
import {
	Avatar,
	Button,
	Container,
	ContextMenu,
	Input,
	Search,
	User,
	Wrapper,
} from "./Navbar.style";

export interface NavbarProps {
	isMenu: boolean;
	toggleMenu: (e: SyntheticEvent<HTMLOrSVGElement>) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isMenu, toggleMenu }) => {
	// get current signed in user with redux
	const { currentUser } = useSelector((state: RootState) => state.user);
	// custom navbar hook
	const {
		isUploadOpen,
		isLogoutOpen,
		onSearch,
		onLogout,
		onSearchChange,
		toggleUpload,
		toggleLogout,
	} = useNavbar();

	return (
		<>
			<Container>
				<Wrapper>
					{isMenu ? <span></span> : <Header toggle={toggleMenu} />}
					<Search onSubmit={onSearch}>
						<Input placeholder="Search" onChange={onSearchChange} />
						<SearchOutlined onClick={onSearch} />
					</Search>
					{currentUser ? (
						<User>
							<VideoCallOutlined onClick={toggleUpload} />
							<Avatar src={currentUser.img} onClick={toggleLogout} />
							{isLogoutOpen && (
								<ContextMenu onClick={onLogout}>Sign Out</ContextMenu>
							)}
							{currentUser.name}
						</User>
					) : (
						<Link to="/sign-in">
							<Button>
								<AccountCircleOutlined />
								Sign In
							</Button>
						</Link>
					)}
				</Wrapper>
			</Container>
			{isUploadOpen && <Upload toggleUpload={toggleUpload} />}
		</>
	);
};
