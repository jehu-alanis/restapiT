import {Router} from 'express';

import {getVentas , getVenta, createVenta, deleteVenta} from '../controllers/ventas'


const router = Router();

router.get('/venta',getVentas)

router.get('/venta/:idviajes',getVenta)

router.post('/venta',createVenta)

router.delete('/venta/:idviajes',deleteVenta)



export default router