const Controller = require("./Controllers/Controller");
const express = require("express");
const cors = require("cors");
const db = require("./config/connection");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');


const app = express();
const port = 4000;
app.use(express.json());

app.use(cors({
    origin: "*"
}));




// requests

app.get("/", Controller.home);

app.get("/users", Controller.usernames);

app.get("/alltransactions", Controller.allTransactions);

app.post("/signup", Controller.singup);

app.get("/login", Controller.login);

app.delete("/deleteuser/:id", Controller.deleteUser);

app.post("/addtransaction", Controller.addTransaction);

app.delete("/delete/:_id", Controller.deleteTransaction);


const verifyJwt = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]
    if (token) {
        const result = jwt.verify(token, "mahdi secret")
    if (!result) {
        res.send({ msg : "you are not loged in, please log in first"})
    }
    else {
        next()
    }
    } else {
        res.send({ msg : "you are not loged in, please log in first"})
    }
}

app.post("/create", verifyJwt,  Controller.createblog);
app.get("/blogs", Controller.blogs)




app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
