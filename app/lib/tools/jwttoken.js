const jwt = require("jsonwebtoken");

exports.generateJwtToken = async (user) => {
   const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET, {expiresIn: "10m"});
   return token;
}

exports.verifyJwtToken = async (user) => {

}