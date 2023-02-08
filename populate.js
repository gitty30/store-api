// const { config } = require("dotenv")
require('dotenv').config();

const connectdb=require('./db/connect');
const Product=require('./models/product');
const jsonProducts=require('./products.json');

const Start=async()=>{
   try {
       await connectdb(process.env.MONGO_URI);
       await Product.deleteMany();
       await Product.create(jsonProducts);
       console.log("sucess!!")
       process.exit(0);
   } catch (error) {
    console.log(error);
    process.exit(0);
   }
}
Start();