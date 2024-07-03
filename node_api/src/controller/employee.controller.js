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
     // end check ehich field Required 
     var message = {} 
        if(firstname == null || firstname == ""){
            message.firstname = "firstname required!"
        }
        if(lastname == null || lastname == ""){
            message.lasstname = "lastname required!"
        }
        if(tel == null || tel == ""){
             message.tel = "telephone required!"
        }
       //Object.keys(message).length = 3  
       //Object.keys(message).length => return lenght of  object message 
      if(Object.keys(message).length > 0){
        res.json({
            error: true,
            Message : message
        })
        return //
      }  

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
                message: row.affectedRows ? "Update successfuly !!": "Data not in System!",
                data: row
            })
        }
    })
}

const remove =(req,res)=>{
    //var id = req.params.id
    var {id} = req.params
    // var {id} = req.query
    var sql = "DELETE FROM employee WHERE employee_id= ?"
    //var param_sql = [id]
    db.query(sql,[id],(error,row)=>{
        if(!error){
            res.json({
                // message: (row.affectedRows!= 0) ? "Deleted Successfull!" : "Data not in system",
                message: (row.affectedRows) ? "Deleted Successfull!" : "Data not in system",
                data : row
            })
            
        }else{
            res.json({
                message: error,
                error: true
            })
        }
    })
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}