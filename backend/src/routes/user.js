import { Router } from "express";

import createUser from "../controllers/user/createUser.js";
import getUser from "../controllers/user/getUser.js";

const router = Router();

router.post("/create", createUser);
router.get("/:address", getUser);

export default router;
