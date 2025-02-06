import { DataTypes } from 'sequelize';
import db from '../db/connection';

let Marca = db.define('marcas',
    {
        id_marca: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    });



export default Marca;
