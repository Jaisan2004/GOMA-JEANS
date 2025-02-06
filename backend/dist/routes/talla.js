"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const talla_1 = require("../controllers/talla");
const router = (0, express_1.Router)();
router.get('/', talla_1.getTalla);
exports.default = router;
