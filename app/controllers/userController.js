const userService = require('../services/userService');

exports.getAllUsers = async (req, res) => {
   try {
      const users = await userService.getAllUsers();
      res.json(users);
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
   }
};

exports.getUserById = async (req, res) => {
   try {
      const user = await userService.getUserById(req.params.id);
      if (!user){
         return res.status(404).json({error: "NOT FOUND"});
      }
      return res.json(user);
   }catch(err) {
      console.error(err);
      return res.status(500).json({error: err});
   }
}

exports.getUserByEmail = async (req, res) => {
   try {
      const user = await userService.getUserByEmail(req.params.email);
      if (!user){
         return res.status(404).json({error: "NOT FOUND"});
      }
      return res.json(user);
   }catch(err) {
      console.error(err);
      return res.status(500).json({error: err});
   }
}
