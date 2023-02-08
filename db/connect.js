const mongoose=require('mongoose');


const connectdb=(url)=>{
 
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },(err)=>{
    if(!err)
    {
      console.log("Database is connected ")
    }
  });
//  console.log('database is connnected');

}

module.exports=connectdb;