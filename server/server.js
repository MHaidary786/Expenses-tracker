const Controller = require("./Controllers/Controller")
const express = require("express")
const cors = require("cors")
const app = express();


app.use(cors());


app.get('/', Controller.home)




app.listen(4000, ()=> {
    console.log(`Server is running on port: 4000`)
})