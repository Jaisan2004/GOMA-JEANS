"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const producto_1 = __importDefault(require("./producto"));
const talla_1 = __importDefault(require("./talla"));
let ProductoTallas = connection_1.default.define('producto_talla', {
    id_producto: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: producto_1.default, // O el modelo de Productos
            key: 'id_producto',
        }
    },
    id_talla: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: talla_1.default, // O el modelo de Tallas
            key: 'id_talla',
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
});
producto_1.default.belongsToMany(talla_1.default, { through: ProductoTallas, foreignKey: 'id_producto', otherKey: 'id_talla' });
talla_1.default.belongsToMany(producto_1.default, { through: ProductoTallas, foreignKey: 'id_talla', otherKey: 'id_producto' });
exports.default = ProductoTallas;
