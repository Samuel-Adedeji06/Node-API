const PORT = 5200;
const express = require('express');
const app = express()


//app.get(route,callback)
app.get("/",  (req, res) =>{
    res.send("Welcome")
})

let studentsRecords = [
    {id: 1, studentName: "Paul", studentCourse: "Web development", studentLevel: "Level 4"},
    {id: 2, studentName: "Seth", studentCourse: "Data Science", studentLevel: "Level 3"},
    {id: 3, studentName: "Micheal", studentCourse: "Machine Lerning", studentLevel: "Level 3"},
    {id: 4, studentName: "Eve", studentCourse: "Cloud computing", studentLevel: "Level 1"},
    {id: 5, studentName: "Jude", studentCourse: "Cyber Security", studentLevel: "Level 2"}
]

app.get("/students", (req, res)=> {
    res.send(studentsRecords)
})

app.listen(PORT, ()=> {
    console.log("Running Server")
})