const express = require('express') // import
const app = express() // extend express
app.use(express.json())
const db = require("./src/util/db")

app.get('/', (req, res) => res.send('Hello World!'))

const employee = require('./src/route/employee.route.js')
const category = require('./src/route/category.route.js')
const product = require('./src/route/product.route.js')

employee(app)
// category(app)
// product(app)





// query
// params
// body
app.get("/employee",(req,res)=>{
    // var sql =""
    // var id = req.query.id
    var base_salary = req.query.base_salary
    var province = req.query.province
    var sql ="SELECT * FROM employee where  base_salary = ? OR province = ?" 
    db.query(sql,[base_salary,province],(err,row)=>{
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
})



app.listen(2004,()=>{
    console.log("http:localhost:2004")
})