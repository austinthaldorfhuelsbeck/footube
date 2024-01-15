import { Dispatch, PropsWithChildren, ReactNode, SetStateAction } from "react";

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
import {
	Button,
	Container,
	Hr,
	Img,
	Item,
	Login,
	Logo,
	Title,
	Wrapper,
} from "../styles/Menu.style";

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
	function toggle() {
		setDarkMode(!darkMode);
	}

	return (
		<Container>
			<Wrapper>
				<Logo>
					<Img src={YouTubeLogo} />
					FakeTube
				</Logo>
				<MenuItem icon={<HomeIcon />} title="Home" />
				<MenuItem icon={<ExposureOutlined />} title="Explore" />
				<MenuItem icon={<SubscriptionsOutlined />} title="Subscriptions" />
				<Hr />
				<MenuItem icon={<VideoLibraryOutlined />} title="Library" />
				<MenuItem icon={<HistoryOutlined />} title="History" />
				<Hr />
				<Login>
					Sign in to like videos, comment, and subscribe.
					<Button>
						<AccountCircleOutlined />
						Sign in
					</Button>
				</Login>
				<Hr />
				<Title>Best of FakeTube</Title>
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
				<MenuItem icon={<HomeIcon />} title="Light Mode" onClick={toggle} />
			</Wrapper>
		</Container>
	);
}
