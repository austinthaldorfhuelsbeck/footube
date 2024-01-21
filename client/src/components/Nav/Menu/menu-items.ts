import { IMenuItem } from "./MenuItem";
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
import HomeIcon from "@mui/icons-material/Home";

export const menuItems: IMenuItem[] = [
	{
		target: "/",
		title: "Home",
		icon: HomeIcon,
	},
];
