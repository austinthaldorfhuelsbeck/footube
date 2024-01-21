import { ChangeEvent, SyntheticEvent, useState } from "react";

import { postComment } from "../../middleware/api";
import { IApiResponse, IAppError } from "../../interfaces/interfaces";

// for posting a new comment on a video
// input: id of the video to comment on
// returns: change handler; submit handler
type UseComment = {
	desc: string;
	onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	onSubmit: (e: SyntheticEvent<HTMLFormElement>) => void;
	onCancel: (e: SyntheticEvent<HTMLButtonElement>) => void;
	err?: IAppError;
};
export const useComment = (videoId: string): UseComment => {
	// state for form input and err
	const [desc, setDesc] = useState("");
	const [err, setErr] = useState<IAppError | undefined>();
	// handlers for form actions
	const onChange: UseComment["onChange"] = (e) => setDesc(e.target.value);
	const onSubmit: UseComment["onSubmit"] = async (e) => {
		const res: IApiResponse = await postComment({ videoId, desc });
		if (res.error) setErr(res.error);
	};
	const onCancel: UseComment["onCancel"] = (e) => {
		e.preventDefault();
		setDesc("");
	};

	return { desc, onChange, onSubmit, onCancel, err };
};
