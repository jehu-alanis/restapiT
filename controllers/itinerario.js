import { connect} from '../src/database'




export const getItinerario =  async (req,res) =>{
    const db = await connect();

    const [rows] = await db.query("SELECT * FROM itenerario WHERE idpaquete = ? " ,[req.params.idpaquete,]);
    
    
    res.json(rows);
}


