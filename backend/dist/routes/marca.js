"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Marca_1 = require("../controllers/Marca");
const router = (0, express_1.Router)();
router.get('/', Marca_1.getMarca);
exports.default = router;
