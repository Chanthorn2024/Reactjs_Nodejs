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

}

// fuction Get Create Data from Table"
const create = (req,res)=>{

}

// fuction Get Update Data from Table"
const update = (req,res)=>{

}

// fuction Get Delete Data from Table"
const remove = (req,res) => {

}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}