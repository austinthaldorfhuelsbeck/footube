import React, { SyntheticEvent } from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import HomeIcon from "@mui/icons-material/Home";
import {
	AccountCircleOutlined,
	ArticleOutlined,
	ExposureOutlined,
	FlagOutlined,
	HistoryOutlined,
	LibraryMusicOutlined,
	LiveTvOutlined,
	MovieCreationOutlined,
	QuestionAnswerOutlined,
	SettingsOutlined,
	SportsBasketballOutlined,
	SportsEsportsOutlined,
	SubscriptionsOutlined,
	VideoLibraryOutlined,
} from "@mui/icons-material";

import { RootState } from "../reducers/store";
import {
	Button,
	Container,
	Item,
	Login,
	Title,
	Wrapper,
} from "../styles/styled-components/Menu.style";
import { MenuProps } from "../App";
import { MenuHeader } from "./MenuHeader";

export const Menu: React.FC<MenuProps> = ({
	isDarkMode,
	setIsDarkMode,
	isMenu,
	setIsMenu,
}) => {
	// get user with redux
	const { currentUser } = useSelector((state: RootState) => state.user);
	// handlers
	const onThemeClick = (e: SyntheticEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDarkMode(!isDarkMode);
	};
	const onMenuClick = (e: SyntheticEvent<HTMLOrSVGElement>) => {
		e.preventDefault();
		setIsMenu(!isMenu);
	};

	return (
		<Container>
			<MenuHeader toggle={onMenuClick} />
			<Wrapper>
				<Link to="/">
					<Item>
						<HomeIcon />
						Home
					</Item>
				</Link>
				<Link to="/trending">
					<Item>
						<ExposureOutlined />
						Explore
					</Item>
				</Link>
				<Link to="subscriptions">
					<Item>
						<SubscriptionsOutlined />
						Subscriptions
					</Item>
				</Link>
				<hr />
				<Item>
					<VideoLibraryOutlined />
					Library
				</Item>
				<Item>
					<HistoryOutlined />
					History
				</Item>
				<hr />
				{!currentUser && (
					<Title>
						<Login>
							Sign in to like videos, comment, and subscribe.
							<Link to="signin">
								<Button>
									<AccountCircleOutlined />
									Sign in
								</Button>
							</Link>
						</Login>
						<hr />
					</Title>
				)}
				<Title>Best of FooTube</Title>
				<Item>
					<LibraryMusicOutlined />
					Music
				</Item>
				<Item>
					<SportsBasketballOutlined />
					Sports
				</Item>
				<Item>
					<SportsEsportsOutlined />
					Gaming
				</Item>
				<Item>
					<MovieCreationOutlined />
					Movies
				</Item>
				<Item>
					<ArticleOutlined />
					News
				</Item>
				<Item>
					<LiveTvOutlined />
					Live
				</Item>
				<hr />
				<Item>
					<SettingsOutlined />
					Settings
				</Item>
				<Item>
					<FlagOutlined />
					Report
				</Item>
				<Item>
					<QuestionAnswerOutlined />
					Help
				</Item>
				<Item onClick={onThemeClick}>
					<HomeIcon />
					{isDarkMode ? "Light mode" : "Dark mode"}
				</Item>
			</Wrapper>
		</Container>
	);
};
