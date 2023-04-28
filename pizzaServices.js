import sql from 'mssql';
import config from './dbconfig.js';

export class PizzaService {

    static getAll = async () => {
        let returnEntity = null;
        console.log("Estoy en: PizzaService.GetAll()");
        try {
            let pool = await sql.connect(config)
            let result = await pool.request()
                .input("pId", sql.Int, id)
                .query("SELECT * FROM Pizzas");
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity
    }

    static getById = async (id) => {
        let returnEntity = null;
        console.log("Estoy en: PizzaService.GetById(id)");
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
            const {nombre,libreGluten,importe,descripcion} = pizza
            let pool = await sql.connect(config)
            const request = new sql.Request(pool);
    
            request.
            input('Nombre',sql.NVarChar(50),nombre)
            input('LibreGluten',sql.Bit,libreGluten)
            input('Importe',sql.Money,importe)
            input('Descripcion',sql.NVarChar(200),descripcion)
            .query('INSERT INTO Pizzas (nombre,libreGluten,importe,descripcion) VALUES (@nombre, @libreGluten,@importe,@descripcion)')
    }

    static update = async (pizza) =>{
        const {nombre,libreGluten,importe,descripcion} = pizza
            let pool = await sql.connect(config)
            const request = new sql.Request(pool);
    
            request.
            input('Nombre',sql.NVarChar(50),nombre)
            input('LibreGluten',sql.Bit,libreGluten)
            input('Importe',sql.Money,importe)
            input('Descripcion',sql.NVarChar(200),descripcion)
            .query('UPDATE Pizzas SET Importe = @pImporte WHERE Pizzas.id = @pId')
    }


    static deleteById = async (id) => {
        let returnEntity = null;
        console.log("Estoy en: PizzaService.DeleteById(id)");
        try {
            let pool = await sql.connect(config)
            let result = await pool.request()
                .input("pId", sql.Int, id)
                .query("Delete FROM Pizzas WHERE id = @pId");
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity
    }
}
