var jwt =require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  authUser: (req, res, next) => {
    var token = req.headers.token;
    if(token){
      jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(decoded.id == req.params.id){
          return next()
        }else{
          res.status(500).send('not authorized')
        }
      })
    }
  }
}
