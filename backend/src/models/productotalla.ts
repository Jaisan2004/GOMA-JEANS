import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import Producto from "./producto";
import Talla from "./talla";

let ProductoTallas = sequelize.define('producto_talla', {
    id_producto: {
        type: DataTypes.INTEGER,
        references: {
            model: Producto, // O el modelo de Productos
            key: 'id_producto',
        }
    },
    id_talla: {
        type: DataTypes.INTEGER,
        references: {
            model: Talla, // O el modelo de Tallas
            key: 'id_talla',
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
});

Producto.belongsToMany(Talla, { through: ProductoTallas, foreignKey	: 'id_producto', otherKey: 'id_talla'});
Talla.belongsToMany(Producto, { through: ProductoTallas, foreignKey : 'id_talla', otherKey: 'id_producto'});

export default ProductoTallas;