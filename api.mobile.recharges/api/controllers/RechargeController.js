/**
 * ClientApiController
 *
 * @description :: Server-side logic for managing Clientapis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const Promise = require("bluebird");


module.exports = {

  'create': function(req, res){
    this.finOrCreateClient(req.body.client)
      .then(function(client){ return this.addRecharge(client.id, req.body.recharge)})
      .then(function(recharge){
        return res.AppResponse(200, 'UPDATE_SUCCESSFULLY', recharge);
      })
      .catch(function(error){
        return res.AppResponse(400, 'USER_CREATED_SUCCESSFULLY', error);
      })
  },

  'finOrCreateClient': function(data){
    return new Promise(function(resolve, reject){
      Client.findOrCreate(data , function(err, response){
        if(err){
          reject(err);
        }else{
          resolve(response);
        }
      });
    });
  },

  'addRecharge': function (id, data) {
    return new Promise(function(resolve, reject){
      Recharge.create({recharge_value: data.value, currency: data.currency, client: id} , function(err, response){
        if(err){
          reject(err);
        }else{
          resolve(response);
        }
      });
    });
  }
};

