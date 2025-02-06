import { Request, Response } from "express";
import Marca from "../models/marca";

export const getMarca = async (req: Request, res: Response): Promise<any> => {
    try {
        const marcas = await Marca.findAll();

        if(marcas.length === 0) {
            return res.status(404).json({
                msg: 'No hay marcas en la base de datos'
            });
        }

        return res.json(
            marcas
        );

    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener las marcas',
            error
        });
    }
}