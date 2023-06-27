const mongoose = require('mongoose');
const app = require('./app');
const DB_URL = "mongodb+srv://Princhi:<password>@cluster0.62k9quv.mongodb.net/?retryWrites=true&w=majority"
const DB_PW = "p10CIDDXNj5X8o8v"
const DB = DB_URL.replace("<password>", DB_PW)

const PORT = process.env.PORT || 3000;

mongoose.connect(DB).then(()=>{
    console.log("👌 db connected")
}).catch(err => console.log("Oops error 🥲",err));
app.listen(PORT, () => {
    console.log(`Sample app listening at http://localhost:${PORT}`);
  });
  
  //sushanth@sap.com
