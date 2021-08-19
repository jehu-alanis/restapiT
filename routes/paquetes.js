import {Router} from 'express';

import {getPaquetes , getPaquete, createPaquete, deletePaquete, updatePaquete} from '../controllers/paquetes'


const router = Router();

router.get('/paquetes',getPaquetes)

router.get('/paquete/:paquetesid',getPaquete)

router.post('/paquete',createPaquete)

router.delete('/paquete/:paquetesid',deletePaquete)

router.put('/paquete/:paquetesid',updatePaquete)


export default router