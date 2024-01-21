import { Schema, model } from "mongoose";

const UserSchema: Schema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
		},
		img: {
			type: String,
		},
		subscribers: {
			type: Number,
			default: 0,
		},
		subscribedUsers: {
			type: [String],
			default: [],
		},
		fromGoogle: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true },
);

// Exports
export const User = model("User", UserSchema);
