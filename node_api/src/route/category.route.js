const ct = require("../controller/category.controller")

const category =(app,base_roue)=>{
  app.get(base_roue, ct.getAll)
  app.get(`${base_roue}/:id`, ct.getOne)
  app.post(base_roue, ct.create)
  app.put(base_roue, ct.update)
  app.delete(`${base_roue}/:id`, ct.remove)
}

module.exports =category;