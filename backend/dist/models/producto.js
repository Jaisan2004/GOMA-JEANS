"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const marca_1 = __importDefault(require("./marca"));
let Producto = connection_1.default.define('productos', {
    id_producto: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true
    },
    precio: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    id_marca: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    id_genero: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    color: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true
    },
    imagen_url: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    }
}, {
    timestamps: false,
    freezeTableName: true
});
Producto.belongsTo(marca_1.default, {
    foreignKey: 'id_marca',
});
marca_1.default.hasMany(Producto, {
    foreignKey: 'id_marca',
});
exports.default = Producto;
