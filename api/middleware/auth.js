// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
// dotenv.config();

// const auth = (request, response, next) => {

//   const token = localStorage.getItem('jwtToken');

//   console.log("TOKEN AUTH MİDDLEWARE:",token)

//   if(!token) {
//     return response.status(401).send("Yetkiniz yok")
//   }

//   try {
//     const decodedToken = jwt.verify(token,process.env.JWT_SECRET_KEY)
//     request.user = decodedToken;
//     console.log(request.user)
//     next();
//   } catch (error) {
//     response.status(400).send("hatali token")
//   }

// };

// module.exports = auth;
