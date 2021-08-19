import {Router} from 'express';

import {getCheckout } from '../controllers/checkout'


const router = Router();

router.post('/checkout',getCheckout)


export default router