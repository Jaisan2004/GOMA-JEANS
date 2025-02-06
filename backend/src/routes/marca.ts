import { Router } from "express";
import { getMarca } from "../controllers/Marca";

const router = Router();

router.get('/', getMarca);

export default router;