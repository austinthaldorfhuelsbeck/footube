import React from "react";

import { Card } from "../Card/Card";
import { Container } from "./Recommended.style";
import { IVideo } from "../../interfaces/models";
import { useRecommended } from "./useRecommended";
import { ErrorAlert } from "../ErrorAlert/ErrorAlert";

interface RecommendedProps {
	tags: (string | undefined)[];
}

export const Recommended: React.FC<RecommendedProps> = ({ tags }) => {
	// load from tags using custom hook
	const { videos, err } = useRecommended(tags);

	return (
		<Container>
			{videos.map(
				(video: IVideo | undefined) =>
					video && <Card type="sm" key={video._id} video={video} />,
			)}
			<ErrorAlert err={err} />
		</Container>
	);
};
