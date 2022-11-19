import express from "express";
import PiadaController from "./src/controllers/PiadaController.js"
const app = express();
app.use(express.json());


app.post("/v1/piada", PiadaController.inserirPiada);

// executando o servidor
app.listen(8081, ()=> {
    console.log("Servidor na porta 8081");
});
