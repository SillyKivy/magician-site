const express = require("express")
const app = express()

app.use(express.static("public"))

app.set("view engine", "ejs")

app.listen(3000, () => {
    console.log("listening on localhost:3000")
})

app.param("mageID", (req, res, next, id) => {
    return next();
})

app.param("bookID", (req, res, next, id) => {
    return next();
})

app.get("/", (req, res, next) => {
    return next();
})

app.get("/DetailedSearch", (req, res, next) => {
    return next();
})

app.get("/MageDB", (req, res, next) => {
    return next();
})

app.post("/MageDB/Del/:mageID", (req, res, next) => {
    return next();
})

app.get("/MageDB/Add", (req, res, next) => {
    return next();
})

app.post("/MageDB/Add", (req, res, next) => {
    return next();
})

app.get("/MageDB/Edit/:mageID", (req, res, next) => {
    return next();
})

app.post("/MageDB/Edit/:mageID", (req, res, next) => {
    return next();
})

app.get("/BookDB", (req, res, next) => {
    return next();
})

app.post("/BookDB/Del/:bookID", (req, res, next) => {
    return next();
})

app.get("/BookDB/Add", (req, res, next) => {
    return next();
})

app.post("/BookDB/Add", (req, res, next) => {
    return next();
})

app.get("/BookDB/Edit/:bookID", (req, res, next) => {
    return next();
})

app.post("/BookDB/Edit/:bookID", (req, res, next) => {
    return next();
})