const { Message } = require('../../models');

exports.getAllMessages = async () => {
   try{
      const messages = await Message.findAll();
      return messages;
   }catch(err){
      throw err;
   }
}

exports.createMessage = async (message) => {
   try{
      const newMessage = await Message.create(message);
      return newMessage;
   }catch(err){
      throw err;
   }
}

exports.getMessageById = async (id) => {
   try {
      const message = await Message.findOne({where: { id } });
      return message;
   }catch(err){
      throw err;
   }
}