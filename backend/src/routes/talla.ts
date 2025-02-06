import { Router } from "express";
import { getTalla } from "../controllers/talla";

const router = Router();

router.get('/', getTalla);

export default router;