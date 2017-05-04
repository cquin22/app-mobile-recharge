/**
 * ClientApiController
 *
 * @description :: Server-side logic for managing Clientapis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  'create': function(req, res){
    Client.create(req.body , function(err, response){
      if(err){
        return res.AppResponse(400, 'USER_CREATED_SUCCESSFULLY', err);
      }else{
        return res.AppResponse(200, 'UPDATE_SUCCESSFULLY', response);
      }
    });
  },
};

