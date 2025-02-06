
import { Request, Response } from 'express';
import Producto from '../models/producto';
import sequelize from '../db/connection';
import Marca from '../models/marca';
import Talla from '../models/talla';
import '../models/productotalla';
import { Op } from 'sequelize';

export const getProductos = async (req: Request, res: Response): Promise<any>=> {
    const {pagina, orden, marca, talla} = req.params;
    const offset = (parseInt(pagina) - 1) * 12;
    const order = orden.split(',');
    const marcas = marca.split(',');
    const tallas = talla.split(',');

    try {
        let productos: any=[];
        let total_producto: any=[];
        if(marcas[0] !== 'todo' && tallas[0] !== 'todo') {
            productos = await Producto.findAll({
                order: [[order[0], order[1]]],
                offset, 
                limit: 12,
                include: [{
                    model: Marca,
                    where: {
                        nombre: {
                            [Op.or]: marcas
                        }
                    }
                },  {
                    model: Talla,
                    through: { attributes: [] }, 
                    where: {
                        talla: {
                            [Op.or]: tallas
                        }
                    }// Evita que se retornen datos de la tabla intermedia
                }]
                
            });
            total_producto = await Producto.findAll({
                attributes: [['id_producto', 'id_producto'], [sequelize.fn('COUNT', sequelize.col('productos.id_producto')), 'n_producto']],
                include: [{
                    model: Marca,
                    attributes: [],
                    where: {
                        nombre: {
                            [Op.or]: marcas
                        }
                    }
                },{
                    model: Talla,
                    attributes: [],
                    through: { attributes: [] }, 
                    where: {
                        talla: {
                            [Op.or]: tallas
                        }
                    }// Evita que se retornen datos de la tabla intermedia
                }]
              });;
        }else if(marcas[0] !== 'todo' && tallas[0] == 'todo') {
            productos = await Producto.findAll({
                order: [[order[0], order[1]]],
                offset, 
                limit: 12,
                include: [{
                    model: Marca,
                    where: {
                        nombre: {
                            [Op.or]: marcas
                        }
                    }
                },
                {
                    model: Talla,
                    through: { attributes: [] },
                }]
            });
            total_producto = await Producto.findAll({
                attributes: [['id_producto', 'id_producto'], [sequelize.fn('COUNT', sequelize.col('productos.id_producto')), 'n_producto']],
                include: [{
                    model: Marca,
                    attributes: [],
                    where: {
                        nombre: {
                            [Op.or]: marcas
                        }
                    }
                }]
              });
        }else if(marcas[0] === 'todo' && tallas[0] !== 'todo') {
            productos = await Producto.findAll({
                order: [[order[0], order[1]]],
                offset, 
                limit: 12,
                include: [{
                    model: Marca,
                },
                {
                    model: Talla,
                    through: { attributes: [] },
                    where: {
                        talla: {
                            [Op.or]: tallas
                        }
                    }
                }]
            });
            total_producto = await Producto.findAll({
                attributes: [['id_producto', 'id_producto'], [sequelize.fn('COUNT', sequelize.col('productos.id_producto')), 'n_producto']],
                include: [{
                    model: Talla,
                    attributes: [],
                    through: { attributes: [] },
                    where: {
                        talla: {
                            [Op.or]: tallas
                        }
                    }
                }]
              });
        }else {
            productos = await Producto.findAll({
                order: [[order[0], order[1]]],
                offset, 
                limit: 12,
                include: [{
                    model: Marca,
                },
                {
                    model: Talla,
                    through: { attributes: [] },
                }]
            });
            total_producto = await Producto.findAll({
                attributes: [['id_producto', 'id_producto'], [sequelize.fn('COUNT', sequelize.col('productos.id_producto')), 'n_producto']],
            });
        }


        if(productos.length === 0) {
            return res.status(404).json({
                msg: 'No hay productos en la base de datos'
            });
        }

        return res.json({
            total_producto,
            productos
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error al obtener los productos en el servidor hable con servicio tecnico',
        });
    }
}

export const getProducto = (req: Request, res:  Response)=> {
    const {id} = req.params;

    res.json({
        msg: 'getProducto',
        id
    });
}

export const postProducto = (req: Request, res:  Response)=> {
    const {body} = req;

    res.json({
        msg: 'postProducto',
        body
    });
}

export const putProducto = (req: Request, res:  Response)=> {
    const {id} = req.params;
    const {body} = req;

    res.json({
        msg: 'putProducto',
        id,
        body
    });
}