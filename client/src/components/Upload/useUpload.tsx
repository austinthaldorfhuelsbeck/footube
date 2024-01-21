import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";

import { NavigateFunction, useNavigate } from "react-router-dom";

import {
	FirebaseStorage,
	getDownloadURL,
	getStorage,
	ref,
	StorageError,
	StorageReference,
	uploadBytesResumable,
	UploadTask,
} from "firebase/storage";

import app from "../../firebase";
import { postVideo } from "../../middleware/api";
import { IApiResponse, IAppError } from "../../interfaces/interfaces";

// for uploading files to firebase and managing "new video" form state
// inputs: none
// returns: upload %, change/submit handlers, api error
interface IInputs {
	title?: string;
	desc?: string;
	urlType?: string;
}
type UseUpload = {
	// % file has uploaded for cover img
	imgPercent: number;
	// % file has uploaded for video
	videoPercent: number;
	// function to store a video in state from user input
	onVideoChange: (e: ChangeEvent<HTMLInputElement>) => void;
	// function to store an img in state from user input
	onImgChange: (e: ChangeEvent<HTMLInputElement>) => void;
	// function to handle text inputs
	onTextChange: (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
	// function to handle comma-separated tags from text input
	onTagsChange: (e: ChangeEvent<HTMLInputElement>) => void;
	// function to store the video object to the db
	onSubmit: (e: SyntheticEvent<HTMLButtonElement>) => void;
	// firebase or api error
	err?: IAppError | StorageError;
};
export const useUpload = (): UseUpload => {
	// react router
	const navigate: NavigateFunction = useNavigate();

	// state for loading files to firebase
	const [img, setImg] = useState<File | undefined>();
	const [video, setVideo] = useState<File | undefined>();
	const [imgPercent, setImgPercent] = useState<number>(0);
	const [videoPercent, setVideoPercent] = useState<number>(0);
	// state for form data
	const [inputs, setInputs] = useState<IInputs>({});
	const [tags, setTags] = useState<(string | undefined)[]>([]);
	// state for api errors
	const [err, setErr] = useState<IAppError | StorageError | undefined>();

	// handlers
	const onVideoChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target?.files) setVideo(e.target.files[0]);
	};
	const onImgChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target?.files) setImg(e.target.files[0]);
	};
	const onTextChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setInputs((prev) => {
			const { name, value } = e.target;
			return { ...prev, [name]: value };
		});
	};
	const onTagsChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTags(e.target.value.split(","));
	};
	const onSubmit = async (e: SyntheticEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const res: IApiResponse = await postVideo({ ...inputs, tags });
		if (res.error) setErr(res.error);
		if (res.data) navigate(`/video/${res.data._id}`);
	};

	// whenever file input changes, begin uploading file to firebase
	useEffect(() => {
		if (video) uploadFile(video, "video");
	}, [video]);
	useEffect(() => {
		if (img) uploadFile(img, "img");
	}, [img]);
	// function to load files to firebase when the user selects a file
	const uploadFile = (file: File, urlType: string) => {
		// build storage reference with custom filename
		const storage: FirebaseStorage = getStorage(app);
		const fileName: string = new Date().getTime() + file.name; // prevents dups
		const storageRef: StorageReference = ref(storage, fileName);
		// build upload task for firebase
		const uploadTask: UploadTask = uploadBytesResumable(storageRef, file);
		// call upload
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress: number =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				urlType === "img" ? setImgPercent(progress) : setVideoPercent(progress);
				switch (snapshot.state) {
					case "paused":
						console.log("Paused");
						break;
					default:
						break;
				}
			},
			(error) => {
				setErr(error);
			},
			() => {
				// Upload completed successfully, now we can get the download URL
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setInputs((prev: IInputs) => {
						return { ...prev, [urlType]: downloadURL };
					});
				});
			},
		);
	};

	return {
		imgPercent,
		videoPercent,
		onVideoChange,
		onImgChange,
		onTextChange,
		onTagsChange,
		onSubmit,
		err,
	};
};
