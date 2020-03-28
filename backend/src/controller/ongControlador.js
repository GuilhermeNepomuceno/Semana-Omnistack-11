const connection = require('../database/connection');
const cripto = require('crypto');


module.exports = {
   //método de listagem de ongs
   async list(request, response){
      const ongs = await connection('ongs').select('*');
   
      return response.json(ongs);
   },

    //método de criação de uma ong
    async create(request, response){
        const {name, email, whatsApp, city, uf} = request.body;
      
        const id = cripto.randomBytes(4).toString('HEX');
     
        await connection('ongs').insert({
           id,
           name,
           email,
           whatsApp,
           city,
           uf,
        })
     
         return response.json({id});
      }
}