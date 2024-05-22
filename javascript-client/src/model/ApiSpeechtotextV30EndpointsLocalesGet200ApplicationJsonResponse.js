/*
 * Speech to Text API v3.0
 * Speech to Text API v3.0.
 *
 * OpenAPI spec version: v3.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.41
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SpeechToTextApiV30) {
      root.SpeechToTextApiV30 = {};
    }
    root.SpeechToTextApiV30.ApiSpeechtotextV30EndpointsLocalesGet200ApplicationJsonResponse = factory(root.SpeechToTextApiV30.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ApiSpeechtotextV30EndpointsLocalesGet200ApplicationJsonResponse model module.
   * @module model/ApiSpeechtotextV30EndpointsLocalesGet200ApplicationJsonResponse
   * @version v3.0
   */

  /**
   * Constructs a new <code>ApiSpeechtotextV30EndpointsLocalesGet200ApplicationJsonResponse</code>.
   * @alias module:model/ApiSpeechtotextV30EndpointsLocalesGet200ApplicationJsonResponse
   * @class
   * @extends Array
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ApiSpeechtotextV30EndpointsLocalesGet200ApplicationJsonResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiSpeechtotextV30EndpointsLocalesGet200ApplicationJsonResponse} obj Optional instance to populate.
   * @return {module:model/ApiSpeechtotextV30EndpointsLocalesGet200ApplicationJsonResponse} The populated <code>ApiSpeechtotextV30EndpointsLocalesGet200ApplicationJsonResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'String');
    }
    return obj;
  }

  Object.setPrototypeOf(exports.prototype, new Array());

  return exports;

}));
