/**
 * Expense.js
 *
 * @author: Cristian Quintero <cristianqr22@gmail.com>
 * @description :: This model represent the Expense
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
**/

module.exports = {

  attributes: {
    time: {
      type: 'integer'
    },
    client: {
      model: 'client'
    }
  }
};

