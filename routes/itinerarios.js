import {Router} from 'express';

import {getItinerario} from '../controllers/itinerario'


const router = Router();

router.get('/itenerario/:idpaquete',getItinerario)

export default router