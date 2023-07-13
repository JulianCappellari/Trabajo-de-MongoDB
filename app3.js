const express = require("express");
const app = express();
app.use(express.json());

const librosRouter = require("./routes/libros");
const errorHandler = require("./middleware/errorHandler");

app.use("/libros", librosRouter);
app.use(errorHandler);

const puerto = 3005
app.listen(puerto, () => {
    console.log(`Servidor iniciado en el puerto ${puerto}`)
})