const { signup, login } = require('../services/authService');
const {verifyPassword} = require("../lib/tools/hashage");
const {generateJwtToken} = require("../lib/tools/jwttoken");
const {sendMail} = require("../lib/tools/sendMail");
const {messageOtp} = require("../lib/utils/mailText");
const {getUserByEmail} = require("../services/userService");
const {generateOtp, verifyOtp} = require("../lib/tools/otp");

const sendOtp = async (res, user, subject) => {
   const code = generateOtp(user.secret);
   await sendMail(user.email, subject, messageOtp(code));
   return res.status(200).json({message: `Un code OTP a été envoyer à l'adresse mail ${user.email}`});
}

exports.signup = async (req, res) => {
   try{
      const user = req.body;
      const createdUser = await signup(user);
      if (!createdUser) {
         return res.status(400).send({message: `User already exists in the database`});
      }
      res.status(201).json(createdUser);
   }catch (error) {
      console.error(error);
      return res.status(500).json({error, message: error.errors[0].message});
   }
}

exports.login = async (req, res) => {
   try{
      const {email, password} = req.body;
      const user = await login(email);
      if (user){
         const isPasswordMatch = await verifyPassword(user, password);
         if(isPasswordMatch){
            await sendOtp(res, user, "Verification Compte !");
         }else{
            return res.status(401).json({message:"Invalid Credentials"});
         }
      }else{
         return res.status(401).json({message:"Invalid Credentials"});
      }
   }catch (error) {
      console.error(error);
      return res.status(500).json({message: error.message});
   }
}

exports.verifyLoginOtp = async (req, res) => {
   try{
      const {token, email} = req.body;
      const user = await getUserByEmail(email);
      const isValid = verifyOtp(token, user.secret)
      if (!isValid){
         return res.status(401).json({message:"OTP invalide veuillez reessayer !"});
      }
      const loginToken = await generateJwtToken(user);
      return res.status(200).json({token: loginToken});
   }catch(error){
      console.error(error);
      return res.status(500).json({error: error.message});
   }
}
