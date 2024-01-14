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

// Server activation
app.listen(PORT, () => {
	connect(process.env.MONGO);
	console.log(`Listening on port ${PORT}`);
});
