// External Modules
import dotenv from "dotenv";

// Internal Modules
import { app } from "./app";
import { connect } from "./db/connection";

// Config
dotenv.config();

// App variables
if (!process.env.PORT || !process.env.MONGO) {
	throw new Error("Missing required environment variables.");
}
const PORT: number = parseInt(process.env.PORT as string, 10);
const MONGO: string = process.env.MONGO as string;

// Server activation
app.listen(PORT, () => {
	connect(MONGO);
	console.log(`Listening on port ${PORT}`);
});
