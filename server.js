const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser.json());

//create simple no express and mongoDB server
//initialize mongoose database
mongoose.connect("mongodb://localhost/react-shopping-db", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//define product model
const Product = mongoose.model(
  "products",
  new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    title: String,
    image: String,
    description: String,
    price: Number,
    availableSizes: [String],
  })
);

//get list of products
app.get("/api/products", async (req, res) => {
  const products = await Product.find({}); //empty parameter: there is no condition, return all products
  console.log("products: " + products);
  res.send(products);
});

//create a new product inside the database
app.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});

//delete products
app.delete("/api/products/:id", async (req, res) => {
  //get the id of the product, then it gonna be delete it
  const deletefProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deletefProduct);
});

//listen to the port and launch the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:" + port));
