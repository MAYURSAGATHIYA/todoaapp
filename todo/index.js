const express = require('express');
const json = express.json; //bodyparser aapse
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todo')
const app=express();   //app banavse
dotenv.config();
const PORT=process.env.PORT;
const DATABASE_URL=process.env.DATABASE_URL;
app.use(json()); //m  //req obj ma body obj apend krse
app.get('/',(req,res)=>res.json({'message':'server is running'}));

app.use('/todo',todoRoutes); 

mongoose.connect(DATABASE_URL,{ useNewUrlParser : true })
.then(()=>{

    console.log('database connection successfull');
    app.listen(PORT,()=>console.log(`server is runjing at port no.:${PORT}`));

})
.catch((err)=>{
    console.log('database connection failed')
    console.log(err);

})