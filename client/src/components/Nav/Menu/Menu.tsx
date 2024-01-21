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

import { Header } from "../Header/Header";
import { NavbarProps } from "../Navbar/Navbar";
import { RootState } from "../../../reducers/store";
import { Button, Container, Item, Title, Wrapper } from "./Menu.style";

export interface MenuProps extends NavbarProps {
	isDarkMode: boolean;
	toggleTheme: (e: SyntheticEvent<HTMLDivElement>) => void;
}

export const Menu: React.FC<MenuProps> = ({
	isDarkMode,
	toggleTheme,
	toggleMenu,
}) => {
	// get user with redux
	const { currentUser } = useSelector((state: RootState) => state.user);

	return (
		<Container>
			<Header toggle={toggleMenu} />
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
				<Link to="/subscriptions">
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
					<>
						<Title>
							Sign in to like videos, comment, and subscribe.
							<Link to="/sign-in">
								<Button>
									<AccountCircleOutlined />
									Sign in
								</Button>
							</Link>
						</Title>
						<hr />
					</>
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
				<Item onClick={toggleTheme}>
					<HomeIcon />
					{isDarkMode ? "Light mode" : "Dark mode"}
				</Item>
			</Wrapper>
		</Container>
	);
};
