const moongose = require("mongoose");

moongose.connect("mongodb://127.0.0.1:27017/empresa", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});


const vendedorSchema = new moongose.Schema({
    nombre: String,
    producto: String,
    email: String,
}, {collection: 'Vendedores'})

const Vendedor = moongose.model('Vendedor', vendedorSchema)

module.exports = Vendedor