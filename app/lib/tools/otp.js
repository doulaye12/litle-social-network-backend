const { totp } = require('otplib');

exports.verifyOtp = function(token, secret) {
   return totp.check(token, secret);
}

exports.generateOtp = function(secret) {
   totp.options = {window: 10}
   return totp.generate(secret);
}

