import React, { SyntheticEvent } from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";




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
				<Link to="/library">
					<Item>
						<VideoLibraryOutlined />
						Library
					</Item>
				</Link>
				<Link to="/history">
					<Item>
						<HistoryOutlined />
						History
					</Item>
				</Link>
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
				<Link to="/explore/music">
					<Item>
						<LibraryMusicOutlined />
						Music
					</Item>
				</Link>
				<Link to="/explore/sports">
					<Item>
						<SportsBasketballOutlined />
						Sports
					</Item>
				</Link>
				<Link to="/explore/gaming">
					<Item>
						<SportsEsportsOutlined />
						Gaming
					</Item>
				</Link>
				<Link to="/explore/movies">
					<Item>
						<MovieCreationOutlined />
						Movies
					</Item>
				</Link>
				<Link to="/explore/news">
					<Item>
						<ArticleOutlined />
						News
					</Item>
				</Link>
				<Link to="/live">
					<Item>
						<LiveTvOutlined />
						Live
					</Item>
				</Link>
				<hr />
				<Link to="/settings">
					<Item>
						<SettingsOutlined />
						Settings
					</Item>
				</Link>
				<Link to="/report">
					<Item>
						<FlagOutlined />
						Report
					</Item>
				</Link>
				<Link to="/help">
					<Item>
						<QuestionAnswerOutlined />
						Help
					</Item>
				</Link>
				<Item onClick={toggleTheme}>
					<HomeIcon />
					{isDarkMode ? "Light mode" : "Dark mode"}
				</Item>
			</Wrapper>
		</Container>
	);
};
