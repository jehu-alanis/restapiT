import {Router} from 'express';

import {getHotels , getHotel, createHotel, deleteHotel, updateHotel} from '../controllers/hoteles'


const router = Router();

router.get('/hotels',getHotels)

router.get('/hotel/:idhoteles',getHotel)

router.post('/hotel',createHotel)

router.delete('/hotel/:idhoteles',deleteHotel)

router.put('/hotel/:idhoteles',updateHotel)


export default router