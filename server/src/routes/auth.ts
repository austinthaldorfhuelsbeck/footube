// External Modules
import { Router } from "express";

// Internal Modules
import { signup, signin, googleAuth } from "../controllers/auth";

// Router Definition
export const AuthRouter: Router = Router();

// Route Definitions
// create a user
AuthRouter.post("/signup", signup);
// sign in
AuthRouter.post("/signin", signin);
// google auth
AuthRouter.post("/google", googleAuth);
