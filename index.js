var express = require('express')
var mysqlDAO = require('./mySqlDAO')
var app = express()

//calls get students 
app.get('/', (req, res) => {
    mysqlDAO.getStudents()
        .then((data) => {
            res,send(data)
        })
        .catch(error => {
            res.send(error)
        })
})

//dont need any of this
var x = [{ name: "John", age: 21 }, { name: "Mary", age: 22 }]

//get req on / and run this call back function 
app.get('/', (req, res) => {
    console.log("Get recieved on /")
    // res.send("<h4>All good<h4>") prints out this 
    res.send(x[1])//sends first element of the array - Mary. John -0
})

app.listen(3004, () => {
    console.log("Listening on port 3004")
})
