import express from "express";

const app =  express();
const port = 3000;

const MyLoger =  function(req,res,next){
console.log('Middleware: ' +  new Date().toDateString());
next();


}

app.use(MyLoger);

app.get('/',(req,res) => {
    res.send("Hello Middleware!");
    console.log('app.get: ' + new Date().toISOString());

})

app.get('/probando',(req,res) =>{
    res.status(200).send('<p>Algo de HTML<p>')

})

app.get('/error',(req,res) =>{
    res.status(404).send('No se encuentra, sorry')

})

app.get('/quemande/:nombre',(req,res) =>{
    res.send('mande: '+ req.params.nombre)

})



app.listen(port,() => {
    console.log(`Escuchando el port: ${port}`);
})