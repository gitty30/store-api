require("dotenv").config();
require('express-async-errors');
const express = require("express");
const app = express();
const connectdb = require("./db/connect");
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const productsRouter = require("./routes/products");
app.use(express.json());

app.get("/", (req, res) => {
  res.send('<h1>Store-Api</h1> <a href="/api/v1/products" >products route</a>');
});
app.use("/api/v1/products", productsRouter);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    const connect = await connectdb(process.env.MONGO_URI);

    app.listen(port, () => {
      console.log(`Server is listening at ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
