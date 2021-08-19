import { connect} from '../src/database'


export const getCalendarios = async (req,res) =>{
const db = await connect();

const [rows] = await db.query('SELECT * FROM calendario')

res.json(rows)
}


export const getCalendario =  async (req,res) =>{
    const db = await connect();

    const [rows] = await db.query("SELECT * FROM calendario WHERE idcalendario = ? " ,[req.params.idcalendario,]);
    
    
    res.json(rows[0]);
}



export const createCalendario= async (req,res) =>{
    try {
        const connection = await connect();
    await connection.execute(
          "INSERT INTO calendario(fecha_entrada,hotel,fecha_salida) VALUES (?, ?, ?)",
          [req.body.fecha_entrada, req.body.hotel, req.body.fecha_salida]
        );
    
        res.sendStatus(204);
      } catch (error) {
        console.error(error);
      }
}


export const updateCalendario = async (req, res) => {
    const connection = await connect();
    await connection.query("UPDATE calendario SET ? WHERE idcalendario = ?", [
        req.body,
        req.params.idcalendario,
    ]);
    res.sendStatus(204);
  };

export const deleteCalendario = async (req,res) =>{
    const db = await connect();

 await db.query("DELETE FROM calendario WHERE idcalendario = ? " ,[req.params.idcalendario,]);    
       
    res.sendStatus(200)
}


export const getCalendarioCount = async (req,res) =>{
  const db = await connect();

  const [rows] = await db.query("SELECT COUNT(*) FROM calendario WHERE fecha_entrada and fecha_salida BETWEEN ? AND ? AND hotel = ?"
  ,[req.params.fecha_entrada,req.params.fecha_salida,req.params.hotel])


 res.json(rows[0]["COUNT(*)"]);
}