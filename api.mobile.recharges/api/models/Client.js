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
      type: 'integer'
    }
  }
};

