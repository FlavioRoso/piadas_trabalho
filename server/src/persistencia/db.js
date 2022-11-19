import { MongoClient } from "mongodb";

const URL = "mongodb://localhost:27017/";
const BANCO_CONEXAO = "piadasDB";
export default function db(callback) {
    MongoClient.connect(URL)
        .then(db => {
            const dbo = db.db(BANCO_CONEXAO);
            callback(dbo)
            .then(res => db.close());
        });
}
