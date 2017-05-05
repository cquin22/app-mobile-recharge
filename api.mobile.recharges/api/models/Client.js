/**
 * User.js
 *
 * @author: Cristian Quintero <cristianqr22@gmail.com>
 * @description :: This model represent the Client
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    phone: {
      type: 'integer',
      unique: true
    },
    balance: {
      type: 'integer',
      defaultsTo: 0
    },
    time_left: {
      type: 'integer',
      defaultsTo: 0
    },
    recharges:{
      collection: 'recharge',
      via: 'client'
    }
  }
};

