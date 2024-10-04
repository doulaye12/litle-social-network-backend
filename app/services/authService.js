const { User } = require('../../models');
const {hashPassword} = require("../lib/tools/hashage");
const { authenticator } = require('otplib');

exports.signup = async (user) => {
   try{
      const {firstName, lastName, email, password} = user;
      const secret = authenticator.generateSecret();
      const hashedPassword = await hashPassword(password);
      const createdUser = await User.create({firstName, lastName, email, password: hashedPassword, secret});
      return createdUser;
   }catch (error) {
      throw error;
   }
}

exports.login = async (email) => {
   try{
      const dbUser = await User.findOne({where: {email} });
      return dbUser;
   }catch (error) {
      throw error;
   }
}