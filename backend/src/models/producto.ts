import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Marca from './marca';

let Producto = db.define('productos',
    {
        id_producto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        precio: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        id_marca: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        id_genero: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        color: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        imagen_url: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    })

Producto.belongsTo(Marca, {
    foreignKey: 'id_marca',
});
Marca.hasMany(Producto, {
    foreignKey: 'id_marca',
});


export default Producto;
