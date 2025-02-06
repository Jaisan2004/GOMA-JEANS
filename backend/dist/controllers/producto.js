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
exports.putProducto = exports.postProducto = exports.getProducto = exports.getProductos = void 0;
const producto_1 = __importDefault(require("../models/producto"));
const connection_1 = __importDefault(require("../db/connection"));
const marca_1 = __importDefault(require("../models/marca"));
const talla_1 = __importDefault(require("../models/talla"));
require("../models/productotalla");
const sequelize_1 = require("sequelize");
const getProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pagina, orden, marca, talla } = req.params;
    const offset = (parseInt(pagina) - 1) * 12;
    const order = orden.split(',');
    const marcas = marca.split(',');
    const tallas = talla.split(',');
    try {
        let productos = [];
        let total_producto = [];
        if (marcas[0] !== 'todo' && tallas[0] !== 'todo') {
            productos = yield producto_1.default.findAll({
                order: [[order[0], order[1]]],
                offset,
                limit: 12,
                include: [{
                        model: marca_1.default,
                        where: {
                            nombre: {
                                [sequelize_1.Op.or]: marcas
                            }
                        }
                    }, {
                        model: talla_1.default,
                        through: { attributes: [] },
                        where: {
                            talla: {
                                [sequelize_1.Op.or]: tallas
                            }
                        } // Evita que se retornen datos de la tabla intermedia
                    }]
            });
            total_producto = yield producto_1.default.findAll({
                attributes: [['id_producto', 'id_producto'], [connection_1.default.fn('COUNT', connection_1.default.col('productos.id_producto')), 'n_producto']],
                include: [{
                        model: marca_1.default,
                        attributes: [],
                        where: {
                            nombre: {
                                [sequelize_1.Op.or]: marcas
                            }
                        }
                    }, {
                        model: talla_1.default,
                        attributes: [],
                        through: { attributes: [] },
                        where: {
                            talla: {
                                [sequelize_1.Op.or]: tallas
                            }
                        } // Evita que se retornen datos de la tabla intermedia
                    }]
            });
            ;
        }
        else if (marcas[0] !== 'todo' && tallas[0] == 'todo') {
            productos = yield producto_1.default.findAll({
                order: [[order[0], order[1]]],
                offset,
                limit: 12,
                include: [{
                        model: marca_1.default,
                        where: {
                            nombre: {
                                [sequelize_1.Op.or]: marcas
                            }
                        }
                    },
                    {
                        model: talla_1.default,
                        through: { attributes: [] },
                    }]
            });
            total_producto = yield producto_1.default.findAll({
                attributes: [['id_producto', 'id_producto'], [connection_1.default.fn('COUNT', connection_1.default.col('productos.id_producto')), 'n_producto']],
                include: [{
                        model: marca_1.default,
                        attributes: [],
                        where: {
                            nombre: {
                                [sequelize_1.Op.or]: marcas
                            }
                        }
                    }]
            });
        }
        else if (marcas[0] === 'todo' && tallas[0] !== 'todo') {
            productos = yield producto_1.default.findAll({
                order: [[order[0], order[1]]],
                offset,
                limit: 12,
                include: [{
                        model: marca_1.default,
                    },
                    {
                        model: talla_1.default,
                        through: { attributes: [] },
                        where: {
                            talla: {
                                [sequelize_1.Op.or]: tallas
                            }
                        }
                    }]
            });
            total_producto = yield producto_1.default.findAll({
                attributes: [['id_producto', 'id_producto'], [connection_1.default.fn('COUNT', connection_1.default.col('productos.id_producto')), 'n_producto']],
                include: [{
                        model: talla_1.default,
                        attributes: [],
                        through: { attributes: [] },
                        where: {
                            talla: {
                                [sequelize_1.Op.or]: tallas
                            }
                        }
                    }]
            });
        }
        else {
            productos = yield producto_1.default.findAll({
                order: [[order[0], order[1]]],
                offset,
                limit: 12,
                include: [{
                        model: marca_1.default,
                    },
                    {
                        model: talla_1.default,
                        through: { attributes: [] },
                    }]
            });
            total_producto = yield producto_1.default.findAll({
                attributes: [['id_producto', 'id_producto'], [connection_1.default.fn('COUNT', connection_1.default.col('productos.id_producto')), 'n_producto']],
            });
        }
        if (productos.length === 0) {
            return res.status(404).json({
                msg: 'No hay productos en la base de datos'
            });
        }
        return res.json({
            total_producto,
            productos
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error al obtener los productos en el servidor hable con servicio tecnico',
        });
    }
});
exports.getProductos = getProductos;
const getProducto = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getProducto',
        id
    });
};
exports.getProducto = getProducto;
const postProducto = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'postProducto',
        body
    });
};
exports.postProducto = postProducto;
const putProducto = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putProducto',
        id,
        body
    });
};
exports.putProducto = putProducto;
