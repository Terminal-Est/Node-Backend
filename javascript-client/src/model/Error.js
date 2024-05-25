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
    define(['ApiClient', 'model/Error', 'model/InnerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Error'), require('./InnerError'));
  } else {
    // Browser globals (root is window)
    if (!root.SpeechToTextApiV30) {
      root.SpeechToTextApiV30 = {};
    }
    root.SpeechToTextApiV30.Error = factory(root.SpeechToTextApiV30.ApiClient, root.SpeechToTextApiV30.Error, root.SpeechToTextApiV30.InnerError);
  }
}(this, function(ApiClient, Error, InnerError) {
  'use strict';

  /**
   * The Error model module.
   * @module model/Error
   * @version v3.0
   */

  /**
   * Constructs a new <code>Error</code>.
   * @alias module:model/Error
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Error} obj Optional instance to populate.
   * @return {module:model/Error} The populated <code>Error</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('details'))
        obj.details = ApiClient.convertToType(data['details'], [Error]);
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('target'))
        obj.target = ApiClient.convertToType(data['target'], 'String');
      if (data.hasOwnProperty('innerError'))
        obj.innerError = InnerError.constructFromObject(data['innerError']);
    }
    return obj;
  }

  /**
   * @member {module:model/Error.CodeEnum} code
   */
  exports.prototype.code = undefined;

  /**
   * @member {Array.<module:model/Error>} details
   */
  exports.prototype.details = undefined;

  /**
   * @member {String} message
   */
  exports.prototype.message = undefined;

  /**
   * @member {String} target
   */
  exports.prototype.target = undefined;

  /**
   * @member {module:model/InnerError} innerError
   */
  exports.prototype.innerError = undefined;



  /**
   * Allowed values for the <code>code</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CodeEnum = {
    /**
     * value: "InvalidRequest"
     * @const
     */
    invalidRequest: "InvalidRequest",

    /**
     * value: "InvalidArgument"
     * @const
     */
    invalidArgument: "InvalidArgument",

    /**
     * value: "InternalServerError"
     * @const
     */
    internalServerError: "InternalServerError",

    /**
     * value: "ServiceUnavailable"
     * @const
     */
    serviceUnavailable: "ServiceUnavailable",

    /**
     * value: "NotFound"
     * @const
     */
    notFound: "NotFound",

    /**
     * value: "PipelineError"
     * @const
     */
    pipelineError: "PipelineError",

    /**
     * value: "Conflict"
     * @const
     */
    conflict: "Conflict",

    /**
     * value: "InternalCommunicationFailed"
     * @const
     */
    internalCommunicationFailed: "InternalCommunicationFailed",

    /**
     * value: "Forbidden"
     * @const
     */
    forbidden: "Forbidden",

    /**
     * value: "NotAllowed"
     * @const
     */
    notAllowed: "NotAllowed",

    /**
     * value: "Unauthorized"
     * @const
     */
    unauthorized: "Unauthorized",

    /**
     * value: "UnsupportedMediaType"
     * @const
     */
    unsupportedMediaType: "UnsupportedMediaType",

    /**
     * value: "TooManyRequests"
     * @const
     */
    tooManyRequests: "TooManyRequests"
  };

  return exports;

}));