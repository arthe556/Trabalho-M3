const express = require("express");
const { response } = require("express");
const { uuid } = require("uuidv4"); //id unico

const app = express();
app.use(express.json());
const veiculos = []; //Alterar
const pecas = [];
const fluidos = [];

//=================== GET VIZUALIZAR ===============
app.get("/veiculos", (request, response) => {
  return response.json(veiculos);
});
app.get("/pecas", (request, response) => {
  return response.json(pecas);
});
app.get("/fluidos", (request, response) => {
  return response.json(fluidos);
});

//==================== POST INSERIR ================
app.post("/veiculos", (request, response) => {
  const { marca, ano, modelo } = request.body;
  const veiculo = { id: uuid(), marca, ano, modelo};
  veiculos.push(veiculo);
  return response.status(201).json(veiculo);
});

app.post("/pecas", (request, response) => {
  const { marca, ano, modelo } = request.body;
  const peca = { id: uuid(), marca, ano, modelo};
  pecas.push(peca);
  return response.status(201).json(peca);
});

app.post("/fluidos", (request, response) => {
  const { marca, valor } = request.body;
  const fluido = { id: uuid(), marca, valor};
  pecas.push(fluido);
  return response.status(201).json(fluido);
});

//==================== PUT ATUALIZAR ===============
app.put('/veiculos/:id', (request, response) => {
  const { id } = request.params;
  const { marca, ano, modelo } = request.body;
  const newVeiculos = { id, marca, ano, modelo };
  const veiculoindex = veiculos.findIndex(veiculo => veiculo.id == id);
  veiculos[veiculoindex] = newVeiculos;
  return response.json(newVeiculos);
});

app.put("/pecas/:id", (request, response) => {
  const { id } = request.params;
  const { marca, ano, modelo } = request.body;
  const newPecas = { id, marca, ano, modelo };
  const pecasindex = pecas.findIndex((peca) => peca.id == id);
  pecas[pecasindex] = newPecas;
  return response.json(newPecas);
});

app.put("/fluidos/:id", (request, response) => {
  const { id } = request.params;
  const { marca, valor } = request.body;
  const newFluidos = { marca, valor };
  const fluidoindex = fluidos.findIndex((fluido) => fluido.id == id);
  fluidos[fluidoindex] = newFluidos;
  return response.json(newFluidos);
});

//=================== DELETE DELETAR ===============
app.delete("/veiculos/:id", (request, response) => {
  const { id } = request.params;
  const veiculoindex = veiculos.findIndex((veiculo) => veiculo.id == id);
  veiculos.splice(veiculoindex, 1);
  return response.status(204).send();
});

app.delete("/pecas/:id", (request, response) => {
  const { id } = request.params;
  const pecaindex = pecas.findIndex((peca) => peca.id == id);
  pecas.splice(pecaindex, 1);
  return response.status(204).send();
});

app.delete("/fluidos/:id", (request, response) => {
  const { id } = request.params;
  const fluidoindex = fluidos.findIndex((fluido) => fluido.id == id);
  fluidos.splice(fluidoindex, 1);
  return response.status(204).send();
});

//================== ALERTA ========================
app.listen(8181, () => {
  console.log("O servidor foi iniciado");
});
