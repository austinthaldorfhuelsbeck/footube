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
} from "@mui/icons-material";

import YouTubeLogo from "../img/logo.png";
import { Hr } from "../styles/util.style";
import {
	Button,
	Container,
	Img,
	Item,
	Login,
	Logo,
	Title,
	Wrapper,
} from "../styles/styled-components/Menu.style";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface MenuProps {
	darkMode: boolean;
	setDarkMode: Dispatch<SetStateAction<boolean>>;
}

interface MenuItemProps {
	icon: ReactNode;
	title: string;
	onClick?: () => void;
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
	const currentUser = useSelector((state: RootState) => state.user.currentUser);

	function toggle() {
		setDarkMode(!darkMode);
	}

	return (
		<Container>
			<Wrapper>
				<Link to="/">
					<Logo>
						<Img src={YouTubeLogo} />
						FooTube
					</Logo>
				</Link>
				<Link to="/">
					<MenuItem icon={<HomeIcon />} title="Home" />
				</Link>
				<Link to="/trending">
					<MenuItem icon={<ExposureOutlined />} title="Explore" />
				</Link>
				<Link to="subscriptions">
					<MenuItem icon={<SubscriptionsOutlined />} title="Subscriptions" />
				</Link>
				<Hr />
				<MenuItem icon={<VideoLibraryOutlined />} title="Library" />
				<MenuItem icon={<HistoryOutlined />} title="History" />
				<Hr />
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
						<Hr />
					</>
				)}
				<Title>Best of FooTube</Title>
				<MenuItem icon={<LibraryMusicOutlined />} title="Music" />
				<MenuItem icon={<SportsBasketballOutlined />} title="Sports" />
				<MenuItem icon={<SportsEsportsOutlined />} title="Gaming" />
				<MenuItem icon={<MovieCreationOutlined />} title="Movies" />
				<MenuItem icon={<ArticleOutlined />} title="News" />
				<MenuItem icon={<LiveTvOutlined />} title="Live" />
				<Hr />
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
