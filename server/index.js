const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "univesp",
    database: "registrosEcoPontos"
})

//permissoes para cors para solucionar problemas com localhost, etc. 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
    });


app.use(express.json())


//tratamento de request de registro
app.post("/register", (req, res) => {
    const { formCorporateName } = req.body
    const  { formUserName } = req.body
    const { formEmail } = req.body
    const { formPassword } = req.body
    const { formCNPJ } = req.body

    let SQL = `INSERT INTO empresasRegistradas (\
idCNPJ, idRazaoSocial, idNomeDoResponsavel, idEmail, idSenha) VALUES (\
'${formCNPJ}', '${formCorporateName}', '${formUserName}', '${formEmail}', '${formPassword}');` 
            
    db.query(SQL, (err, result) => {
        console.log(err)
    })
})



//tratamento de request de login
app.post("/login", (req, res) => {
    
    const email = `'${req.body.FormEmail}'`
    const password = `'${req.body.FormPassword}'`

    let SQL = "SELECT * FROM empresasRegistradas WHERE idEmail = ? AND idSenha = ?;"

    db.query(
        SQL,
        [email, password],
        (err, result) => {
            if (err) {
                res.send({ err: err})
            }

            if (result.length > 0) {
                res.send(result)
            }
            else {
                // res.send({ message: "Senha ou usuário incorreto"})
                res.send({ message: email, password})
            }
        }
    )
})


app.listen(3001, () => console.log('rodando servidor'))
