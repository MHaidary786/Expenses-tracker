const Controller = require("./Controllers/Controller");
const express = require("express");
const cors = require("cors");
const db = require("./config/connection");

const app = express();
const port = 4000;

app.use(express.json());

app.use(cors());

app.get("/", Controller.home);

app.get("/users", Controller.usernames);

app.get("/alltransactions", Controller.allTransactions);

app.post("/adduser", Controller.users);

app.post("/addtransaction", Controller.addTransaction);

app.delete("/delete/:_id", Controller.deleteTransaction);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
