/**
 * ClientApiController
 *
 * @description :: Server-side logic for managing Clientapis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  'createClientApi': function(req, res){
    ConfigService.create(req.body , function(err, link){
      if(err){
        return res.AppResponse(400, 'USER_ALREADY_EXISTS', err);
      }else{
        return res.AppResponse(200, 'USER_ALREADY_EXISTS', link);
      }
    });
  },
};

