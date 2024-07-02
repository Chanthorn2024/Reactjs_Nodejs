const db = require("../util/db.js")


// fuction Get All Data from Table
const getAll = (req, res)=>{
     var sql ="SELECT * FROM employee" 
     db.query(sql,(error,row)=>{
        if(error){
            res.json({
                message:error,
                error:true
            })
        }else{
            res.json({
                list:row
            })
        }
    })
}

const getOne = (req,res)=>{
     var id = req.params.id
     var sql = "SELECT * FROM employee WHERE employee_id=?"
     db.query(sql,[id],(error,row)=>{
        if(error){
            res.json({
                message:error,
                error:true
            })
        }else{
            res.json({
                list:row
            })
        }
     })
}

const create = (req,res)=>{
    const {
            firstname,
            lastname,
            tel,
            email,
            base_salary,
            address,
            province,
            country
          } = req.body

     var sql = "INSERT INTO employee (firstname, lastname, tel, email, base_salary, address, province, country) VALUES(?, ?, ?, ?, ?, ?, ?, ?)"
     var param_data = [firstname,lastname,tel,email,base_salary,address,province,country]
     db.query(sql,param_data,(error,row)=>{
        if(error){
            res.json({
                message : error,
                error : true
            })
        }else{
            res.json({
                message:"Employee Created Successfuly!!"
            })
        }
     })    
}


const update = (req,res)=>{
    const {
        employee_id,
        firstname,
        lastname,
        tel,
        email,
        base_salary,
        address,
        province,
        country
    } = req.body

    var sql = "UPDATE employee SET firstname=?, lastname=?, tel=?,  email=?, base_salary=? ,address=?, province=?, country=? WHERE employee_id=?";
    var param_sql = [firstname,lastname,tel,email,base_salary,address,province,country,employee_id]

    db.query(sql,param_sql,(error,row)=>{
        if(error){
            res.json({
                message:error,
                error: true
            })
        }
        else{
            res.json({
                message: "Update successfuly !!",
                data: row
            })
        }
    })
}


module.exports = {
    getAll,
    getOne,
    create,
    update
}