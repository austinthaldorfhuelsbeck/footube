import { PropsWithChildren, useEffect, useState } from "react";
import { Container } from "../styles/styled-components/Recommended.style";
import axios, { AxiosResponse } from "axios";
import { IVideo } from "../interfaces/models";
import { Card } from "./Card";

interface ComponentProps {
	tags?: (string | undefined)[];
}

export function Recommended({
	tags,
}: PropsWithChildren<ComponentProps>): JSX.Element {
	// state for loading the videos
	const [videos, setVideos] = useState<(IVideo | undefined)[]>([]);

	useEffect(() => {
		async function fetchVideos() {
			const res: AxiosResponse = await axios.get(
				`/api/videos/tags?tags=${tags}`,
			);
			if (res.data) setVideos(res.data);
		}
		fetchVideos();
	}, [tags]);

	return (
		<Container>
			{videos.map(
				(video: IVideo | undefined) =>
					video && <Card type="sm" key={video._id} video={video} />,
			)}
		</Container>
	);
}
