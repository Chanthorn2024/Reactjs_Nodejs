const express = require('express') // import
const app = express() // extend express
app.use(express.json())

const db = require("./src/util/db")

app.get('/', (req, res) => res.send('Hello World!'))

// query
// params
// body


app.get("/employee",(req,res)=>{
    // var sql =""
    var emp_num = req.query.emp_num
    var sql ="SELECT * FROM employee where emp_num = ?" 
    db.query(sql,[emp_num],(err,row)=>{
        if(err){
            res.json({
                message:err,
            })
        }else{
            res.json({
                list:row,
                emp_num : emp_num
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