import express from "express"
import mysql from "mysql2"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "SQLb1ossom*",
    database: "GTG"
})

app.get("/", (req, res) => {
    res.json("Hello! This is the backend.")
})

app.get("/game", (req, res) => {
    const q = "SELECT * FROM artists"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(3300, () => {
    console.log("Connected to backend!")
})
