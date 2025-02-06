import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import routeProducto from '../routes/producto';
import routeMarca from '../routes/marca';
import routeTalla from '../routes/talla';
import db from '../db/connection';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbconnection();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto: ${this.port}`);
        });
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({api:'Goma_jeans'});
        });

        this.app.use('/api/producto', routeProducto);
        this.app.use('/api/marca', routeMarca);
        this.app.use('/api/talla', routeTalla);
    }

    midlewares() {
        //Parseamos el body a json
        this.app.use(express.json());
        
        //CORS
        this.app.use(cors());
    }

    async dbconnection() {
        try{
            await db.authenticate();
            console.log('Base de datos conectada');
        } catch (error) {
            console.log(error);
            console.log('Error al conectar a la base de datos');
        }
    }
}

export default Server;