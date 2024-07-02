const jwt = require("jsonwebtoken");
const dotenv = require('dotenv').config()




const verifyJwt = (req, res, next) => {
  console.log(req.headers.authorization)
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
      jwt.verify(token, "mahdi", (err, data) => {
        if (err) {
          console.log(err)
          return res.status(403).json({ msg: "Wrong or expired token." })
        }
        else {
          req.user = data;
          console.log(data)
          next()
        }
      });
      
    } else {
      res.send({ msg: "you are not loged in  please log in first" });
    }
  };
  

  module.exports = verifyJwt;