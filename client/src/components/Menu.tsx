import { Dispatch, PropsWithChildren, ReactNode, SetStateAction } from "react";

import { Link } from "react-router-dom";

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
	SettingsOutlined,
	SportsBasketballOutlined,
	SportsEsportsOutlined,
	SubscriptionsOutlined,
	VideoLibraryOutlined,
	MenuOutlined,
} from "@mui/icons-material";

import YouTubeLogo from "../img/logo.png";
import {
	Button,
	Container,
	Header,
	Img,
	Item,
	Login,
	LogoLink,
	Title,
	Wrapper,
} from "../styles/styled-components/Menu.style";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/store";

interface MenuItemProps {
	icon: ReactNode;
	title: string;
	onClick?: () => void;
}
interface MenuProps {
	darkMode: boolean;
	setDarkMode: Dispatch<SetStateAction<boolean>>;
}

function MenuItem({ icon, title, onClick }: PropsWithChildren<MenuItemProps>) {
	return (
		<Item onClick={onClick}>
			{icon}
			{title}
		</Item>
	);
}

export function Menu({
	darkMode,
	setDarkMode,
}: PropsWithChildren<MenuProps>): JSX.Element {
	const { currentUser } = useSelector((state: RootState) => state.user);

	function toggle() {
		setDarkMode(!darkMode);
	}

	return (
		<Container>
			<Wrapper>
				<Header>
					<MenuOutlined />
					<LogoLink to="/">
						<Img src={YouTubeLogo} />
						FooTube
					</LogoLink>
				</Header>
				<Link to="/">
					<MenuItem icon={<HomeIcon />} title="Home" />
				</Link>
				<Link to="/trending">
					<MenuItem icon={<ExposureOutlined />} title="Explore" />
				</Link>
				<Link to="subscriptions">
					<MenuItem icon={<SubscriptionsOutlined />} title="Subscriptions" />
				</Link>
				<hr />
				<MenuItem icon={<VideoLibraryOutlined />} title="Library" />
				<MenuItem icon={<HistoryOutlined />} title="History" />
				<hr />
				{!currentUser && (
					<>
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
					</>
				)}
				<Title>Best of FooTube</Title>
				<MenuItem icon={<LibraryMusicOutlined />} title="Music" />
				<MenuItem icon={<SportsBasketballOutlined />} title="Sports" />
				<MenuItem icon={<SportsEsportsOutlined />} title="Gaming" />
				<MenuItem icon={<MovieCreationOutlined />} title="Movies" />
				<MenuItem icon={<ArticleOutlined />} title="News" />
				<MenuItem icon={<LiveTvOutlined />} title="Live" />
				<hr />
				<MenuItem icon={<SettingsOutlined />} title="Settings" />
				<MenuItem icon={<FlagOutlined />} title="Report" />
				<MenuItem icon={<HomeIcon />} title="Help" />
				<MenuItem
					icon={<HomeIcon />}
					title={darkMode ? "Light mode" : "Dark mode"}
					onClick={toggle}
				/>
			</Wrapper>
		</Container>
	);
}
