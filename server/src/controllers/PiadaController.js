import PiadaDal from "../models/dal/PiadaDal.js";
import Piada from "../models/Piada.js";

export default class PiadaController
{   
    static inserirPiada(req,res) {
        let dados = req.body;
        let piada = new Piada(
            null,
            dados['titulo'],
            dados['texto'],
            dados['categoria_id'],
        );
        let resultado = PiadaDal.inserir(piada);
        
        if(resultado) {
            res.json(resultado);
        } else {
            res.status(400).send();
        }

    }
}