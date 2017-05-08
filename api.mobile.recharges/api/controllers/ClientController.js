/**
 * ClientController
 *
 * @description :: Server-side logic end points of the CRUD client
 * @author:: Cristian Quintero <cristianqr22@gmail.com>
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var ClientController = {

  /**
   * @sailsdoc
   *
   * @description Get client balance
   * @returns {Object} AppResponse.
  */
  "getRecharges": function(req, res){
      var query = Client.findOne({phone: req.query.phone });
      query.then(function(){
        query.populate('recharges')
          .exec(function(error, client){
            if(error){
              return res.AppResponse(400, sails.config.constants.response.UNEXPECTED_ERROR, error);
            }else{
              if(client){
                return res.AppResponse(200, sails.config.constants.response.BALANCE_RESPONSE_SUCCESS, client);
              }else{
                return res.AppResponse(400, sails.config.constants.response.CLIENT_IS_NOT_CREATED , client);
              }
            }
          });
      });
      query.catch(function(error){
        return res.AppResponse(400, sails.config.constants.response.UNEXPECTED_ERROR, error);
      });
  },

  /**
   * @sailsdoc
   *
   * @description Get client expense
   * @returns {Object} AppResponse.
  */
  'getExpense': function(req, res){
    var query = Client.findOne({phone: req.query.phone });
    query.then(function(){
      query.populate('expense')
        .exec(function(error, client){
          if(error){
            return res.AppResponse(400, sails.config.constants.response.UNEXPECTED_ERROR, error);
          }else{
            if(client){
              return res.AppResponse(200, sails.config.constants.response.EXPENSE_RESPONSE_SUCCESS , client);
            }else{
              return res.AppResponse(400, sails.config.constants.response.CLIENT_IS_NOT_CREATED, client);
            }
          }
        });
    });
    query.catch(function(error){
      return res.AppResponse(400, sails.config.constants.response.UNEXPECTED_ERROR, error);
    });
  },
};


module.exports = ClientController;

