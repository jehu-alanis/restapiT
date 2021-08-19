import { connect} from '../src/database'


export const getHotels = async (req,res) =>{
const db = await connect();

const [rows] = await db.query('SELECT * FROM hoteles')

res.json(rows)
}


export const getHotel =  async (req,res) =>{
    const db = await connect();

    const [rows] = await db.query("SELECT * FROM hoteles WHERE idhoteles = ? " ,[req.params.id,]);
    
    
    res.json(rows[0]);
}



export const createHotel= async (req,res) =>{
    try {
        const connection = await connect();
    await connection.execute(
          "INSERT INTO hoteles(nombreH, rated,habitaciones,precio,hotel_ca) VALUES (?, ?, ?, ?,?)",
          [req.body.nombreH, req.body.rated, req.body.habitaciones, req.body.precio,req.body.hotel_ca]
        );
    
        res.sendStatus(204);
      } catch (error) {
        console.error(error);
      }
}


export const updateHotel = async (req, res) => {
    const connection = await connect();
    await connection.query("UPDATE hoteles SET ? WHERE idhoteles = ?", [
      req.body,
      req.params.idhoteles,
    ]);
    res.sendStatus(204);
  };

export const deleteHotel = async (req,res) =>{
    const db = await connect();

 await db.query("DELETE FROM hoteles WHERE idhoteles = ? " ,[req.params.idhoteles,]);    
       
    res.sendStatus(200)
}