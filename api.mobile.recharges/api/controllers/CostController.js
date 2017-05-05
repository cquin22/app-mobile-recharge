/**
 * ClientApiController
 *
 * @description :: Server-side logic for managing Clientapis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  'create': function(req, res){
    Cost.create(req.body , function(err, cost){
      if(err){
        return res.AppResponse(400, 'USER_CREATED_SUCCESSFULLY', err);
      }else{
        return res.AppResponse(200, 'UPDATE_SUCCESSFULLY', cost);
      }
    });
  },


  'get': function(req, res){
    Cost.find({type: 'costBySeconds'}, function(err, cost){
      if(err){
        return res.AppResponse(400, 'USER_CREATED_SUCCESSFULLY', err);
      }else{
        return res.AppResponse(200, 'UPDATE_SUCCESSFULLY', cost);
      }
    });
  },

  'update': function(req, res){
    Cost.find({type: 'costBySeconds'} , function(err, cost){
      if(err){
        return res.AppResponse(400, 'USER_CREATED_SUCCESSFULLY', err);
      }else{
        cost[0].value = req.body.value;
        cost[0].save(function(){
          if(err){
            return res.AppResponse(400, 'UNEXPECTED_ERROR', err);
          }else{
            return res.AppResponse(200, 'USER_CREATED_SUCCESSFULLY', cost);
          }
        })
      }
    });
  },
};

