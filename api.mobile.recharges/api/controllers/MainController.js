/**
 * MainController
 *
 * @description :: Server-side logic end points of the main application
 * @author:: Cristian Quintero <cristianqr22@gmail.com>
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

/**
 * Require te bluebird instance
 */
const Promise = require("bluebird");

/**
 * Global client configuration object
*/
var clientConfig = {client: null, recharge: null, expense: null};

var MainController =  {

  /**
   * @sailsdoc method
   *
   * @description Create new client and recharge
   * @returns {Object} AppResponse.
  */
  'setClientAndRecharge': function(req, res){
    clientConfig.client = req.body.client;
    clientConfig.recharge = req.body.recharge;
    MainController.findOrCreateClient(clientConfig.client)
      .then(function(){ return MainController.createRecharge()})
      .then(function(){ return MainController.calculateBalanceOrTime('RECHARGE')})
      .then(function(){
        clientConfig.client.save(function(error){
          if(error){
            return res.AppResponse(400, sails.config.constants.response.CUSTOMER_UPDATE_ERROR, error);
          }else{
            delete clientConfig.expense;
            return res.AppResponse(200, sails.config.constants.response.RECHARGE_CREATED_SUCCESS, clientConfig);
          }
        });

      })
      .catch(function(error){
        return res.AppResponse(400, sails.config.constants.response.UNEXPECTED_ERROR, error);
      })
  },

  /**
   * @sailsdoc method
   *
   * @description:: Find or create client
   * @param:: {Object} dataClient --> // clientConfig.client
   * @returns:: {Promise}.
  */
  "findOrCreateClient": function(dataClient){
    return new Promise(function(resolve, reject){
      Client.findOrCreate(dataClient , function(error, client){
        if(error){
          reject(error);
        }else{
          clientConfig.client = client;
          resolve();
        }
      });
    });
  },

  /**
   * @sailsdoc method
   *
   * @description Create recharge
   * @returns {Promise}.
  */
  "createRecharge": function () {
    return new Promise(function(resolve, reject){
      Recharge.create({recharge_value: clientConfig.recharge.value, currency: clientConfig.recharge.currency, client: clientConfig.client.phone} , function(error, recharge){
        if(error){
          reject(error);
        }else{
          clientConfig.recharge = recharge;
          resolve();
        }
      });
    });
  },

  /**
   * @sailsdoc method
   *
   * @description Calculate balance or time
   * @param:: {String} type --> // 'RECHARGE' or 'EXPENSE'
   * @returns {Promise}.
  */
  "calculateBalanceOrTime": function(type){
    return new Promise(function(resolve, reject){
      Cost.find({type: 'costBySeconds'}, function(error, cost){
        if(error){
          reject(error)
        }else{
          switch (type) {
            case 'RECHARGE':
              clientConfig.client.money_balance = clientConfig.client.money_balance + clientConfig.recharge.recharge_value;
              clientConfig.client.time_left = clientConfig.client.money_balance * 1 / cost[0].value;
              break;
            case 'EXPENSE':
              clientConfig.client.time_left = clientConfig.client.time_left - clientConfig.expense.time;
              if(clientConfig.client.time_left > 0){
                clientConfig.client.money_balance = clientConfig.client.money_balance - (clientConfig.expense.time * cost[0].value);
              }else{
                clientConfig.client.money_balance = 0;
              }
              break;
          }
          resolve();
        }
      });
    });
  },

  /**
   * @sailsdoc method
   *
   * @description Create new expense of client
   * @returns {Object} AppResponse.
  */
  'setExpense': function(req, res){
    clientConfig.client = req.body.client;
    clientConfig.expense = req.body.expense;
    clientConfig.expense.client = req.body.client.phone;
    MainController.findOrCreateClient(clientConfig.client)
      .then(function () {return MainController.createExpense() })
      .then(function(){ return MainController.calculateBalanceOrTime('EXPENSE')})
      .then(function () {
        clientConfig.client.save(function(error){
          if(error){
            return res.AppResponse(400, sails.config.constants.response.CUSTOMER_UPDATE_ERROR, error);
          }else{
            delete clientConfig.recharge;
            return res.AppResponse(200, sails.config.constants.response.EXPENSE_CREATED_SUCCESS, clientConfig);
          }
        });
      })
  },

  /**
   * @sailsdoc method
   *
   * @description Create expense
   * @returns {Promise}.
  */
  "createExpense": function () {
    return new Promise(function(resolve, reject){
      Expense.create(clientConfig.expense , function(error, expense){
        if(error){
          reject(error);
        }else{
          clientConfig.expense = expense;
          resolve();
        }
      });
    });

  },
};


module.exports = MainController;

