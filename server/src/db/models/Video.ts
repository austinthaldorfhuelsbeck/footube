import { Schema, model } from "mongoose";

const VideoSchema: Schema = new Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		video: {
			type: String,
			required: true,
		},
		views: {
			type: Number,
			default: 0,
		},
		tags: {
			type: [String],
			default: [],
		},
		likes: {
			type: [String],
			default: [],
		},
		dislikes: {
			type: [String],
			default: [],
		},
	},
	{ timestamps: true },
);

// Exports
export const Video = model("User", VideoSchema);
