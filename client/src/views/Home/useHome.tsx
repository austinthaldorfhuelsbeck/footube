import { useEffect, useState } from "react";

import { IVideo } from "../../interfaces/models";
import { fetchVideos } from "../../middleware/api";
import { IApiResponse, IAppError } from "../../interfaces/interfaces";
import { useLocation, useParams } from "react-router-dom";

export const useHome = (type?: string) => {
	// get tags from url
	const { tags } = useParams();
	const query = useLocation().search;
	// state to store a list of videos
	const [videos, setVideos] = useState<(IVideo | undefined)[]>([]);
	// state for api errors
	const [err, setErr] = useState<IAppError | undefined>();

	// fetch depending on type or tags
	useEffect(() => {
		const load = async () => {
			const res: IApiResponse = await fetchVideos(
				type,
				tags?.split(","),
				query,
			);
			if (res.data) setVideos(res.data);
			if (res.error) setErr(res.error);
		};
		load();
	}, [type, tags, query]);

	return { videos, err };
};
