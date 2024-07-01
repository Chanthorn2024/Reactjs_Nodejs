
const ct = require("../controller/employee.controller.js")

const employee = (app) => {
    app.get("/api/employee", ct.getAll)
    app.get("/api/employee/:id", ct.getOne)
}

module.exports = employee;