import { Router } from "express";

import { getDevHistorys } from "../controllers/historys";

const router = Router();

// Endpoint: Get project commit history.
router.get("", getDevHistorys);

export default router;
