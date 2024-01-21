import React, { SyntheticEvent } from "react";

import { useUpload } from "./useUpload";
import { ErrorAlert } from "../ErrorAlert/ErrorAlert";
import { InlineButton } from "../../styles/util.style";
import {
	Container,
	CreateButton,
	Input,
	Label,
	TextArea,
	Title,
	Wrapper,
} from "./Upload.style";

interface ComponentProps {
	toggleUpload: (e: SyntheticEvent<any>) => void;
}

export const Upload: React.FC<ComponentProps> = ({ toggleUpload }) => {
	// custom hook for form and firebase
	const {
		imgPercent,
		videoPercent,
		onVideoChange,
		onImgChange,
		onTextChange,
		onTagsChange,
		onSubmit,
		err,
	} = useUpload();

	// toggle modal dialog on submit
	const onClick = (e: SyntheticEvent<HTMLButtonElement>) => {
		onSubmit(e);
		toggleUpload(e);
	};

	return (
		<Container>
			<Wrapper>
				<CreateButton onClick={toggleUpload}>X</CreateButton>
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
					onChange={onTextChange}
				/>
				<TextArea
					name="desc"
					placeholder="Description"
					rows={8}
					onChange={onTextChange}
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
				<InlineButton onClick={onClick}>Upload</InlineButton>
			</Wrapper>
			<ErrorAlert err={err} />
		</Container>
	);
};
