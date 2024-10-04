const { User, Message } = require('../../models');

exports.getAllUsers = async () => {
   try {
      const users = await User.findAll({
         include: {
            model: Message,
            attributes: ['id', 'content', 'isRead'],
         }
      });
      return users;
   } catch (error) {
      throw error;
   }
};

exports.getUserById = async (id) => {
   try{
      const user = await User.findOne({
         where: {id},
         include: {
            model: Message,
            attributes: ['id', 'content', 'isRead', 'createdAt', 'updatedAt'],
         }
      });
      return user;
   }catch(err){
      throw err;
   }
}

exports.getUserByEmail = async (email) => {
   try {
      const user = await User.findOne({
         where: {email},
         include: {
            model: Message,
            attributes: ['id', 'content', 'isRead', 'createdAt', 'updatedAt'],
         }
      });
      return user;
   }catch(err){
      throw err;
   }
}