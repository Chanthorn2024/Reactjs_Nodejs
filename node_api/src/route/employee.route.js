
const ct = require("../controller/employee.controller.js")

const employee = (app) => {
    app.get("/api/employee", ct.getAll)
    app.get("/api/employee/:id", ct.getOne)
    app.post("/api/employee",ct.create)
    app.put("/api/employee",ct.update)
}

module.exports = employee;