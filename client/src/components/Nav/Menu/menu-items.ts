import {
	faBasketballBall,
	faChalkboard,
	faClapperboard,
	faClockRotateLeft,
	faFlag,
	faGamepad,
	faGear,
	faHouse,
	faMagnifyingGlassPlus,
	faMusic,
	faNewspaper,
	faPhotoFilm,
	faQuestionCircle,
	faTv,
} from "@fortawesome/free-solid-svg-icons";
import { IMenuItem } from "./MenuItem";

export const menuItems: IMenuItem[] = [
	{
		target: "/",
		title: "Home",
		icon: faHouse,
	},
	{
		target: "/trending",
		title: "Explore",
		icon: faMagnifyingGlassPlus,
	},
	{
		target: "/subscriptions",
		title: "Subscriptions",
		icon: faChalkboard,
	},
	{
		target: "/library",
		title: "Library",
		icon: faPhotoFilm,
	},
	{
		target: "/history",
		title: "History",
		icon: faClockRotateLeft,
	},
	{
		target: "/explore/music",
		title: "Music",
		icon: faMusic,
	},
	{
		target: "/explore/sports",
		title: "Sports",
		icon: faBasketballBall,
	},
	{
		target: "/explore/gaming",
		title: "Gaming",
		icon: faGamepad,
	},
	{
		target: "/explore/movies",
		title: "Movies",
		icon: faClapperboard,
	},
	{
		target: "/explore/news",
		title: "News",
		icon: faNewspaper,
	},
	{
		target: "/live",
		title: "Live",
		icon: faTv,
	},
	{
		target: "/settings",
		title: "Settings",
		icon: faGear,
	},
	{
		target: "/report",
		title: "Report",
		icon: faFlag,
	},
	{
		target: "/help",
		title: "Help",
		icon: faQuestionCircle,
	},
];
