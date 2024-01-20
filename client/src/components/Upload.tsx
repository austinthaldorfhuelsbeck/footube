import {
	ChangeEvent,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	SyntheticEvent,
	useEffect,
	useState,
} from "react";

import {
	FirebaseStorage,
	StorageReference,
	UploadTask,
	getDownloadURL,
	getStorage,
	ref,
	uploadBytesResumable,
} from "firebase/storage";

import { SubmitButton } from "../styles/util.style";
import {
	Container,
	CreateButton,
	Input,
	Label,
	TextArea,
	Title,
	Wrapper,
} from "../styles/styled-components/Upload.style";
import app from "../firebase";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface IInputs {
	title?: string;
	desc?: string;
	urlType?: string;
}
interface ComponentProps {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function Upload({
	setIsOpen,
}: PropsWithChildren<ComponentProps>): JSX.Element {
	const navigate = useNavigate();

	// state for loading files to firebase
	const [img, setImg] = useState<File | undefined>();
	const [video, setVideo] = useState<File | undefined>();
	const [imgPercent, setImgPercent] = useState<number>(0);
	const [videoPercent, setVideoPercent] = useState<number>(0);
	const [inputs, setInputs] = useState<IInputs>({});
	const [tags, setTags] = useState<(string | undefined)[]>([]);

	// handlers
	function onVideoChange(e: ChangeEvent<HTMLInputElement>) {
		if (e.target?.files) setVideo(e.target.files[0]);
	}
	function onImgChange(e: ChangeEvent<HTMLInputElement>) {
		if (e.target?.files) setImg(e.target.files[0]);
	}
	function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		setInputs((prev) => {
			const { name, value } = e.target;
			return { ...prev, [name]: value };
		});
	}
	function onTagsChange(e: ChangeEvent<HTMLInputElement>) {
		setTags(e.target.value.split(","));
	}
	async function onUpload(e: SyntheticEvent<HTMLButtonElement>) {
		e.preventDefault();
		const res = await axios.post("/video", { ...inputs, tags });
		setIsOpen(false);
		res.status === 200 && navigate(`/videos/${res.data._id}`);
	}

	// load files to firebase when the user selects a file
	function uploadFile(file: File, urlType: string) {
		// build storage reference with custom filename
		const storage: FirebaseStorage = getStorage(app);
		const fileName: string = new Date().getTime() + file.name; // prevents dups
		const storageRef: StorageReference = ref(storage, fileName);
		// build upload task for firebase
		const uploadTask: UploadTask = uploadBytesResumable(storageRef, file);
		// call upload
		// TODO: handle error
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress: number =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				urlType === "imgUrl"
					? setImgPercent(progress)
					: setVideoPercent(progress);
				switch (snapshot.state) {
					case "paused":
						console.log("Paused");
						break;
					case "running":
						break;
					default:
						break;
				}
			},
			(error) => {},
			() => {
				// Upload completed successfully, now we can get the download URL
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setInputs((prev: IInputs) => {
						return { ...prev, urlType: downloadURL };
					});
				});
			},
		);
	}
	useEffect(() => {
		if (video) uploadFile(video, "videoUrl");
	}, [video]);
	useEffect(() => {
		if (img) uploadFile(img, "imgUrl");
	}, [img]);

	return (
		<Container>
			<Wrapper>
				<CreateButton onClick={() => setIsOpen(false)}>X</CreateButton>
				<Title>Upload a New Video</Title>
				<Label>Video:</Label>
				{videoPercent > 0 ? (
					"Uploading:" + videoPercent
				) : (
					<Input type="file" accept="video/*" onChange={onVideoChange} />
				)}
				<Input
					type="text"
					name="title"
					placeholder="Title"
					onChange={onChange}
				/>
				<TextArea
					name="desc"
					placeholder="Description"
					rows={8}
					onChange={onChange}
				/>
				<Input
					type="text"
					placeholder="Separate tags with commas."
					onChange={onTagsChange}
				/>
				<Label>Cover Image:</Label>
				{imgPercent > 0 ? (
					"Uploading:" + imgPercent + "%"
				) : (
					<Input type="file" accept="image/*" onChange={onImgChange} />
				)}
				<SubmitButton onClick={onUpload}>Upload</SubmitButton>
			</Wrapper>
		</Container>
	);
}
