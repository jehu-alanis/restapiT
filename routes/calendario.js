import {Router} from 'express';
import {getCalendarios , 
    getCalendario, 
    createCalendario,
    deleteCalendario, 
    updateCalendario,
    getCalendarioCount} from '../controllers/calendario'


const router = Router();

router.get('/calendarios',getCalendarios)

router.get('/calendario/:idcalendario',getCalendario)

router.post('/calendario',createCalendario)

router.delete('/calendario/:idcalendario',deleteCalendario)

router.put('/calendario/:idcalendario',updateCalendario)

router.get('/calendario/count/:fecha_entrada/:fecha_salida/:hotel',getCalendarioCount)
export default router