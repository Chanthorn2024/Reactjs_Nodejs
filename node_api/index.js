const express = require('express') // import
const app = express() // extend express
app.use(express.json())

const db = require("./src/util/db")

app.get('/', (req, res) => res.send('Hello World!'))

app.get("/employee",(req,res)=>{
    db.query("SELECT * FROM employee;",(err,row)=>{
        if(err){
            res.json({
                message:err,
            })
        }else{
            res.json({
                list:row
            })
        }
    })
    // res.json({
    //     list:[]
    // })
})


app.listen(2004,()=>{
    console.log("http:localhost:2004")
})