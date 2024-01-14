import { Schema, model } from "mongoose";

const CommentSchema: Schema = new Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		videoId: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);

// Exports
export const Comment = model("Comment", CommentSchema);
