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
    root.SpeechToTextApiV30.WebHookLinks = factory(root.SpeechToTextApiV30.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The WebHookLinks model module.
   * @module model/WebHookLinks
   * @version v3.0
   */

  /**
   * Constructs a new <code>WebHookLinks</code>.
   * @alias module:model/WebHookLinks
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>WebHookLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebHookLinks} obj Optional instance to populate.
   * @return {module:model/WebHookLinks} The populated <code>WebHookLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ping'))
        obj.ping = ApiClient.convertToType(data['ping'], 'String');
      if (data.hasOwnProperty('test'))
        obj.test = ApiClient.convertToType(data['test'], 'String');
    }
    return obj;
  }

  /**
   * The URL that can be used to trigger the sending of a ping event to the registered URL of a web hook registration.
   * @member {String} ping
   */
  exports.prototype.ping = undefined;

  /**
   * The URL that can be used sending test events to the registered URL of a web hook registration.
   * @member {String} test
   */
  exports.prototype.test = undefined;


  return exports;

}));
