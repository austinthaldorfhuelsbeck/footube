import { useEffect, useState } from "react";
import { Container } from "./Search.style";
import axios, { AxiosResponse } from "axios";
import { IVideo } from "../../interfaces/models";
import { useLocation } from "react-router-dom";
import { Card } from "../../components/Card/Card";

export function Search() {
	const [videos, setVideos] = useState<(IVideo | undefined)[]>([]);
	const query = useLocation().search;

	useEffect(() => {
		async function fetchVideos() {
			// TODO error handling
			const res: AxiosResponse = await axios.get(`/api/videos/search${query}`);
			if (res.data) setVideos(res.data);
		}
		fetchVideos();
	}, [query]);

	return (
		<Container>
			{videos.map(
				(video: IVideo | undefined) =>
					video && <Card type="lg" key={video._id} video={video} />,
			)}
		</Container>
	);
}
