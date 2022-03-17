//Numero da porta utilizada
const port = 8080;
//Importando bibliotecas que serão utilizadas 
const express = require('express');
//Importando framework express para as rotas
// Inserindo o express em uma variavel
const app = express();
//Middleware que indica que o express irá trabalhar com JSON
app.use(express.json());
//Rota para o metodo GET 
app.get("/courses", (req, resp) => {
  const query = req.query;
  console.log(query);
  return resp.json(["Alura", "Rocketseat", "Gridline"]);
});
//Rota para o metodo POST 
app.post("/courses", (req, resp) => { 
  const body = req.body;
  console.log(body)
  return resp.json(["Alura", "Rocketseat", "Gridline", "FrontEnd"])
 })
//Rota para o metodo PUT 
app.put("/courses/:id", (req, resp) => {
  const { id } = req.params;
  console.log(id);
  return resp.json([ "Alura", "Rocketseat", "Gridline", "BackEnd" ])
})
//Rota para o metodo PATCH 
app.patch("/courses/:id", (req, resp) => {
  return resp.json([ "Alura", "Rocketseat - New", "Gridline", "BackEnd" ])
})
//Rota para o metodo DELETE
app.delete("/courses/:id", (req, resp) => {
  return resp.json([ "Alura", "Rocketseat - New", "Gridline" ])
})

// Localhost:8080 onde está se escutando as rotas
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
