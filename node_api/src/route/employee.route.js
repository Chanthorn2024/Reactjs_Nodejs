
const ct = require("../controller/employee.controller.js")

const employee = (app) => {
    app.get("/api/employee", ct.getAll)
    app.get("/api/employee/:id", ct.getOne)
    app.post("/api/employee",ct.create)
    app.put("/api/employee",ct.update)
    app.delete("/api/employee/:id", ct.remove)
}

module.exports = employee;