// External Modules
import { Router } from "express";

// Internal Modules
import { signup, signin } from "../controllers/auth";

// Router Definition
const AuthRouter: Router = Router();

// Route Definitions
// create a user
AuthRouter.post("/signup", signup);
// sign in
AuthRouter.post("/signin", signin);
// google auth
AuthRouter.post("/google");

// Exports
export { AuthRouter };
