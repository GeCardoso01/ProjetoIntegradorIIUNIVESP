var express = require('express')
var app = express()
const mysql = require("mysql")


//conexão com o banco de dados
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
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, SELECT");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE, SELECT");
    next();
    });

//instanciando o express json
app.use(express.json())

//Recebendo dados do pedido de registro
app.post("/register", (req, res) => {
    const { formCorporateName } = req.body
    const  { formUserName } = req.body
    const { formEmail } = req.body
    const { formPassword } = req.body
    const { formCNPJ } = req.body

    console.log(req.body)
    let SQL = `INSERT INTO empresasRegistradas (\
idCNPJ, idRazaoSocial, idNomeDoResponsavel, idEmail, idSenha) VALUES (\
'${formCNPJ}', '${formCorporateName}', '${formUserName}', '${formEmail}', '${formPassword}');` 
            
    db.query(SQL, (err, result) => {
        console.log(err)
    })
})


//retornando dados do server para login - posteriormente deve ser RETIRADO. 
app.get("/getLogin", (req, res) => {
    
    let SQL = "SELECT * FROM empresasRegistradas;"

    db.query(SQL, (err, result) => {
        if(err) console.log(err)
        else res.send(result)
    })
})

//recebendo dados de login para verificação
app.post("/login", (req, res) => {
    const email = req.body.email
    const password = req.body.password

    db.query("SELECT * FROM empresasRegistradas WHERE idEmail=? AND idSenha=?", 
    [email, password], (req, res) => {
        if(err) {
            res.send(err)
        }
        res.send(res)
    })
})


app.listen(3001, () => console.log('rodando servidor'))
