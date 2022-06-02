const express = require("express");
const app = express();
const mysql = require("mysql");

//ainda não usados
const bcrypt = require("bcrypt");
const saltRounds = 10;


//conexao com o banco de dados
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
});



//tratamento de request de login
app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM empresasRegistradas WHERE idEmail = ?", [email], (err, result) => {
      if (err) {
        res.send(err);
      }
    if (result.length > 0) {
        if (password === result[0].idSenha) {
            res.send({ msg: "Usuário logado. Bem vindo!", isAuthenticated: true })

            
          

        } else {res.send({ msg: "Senha incorreta" })}
    }
      else {res.send({ msg: "Usuário inexistente"})}
    }
)
});


//Exibição de dados no perfil
app.post("/profile", (req, res) => {

    const email = req.body.email;

  db.query("SELECT * FROM empresasRegistradas WHERE idEmail =?", [email], (err, result) => {

      res.send(result)

  })
})

//Deletar dados do db
app.delete("/delete", (req, res) => {
  db.query(
    "DELETE FROM empresasRegistradas WHERE idCNPJ =?", [req.body.id], (err, result) => {
      if(err) {res.send({msg: err})}
    }
  )
})





app.listen(3001);