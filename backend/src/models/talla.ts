import { DataTypes } from 'sequelize';
import db from '../db/connection';

let Talla = db.define('tallas',
    {
        id_talla: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        talla: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        id_genero: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    });



export default Talla;