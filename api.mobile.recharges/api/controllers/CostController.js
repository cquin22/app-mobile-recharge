/**
 * CostController
 *
 * @description :: Server-side logic end points of the CRUD costs
 * @author:: Cristian Quintero <cristianqr22@gmail.com>
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


var CostController = {

  /**
   * @sailsdoc
   *
   * @description Create cost
   * @returns {Object} AppResponse.
  */
  'create': function(req, res){
    Cost.create(req.body , function(err, cost){
      if(err){
        return res.AppResponse(400, sails.config.constants.response.UNEXPECTED_ERROR, err);
      }else{
        return res.AppResponse(200, sails.config.constants.response.COST_CREATE_SUCCESS, cost);
      }
    });
  },

  /**
   * @sailsdoc
   *
   * @description Required cost
   * @returns {Object} AppResponse.
  */
  'get': function(req, res){
    Cost.find({type: 'costBySeconds'}, function(err, cost){
      if(err){
        return res.AppResponse(400, sails.config.constants.response.UNEXPECTED_ERROR, err);
      }else{
        return res.AppResponse(200, sails.config.constants.response.COST_REQUIRED_SUCCESS, cost);
      }
    });
  },

  /**
   * @sailsdoc
   *
   * @description Update cost
   * @returns {Object} AppResponse.
  */
  'update': function(req, res){
    Cost.find({type: 'costBySeconds'} , function(err, cost){
      if(err){
        return res.AppResponse(400, sails.config.constants.response.UNEXPECTED_ERROR, err);
      }else{
        cost[0].value = req.body.value;
        cost[0].save(function(){
          if(err){
            return res.AppResponse(400, sails.config.constants.response.UNEXPECTED_ERROR, err);
          }else{
            return res.AppResponse(200, sails.config.constants.response.COST_UPDATED_SUCCESS, cost);
          }
        })
      }
    });
  },
};

module.exports = CostController;

