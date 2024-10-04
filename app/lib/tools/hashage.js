const bcrypt = require('bcryptjs');

exports.hashPassword = async (password) => {
   return bcrypt.hash(password, 12);
}

exports.verifyPassword = async (user, password) => {
   return bcrypt.compare(password, user.password);
}