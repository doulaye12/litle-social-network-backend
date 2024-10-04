const messageService = require('../services/messageService');
const userService = require('../services/messageService');

exports.getAllMessages = async (req, res) => {
   try {
      const messages = await messageService.getAllMessages();
      res.json(messages);
   }catch(err) {
      console.error(err);
      res.status(500).json({ message: 'Erreur lors de la recuperations des messages' });
   }
}

exports.getMessageById = async (req, res) => {
   try{
      const message = await messageService.getMessageById(req.params.id);
      if (!message){
         return res.status(404).json({error: "NOT FOUND"});
      }
      return res.status(200).json(message);
   }catch(err) {
      console.error(err);
      res.status(500).json({error: err});
   }
}

exports.createMessage = async (req, res) => {
   try{
      const message = await userService.createMessage(req.body);
      if (!message){
         return res.status(500).json({error: "Error lors de la creation de message"});
      }
      return res.status(201).json(message);
   }catch(err) {
      console.error(err);
      res.status(500).json({error: err});
   }
}