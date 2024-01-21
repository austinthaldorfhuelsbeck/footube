import React from "react";

import { useHome } from "./useHome";
import { Container } from "./Home.style";
import { IVideo } from "../../interfaces/models";
import { Card } from "../../components/Card/Card";
import { ErrorAlert } from "../../components/ErrorAlert/ErrorAlert";

interface ComponentProps {
	type?: string;
}

export const Home: React.FC<ComponentProps> = ({ type }) => {
	// use hook to fetch videos
	const { videos, err } = useHome(type);

	return (
		<Container>
			{videos.map(
				(video: IVideo | undefined) =>
					video && <Card type="lg" key={video._id} video={video} />,
			)}
			<ErrorAlert err={err} />
		</Container>
	);
};
