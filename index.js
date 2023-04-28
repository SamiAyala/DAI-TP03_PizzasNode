import  express from "express";
import config from './dbconfig.js';
import sql from 'mssql';

const app = express();
const port = 3000;

app.get('/pizza',async(req,res) =>{
    const pizza = await PizzaService.getAll()
    res.status(200).send(pizza)
})

app.get('/pizza/id',async(req,res) =>{
    const pizza = await PizzaService.getById(req.params.id)
    res.status(200).send(pizza)
})

app.delete('/pizza/delete/:id', async(req,res) => {
    const pizza = await PizzaService.deleteById(req-params.id)
    res.status(200).send(pizza)
})

app.use(express.json)
app.post('/pizza', async(req,res) =>{
    try{
        await PizzaService.insert(req.body)
        res.status(200).json({message: 'Pizza creada'})
    } catch (error){
        console.log(error)
        res.status(500).json({error : 'Fallo la cracion'})
    }
})

app.put('/pizza/put/id',async(req,res) => {
    const pizza = await PizzaService.update(req.params.id, req.params.importe)
    res.status(200).send(pizza)
})



import {getAll, getById, insert,update , deleteById,  PizzaService} from './pizzaServices.js'
console.log(getAll())
console.log(getById(3))
console.log(insert("Huevo,true,2700,"))
console.log(update("2200",4))
console.log(deleteById(5))

