const express = require('express');
const  morgan = require('morgan');
const  app = express();
const pkg = require('../package.json');
const cors = require ('cors');

import helmet from "helmet";

import hotelesRoutes from '../routes/hoteles';
import calendarioRoutes from '../routes/calendario';
import paqueteRoutes from '../routes/paquetes';
import checkout from '../routes/checkout';
import itinerarios from '../routes/itinerarios';
import ventas from '../routes/ventas';
//midelwares
app.use(helmet());
app.set('pkg',pkg);
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));




app.get('/',(req, res) =>{
res.json({
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version,
    author: app.get('pkg').author,
})
})

app.use(hotelesRoutes);
app.use(calendarioRoutes);
app.use(paqueteRoutes);
app.use(checkout);
app.use(itinerarios);
app.use(ventas);

module.exports = app;