const express = require ('express')
const app = express()
const connectbd = require("./batabase")
const datamodle= require('./data')
const cors= require('cors')
app.use(cors())
app.use(express.json())
app.get("/get",(req,res)=>{

    datamodle.find({})
   .then((data)=>{
    return res.json(data)
   })
   .catch((err) =>{
        console.log("Error in fetching data",err)
    })
})
app.post("/",(req,res)=>{
 
    const newobj= new datamodle(req.body)
    newobj.save()
    .then(() =>{
        return res.json({message:"success"})
    })
    .catch((err) =>{
        console.log("Error in saving data",err)
    })
})
app.get('/data/:id', (req, res) => {
    console.log("Data route accessed");
    const id = req.params.id;
    datamodle.findById(id)
        .then((data) => {
            return res.send(data);
        })
        .catch((err) => {
            console.log("Error in fetching data", err);
            res.status(500).send("Error in fetching data");
        });
});

app.put("/edit/:id",(req,res)=>{
    const id = req.params.id;
    
    datamodle.findByIdAndUpdate(id, req.body)
    .then(()=>{
        return res.json({message:"success"})
    })
    .catch((err) =>{
        console.log("Error in updating data",err)
    })
})
app.delete("/delete/:id",(req, res) =>{

    const id = req.params.id;

    datamodle.findByIdAndDelete(id)
   .then(()=>{
    return res.json({message:"success"})
   })
   .catch((err) =>{
        console.log("Error in deleting data",err)
    })
})

app.get("/filter/",(req,res)=>{
    const gender= req.query.gender;
    datamodle.find({gender: gender})
    .then((data)=>{
    return res.json(data)
   })
   .catch((err) =>{
        console.log("Error in fetching data",err)
    })
})


connectbd()
.then(()=>{
    console.log("Database Connected")
    app.listen(3000, ()=>{
        console.log("Server is running on port 3000")
    })
}).catch(()=>{
    console.log("Error Connecting to Database")
})