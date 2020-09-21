const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");

//Database
connection.authenticate().then(() => {
    console.log("Conexão efetuada com a database!")

})
    .catch((msgErro) => {
        console.log(msgErro);
    })
// setando o EJS como view engine.
app.set("view engine", "ejs");
app.use(express.static("public"));
//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Rotas
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;

    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/")
    });
});

app.listen(8080, () => {
    console.log("App tá rodando! \nNem errou dessa vez hein?");
});