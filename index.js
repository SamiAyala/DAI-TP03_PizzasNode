import  express from "express";
import config from './dbconfig.js';
import sql from 'mssql';

const app = express();
const port = 3000;

app.get('/pizza',async(req,res) =>{
    const pizza = await PizzaServices.getAll()
    res.status(200).send(pizza)
})

app.get('/pizza/get/:id',async(req,res) =>{
    const pizza = await PizzaServices.getById(req.params.id)
    res.status(200).send(pizza)
})

app.delete('/pizza/delete/:id', async(req,res) => {
    const pizza = await PizzaServices.deleteById(req.params.id)
    res.status(202).send(pizza)
})

app.use(express.json())
app.post('/pizza/post', async(req,res) =>{
    try{
        console.log(req.body)
        await PizzaServices.insert(req.body)
        res.status(201).json({message: 'Pizza creada'})
    } catch (error){
        console.log(error)
        res.status(500).json({error : 'Fallo la cracion'})
    }
})

app.put('/pizza/put/:id/:importe',async(req,res) => {
    const pizza = await PizzaServices.update(req.params.id, req.params.importe)
    res.status(202).send(pizza)
})

app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`)
})

import {PizzaServices} from './pizzaServices.js'