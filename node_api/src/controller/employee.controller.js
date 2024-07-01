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
const crate = (req,res)=>{

}




module.exports = {
    getAll,
    getOne,
    crate
}