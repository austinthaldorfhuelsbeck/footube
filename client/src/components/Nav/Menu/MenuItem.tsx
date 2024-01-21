import React, { ReactElement } from "react";

import { Link } from "react-router-dom";

import { SvgIconProps } from "@mui/material";

import { Item } from "./Menu.style";

export interface IMenuItem {
	target: string;
	title: string;
	icon: (props: SvgIconProps) => JSX.Element;
}

export const MenuItem: React.FC<IMenuItem> = ({ target, title, icon }) => {
	return (
		<Link to={target}>
			<Item>
				{icon}
				{title}
			</Item>
		</Link>
	);
};
