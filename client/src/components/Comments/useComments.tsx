import { useEffect, useState } from "react";

import { IComment } from "../../interfaces/models";
import { fetchComments } from "../../middleware/api";
import { IApiResponse, IAppError } from "../../interfaces/interfaces";

// for loading comments for a video
// input: id of the video to load comments of
// returns: array containing possible comments
type UseComments = {
	comments: (IComment | undefined)[];
	err?: IAppError;
};
export const useComments = (videoId: string): UseComments => {
	const [comments, setComments] = useState<(IComment | undefined)[]>([]);
	const [err, setErr] = useState<IAppError | undefined>();
	useEffect(() => {
		async function load() {
			const res: IApiResponse = await fetchComments(videoId);
			if (res.data) setComments(res.data);
			if (res.error) setErr(res.error);
		}
		load();
	}, [videoId]);

	return { comments, err };
};
