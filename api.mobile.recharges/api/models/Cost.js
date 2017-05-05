/**
 * User.js
 *
 * @author: Cristian Quintero <cristianqr22@gmail.com>
 * @description :: This model represent the Client
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    type: {
      type: 'string',
      defaultsTo: 'costBySeconds',
      unique: true
    },
    value: {
      type: 'integer',
      defaultsTo: 50
    }
  }
};

