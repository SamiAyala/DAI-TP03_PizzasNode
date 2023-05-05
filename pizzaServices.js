import config from './dbconfig.js';
import sql from 'mssql';
export class PizzaServices {

    static getAll = async () => {
        let returnEntity = null;
        console.log("Estoy en: GetAll");
        try {
            let pool = await sql.connect(config)
            let result = await pool.request()
                .query("SELECT * FROM Pizzas");
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity
    }

    static getById = async (id) => {
        let returnEntity = null;
        console.log("Estoy en: GetById");
        try {
            let pool = await sql.connect(config)
            let result = await pool.request()
                .input("pId", sql.Int, id)
                .query("SELECT * FROM Pizzas WHERE id = @pId");
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity
    }

    static insert = async (pizza) =>{
        console.log("Estoy en: insert");
            const {Nombre,LibreGluten,Importe,Descripcion} = pizza
            let pool = await sql.connect(config)
    
            let result = await pool.request()
            .input('nombre',sql.NVarChar(50),Nombre)
            .input('libreGluten',sql.Bit,LibreGluten)
            .input('importe',sql.Int,Importe)
            .input('descripcion',sql.NVarChar(200),Descripcion)
            .query('INSERT INTO Pizzas (nombre,libreGluten,importe,descripcion) VALUES (@nombre, @libreGluten,@importe,@descripcion)')
    }

        static update = async (id, importe) =>{
        let returnEntity = null;
        console.log("Estoy en: update");
        try{
            let pool = await sql.connect(config)
            let result = await pool.request()
            .input('Importe',sql.Int,importe)
            .input('pId',sql.Int,id)
            .query('UPDATE Pizzas SET Importe = @Importe WHERE Pizzas.id = @pId')
            returnEntity = result.recordsets[0];
        } catch (error){
            console.log(error);
        }
            return returnEntity;
        }


    static deleteById = async (id) => {
        let returnEntity = null;
        console.log("Estoy en: delete");
        try {
            let pool = await sql.connect(config)
            let result = await pool.request()
                .input("pId", sql.Int, id)
                .query("Delete FROM Pizzas WHERE id = @pId");
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
}
