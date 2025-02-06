"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarca = void 0;
const marca_1 = __importDefault(require("../models/marca"));
const getMarca = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const marcas = yield marca_1.default.findAll();
        if (marcas.length === 0) {
            return res.status(404).json({
                msg: 'No hay marcas en la base de datos'
            });
        }
        return res.json(marcas);
    }
    catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener las marcas',
            error
        });
    }
});
exports.getMarca = getMarca;
