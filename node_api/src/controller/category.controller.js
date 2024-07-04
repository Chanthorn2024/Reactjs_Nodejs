const db = require("../util/db")
const { isEmptyOrNull } = require("../util/service.js") 


// fuction Get All Data from Table"
const getAll = (req,res)=>{
    var sql = "SELECT * FROM category"
    db.query(sql,(error,row)=>{
        if(!error){
            res.json({
                list : row
            })
        }else{
           res.json({
            message : error,
            error : true
           })
        }
    })
}

// fuction Get One Data from Table"
const getOne=(req,res)=>{
    var id = req.params.id
     var sql = "SELECT * FROM category WHERE category_id=?"
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

// fuction Get Create Data from Table"
const create = (req,res)=>{
    
        const {
                name,
                description,
                parent_id,
                status
              } = req.body

         // end check ehich field Required 
         var message = {} 
            /* USE fuction by IsEmpty */
            if(isEmptyOrNull(name)){
                message.name = "Category name required!"
                res.json({
                    error: true,
                    Message : message
                })
                return 
            }
     
    
         var sql = "INSERT INTO category (name, description, parent_id, status) VALUES(?, ?, ?, ?)"
         var param_data = [name, description, parent_id, status]
         db.query(sql,param_data,(error,row)=>{
            if(error){
                res.json({
                    message : error,
                    error : true
                })
            }else{
                res.json({
                    message:"Category Created Successfuly!!"
                })
            }
         })    
}

// fuction Get Update Data from Table"
const update = (req,res)=>{
    const {
             category_id,
             name,
             description,
             parent_id,
             status
    } = req.body

    var message = {} 
    /* USE fuction by IsEmpty */
    if(isEmptyOrNull(name)){
        message.name = "Category name required!"
        res.json({
            error: true,
            Message : message
        })
        return 
    }
    else if(isEmptyOrNull(category_id)){
        message.category_id = "Category id required!"
        res.json({
            error: true,
            Message : message
        })
        return 
    }

    var sql = "UPDATE category SET category_id=?,name=?,description=?,parent_id=?,status=? WHERE category_id=?";
    var param_sql = [category_id,name,description,parent_id,status, category_id]

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

// fuction Get Delete Data from Table"
const remove = (req,res) => { 
     //var id = req.params.id
     var {id} = req.params
     // var {id} = req.query
     var sql = "DELETE FROM category WHERE category_id= ?"
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