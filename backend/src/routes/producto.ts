import { Router } from "express";
import { getProducto, getProductos, postProducto, putProducto } from "../controllers/producto";

const router = Router();

router.get('/:pagina/:orden/:marca/:talla', getProductos);
router.get('/especifico/:id', getProducto);
router.post('/', postProducto);
router.put('/:id', putProducto);
export default router;