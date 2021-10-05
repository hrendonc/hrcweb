const express = require("express");
const app = express();

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

// Vistas
app.get("/", (req, res) => {
    res.render("index", {
        titulo: "Inicio"
    });
});

app.get("/nosotros", (req, res) => {
    res.render("nosotros", {
        titulo: "Quien soy"
    });
});

app.use((req, res, next) => {
    // res.status(404).send("Sorry cant find that!");
    res.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});