/**
 * User response Handler
 *
 * Usage:
 * return res.forbidden();
 * return res.forbidden(err);
 * return res.forbidden(err, 'some/specific/forbidden/view');
 * ```
 */
var responses = {
  //200
  INIT_CONFIG_OK: "INIT_CONFIG_OK",
  USER_CREATED_SUCCESSFULLY: "USER_CREATED_SUCCESSFULLY",
  SATISFACTORY_LOGIN : "SATISFACTORY_LOGIN",
  SATISFACTORY_LOGOUT : "SATISFACTORY_LOGOUT",
  UPDATE_SUCCESSFULLY : "UPDATE_SUCCESSFULLY"

};


module.exports = function AppResponse (status, msg, data ) {
  "use strict";
  var res = this.res;
  var response = {'status': null, 'msg': null, 'data': null };
  response.status = status;
  if(responses.hasOwnProperty(msg)){
    response.msg = responses[msg];
  }
  if(data){
    response.data = data;
  }

  res.status(status);
  return res.json(response);

};

