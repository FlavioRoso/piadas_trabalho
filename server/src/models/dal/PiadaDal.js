import db from "../../persistencia/db.js";
import Piada from "../Piada.js";
import CategoriaPiada from "../CategoriaPiada.js";

export default class PiadaDal {

    static inserir(piada) {
        db(banco => {
            return banco.collection("piada").insertOne(piada);
        });
    }

}
