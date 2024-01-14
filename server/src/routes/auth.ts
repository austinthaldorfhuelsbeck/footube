// External Modules
import { Router } from "express";
import { AuthController } from "../controllers/auth";

// Internal Modules

// Router Definition
const AuthRouter: Router = Router();

// Route Definitions
// create a user
AuthRouter.post("/signup", AuthController.signup);
// sign in
AuthRouter.post("/signin", AuthController.signin);
// google auth
AuthRouter.post("/google");

// Exports
export { AuthRouter };
