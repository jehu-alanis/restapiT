import { connect} from '../src/database'


export const getPaquetes = async (req,res) =>{
const db = await connect();

const [rows] = await db.query('SELECT * FROM paquetes')

res.json(rows)
}


export const getPaquete =  async (req,res) =>{
    const db = await connect();

    const [rows] = await db.query("SELECT * FROM paquetes INNER JOIN hoteles  ON paquetes.hotel = hoteles.hotel_ca  WHERE paquetesid = ? " ,[req.params.paquetesid,]);
    
    
    res.json(rows[0]);
}



export const createPaquete= async (req,res) =>{
    try {
        const connection = await connect();
    await connection.execute(
          "INSERT INTO paquete(precio,dias,descripcion,hotel) VALUES ( ?, ?, ?,?)",
          [req.body.precio, req.body.dias, req.body.descripcion, req.body.hotel]
        );
    
        res.sendStatus(204);
      } catch (error) {
        console.error(error);
      }
}


export const updatePaquete = async (req, res) => {
    const connection = await connect();
    await connection.query("UPDATE paquete SET ? WHERE paquetesid = ?", [
      req.body,
      req.params.paquetesid,
    ]);
    res.sendStatus(204);
  };

export const deletePaquete = async (req,res) =>{
    const db = await connect();

 await db.query("DELETE FROM paquete WHERE paquetesid = ? " ,[req.params.paquetesid,]);    
       
    res.sendStatus(200)
}