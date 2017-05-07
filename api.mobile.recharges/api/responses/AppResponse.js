/**
 * App response Handler
 *
 * Usage:
 * return res.AppResponse(response_type, response_code, object);
 *
 */

module.exports = function AppResponse (status, responseCode, data ) {
  "use strict";
  var res = this.res;
  var response = {'status': null, 'responseCode': null, 'data': null };
  response.status = status;
  if( sails.config.constants.response.hasOwnProperty(responseCode)){
    response.responseCode = sails.config.constants.response[responseCode];
  }
  if(data){
    response.data = data;
  }

  res.status(status);
  return res.json(response);

};

