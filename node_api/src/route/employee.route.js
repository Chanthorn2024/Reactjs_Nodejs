
const ct = require("../controller/employee.controller.js")
// const route = "/api/employee"

const employee = (app, base_route) => {
    app.get(base_route, ct.getAll)
    app.get(`${base_route}/:id`, ct.getOne)
    app.post(base_route,ct.create)
    app.put(base_route,ct.update)
    // app.delete("/api/employee/:id", ct.remove)
    app.delete(`${base_route}/:id`, ct.remove)
}

module.exports = employee;