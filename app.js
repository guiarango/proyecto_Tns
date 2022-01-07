const express = require("express");
const app = express();
const homeRoute = require("./routes/homeMain");

app.use(express.static("public"));
app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));
app.set("view engine", "ejs");
app.use(homeRoute);
