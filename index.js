const express = require('express')
const app = express()
const mysql = require('mysql2');
const handlebars = require('express-handlebars');
const post = require("./models/Post");
const PORT = 3000
const { urlencoded} =require('express');


app.use(express.urlencoded({extender:true}))
app.use(express.json());

app.engine('hendlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.get("/cadastrar", (request, response)=>{
    response.render('formulario')
})

app.post("/cadastrar", (request, response)=>{
    post.create({
        nome: request.body.nome,
        preco: request.body.preco,
        descricao: request.body.descricao
    }).then(()=>{
        response.send("produto inserido com sucesso")
    }).catch((error)=>{
        response.send("Houve um erro ao inserir dados" + error)
    })
})

app.listen(PORT, (error) =>{
    if(error){
        console.error("erro ao acassar a porta" + error)
        return
    }
    console.log("servidor conectado na porta")
})