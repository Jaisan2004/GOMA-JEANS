import { Request, Response } from "express";
import Talla from "../models/talla";

export const getTalla = async (req: Request, res: Response): Promise<any> => {
    try {
        const tallas = await Talla.findAll({order: [['id_genero', 'ASC']]});

        if(tallas.length === 0) {
            return res.status(404).json({
                msg: 'No hay tallas en la base de datos'
            });
        }

        return res.json(
            tallas
        );

    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener las tallas',
            error
        });
    }
}