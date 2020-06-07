//importação
const sqlite3 = require("sqlite3").verbose()

//criando objeto
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//utilizalo
db.serialize(() => {
    
   // // criar tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // //inserir
    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?)
    // `
    // const values =  [
    //     "https://pixabay.com/pt/photos/bundle-corda-de-juta-jornal-1853667/",
    //     "Paper Sider",
    //     "Rua e bairro",
    //     "numero 100",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Residuos Eletrônicos, Lâmpadas"
    // ]

    // function afterInsertData(err) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Cadastrado com sucesso")
    //     console.log(this)

    // }

    // db.run(query, values, afterInsertData)
    
    //consultar
    // db.all(`SELECT name FROM places`, function(err, rows){
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão seus registros: ")
    //     console.log(rows)

    // })

    //deletar
    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso!")        
    // })
})