import express  from 'express';
import mongoose from 'mongoose';
import Videos from './dbModel.js'
import Corse from 'cors'

const app=express()
const PORT = process.env.PORT || 9000;
const connect_url="mongodb+srv://Vivek_Gawande:Vivek1234@cluster0.idhm5iz.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json())
app.use(Corse())

mongoose.set('strictQuery', true)

mongoose.connect(connect_url, {
    useNewUrlParser: true,
   
    useUnifiedTopology: true,
   
   })
   .then(() => {
    console.log("DB connected");
   })
   .catch((err) => console.log(`DB connection Err`, err));
  
app.get('/',(req,res)=>res.status(200).send("vviek is the boss"))

app.post('/v2/posts',(req,res)=>{
    const dbVideos=req.body
    Videos.create(dbVideos,(err,data)=>{
        if(err){
            res.send(500).res.send(err)
        }
        res.send(data)
    })
})

app.get('/v2/posts',(req,res)=>{
    Videos.find((err,data)=>{
        if(err){
            res.send(500).res.send(err)
        }
       res.send(data)
    })
})

app.listen(PORT,console.log("app listen on "+{PORT}))