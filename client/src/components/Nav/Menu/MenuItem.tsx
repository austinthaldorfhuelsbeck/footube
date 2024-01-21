import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

import { Item } from "./Menu.style";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IMenuItem {
	target: string;
	title: string;
	icon: IconDefinition;
}

export const MenuItem: React.FC<IMenuItem> = ({ target, title, icon }) => {
	return (
		<Link to={target}>
			<Item>
				<FontAwesomeIcon icon={icon} />
				{title}
			</Item>
		</Link>
	);
};
