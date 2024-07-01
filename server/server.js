const Controller = require("./Controllers/Controller");
const express = require("express");
const cors = require("cors");
const db = require("./config/connection");

const app = express();
const port = 4000;
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

// requests

app.get("/", Controller.home);

app.get("/users", Controller.usernames);

app.get("/alltransactions",  Controller.allTransactions);

app.post("/signup", Controller.singup);

app.post("/login", Controller.login);

app.delete("/deleteuser/:id", Controller.deleteUser);

app.post("/addtransaction",  Controller.addTransaction);

app.delete("/delete/:_id",  Controller.deleteTransaction);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
