import { connect} from '../src/database'


export const getVentas = async (req,res) =>{
const db = await connect();

const [rows] = await db.query('SELECT * FROM viajes')

res.json(rows)
}


export const getVenta =  async (req,res) =>{
    const db = await connect();

    const [rows] = await db.query("SELECT * FROM viajes WHERE idviajes = ? " ,[req.params.idviajes]);
    
    
    res.json(rows[0]);
}



export const createVenta= async (req,res) =>{
    try {
        const connection = await connect();
    await connection.execute(
          "INSERT INTO viajes(paquete,fecha_entrada,fecha_salida,nombre,correo,importe) VALUES (?, ?, ?, ?,?,?)",
          [req.body.paquete, req.body.fecha_entrada, req.body.fecha_salida, req.body.nombre,req.body.correo,,req.body.importe]
        );
    
        res.sendStatus(204);
      } catch (error) {
        console.error(error);
      }
}




export const deleteVenta = async (req,res) =>{
    const db = await connect();

 await db.query("DELETE FROM viajes WHERE idviajes = ? " ,[req.params.idviajes,]);    
       
    res.sendStatus(200)
}