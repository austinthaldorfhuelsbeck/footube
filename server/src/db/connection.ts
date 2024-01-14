// External Modules
import mongoose from "mongoose";

// Functions
function connect(uri: string) {
	mongoose
		.connect(uri)
		.then(() => console.log("Connected to DB"))
		.catch((err) => {
			throw err;
		});
}

// Exports
export { connect };
