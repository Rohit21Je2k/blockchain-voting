import { Router } from "express";

import createUser from "../controllers/user/createUser.js";
import getUser from "../controllers/user/getUser.js";
import makeVote from "../controllers/user/makeVote.js";

const router = Router();

router.post("/create", createUser);
router.get("/:address", getUser);
router.post("/vote", makeVote);

export default router;
