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
    define(['ApiClient', 'model/ErrorDetail', 'model/InnerErrorV2'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetail'), require('./InnerErrorV2'));
  } else {
    // Browser globals (root is window)
    if (!root.SpeechToTextApiV30) {
      root.SpeechToTextApiV30 = {};
    }
    root.SpeechToTextApiV30.ErrorContent = factory(root.SpeechToTextApiV30.ApiClient, root.SpeechToTextApiV30.ErrorDetail, root.SpeechToTextApiV30.InnerErrorV2);
  }
}(this, function(ApiClient, ErrorDetail, InnerErrorV2) {
  'use strict';

  /**
   * The ErrorContent model module.
   * @module model/ErrorContent
   * @version v3.0
   */

  /**
   * Constructs a new <code>ErrorContent</code>.
   * The interface represents the content of an error response defined in the OneAPI v2.1 documentation.
   * @alias module:model/ErrorContent
   * @class
   * @param code {String} A service-defined error code that should be human-readable.  This code serves as a more specific indicator of the error than  the HTTP error code specified in the response.
   * @param message {String} A human-readable representation of the error. It is intended as  an aid to developers and is not suitable for exposure to end users.
   */
  var exports = function(code, message) {
    this.code = code;
    this.message = message;
  };

  /**
   * Constructs a <code>ErrorContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorContent} obj Optional instance to populate.
   * @return {module:model/ErrorContent} The populated <code>ErrorContent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('details'))
        obj.details = ApiClient.convertToType(data['details'], [ErrorDetail]);
      if (data.hasOwnProperty('innererror'))
        obj.innererror = InnerErrorV2.constructFromObject(data['innererror']);
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('target'))
        obj.target = ApiClient.convertToType(data['target'], 'String');
    }
    return obj;
  }

  /**
   * An array of details representing distinct related errors that occured during the request.
   * @member {Array.<module:model/ErrorDetail>} details
   */
  exports.prototype.details = undefined;

  /**
   * The stack trace of the error. The payload is service-defined.  If the error is not at the root level, the object contains a Code  and an InnerError property.
   * @member {module:model/InnerErrorV2} innererror
   */
  exports.prototype.innererror = undefined;

  /**
   * A service-defined error code that should be human-readable.  This code serves as a more specific indicator of the error than  the HTTP error code specified in the response.
   * @member {String} code
   */
  exports.prototype.code = undefined;

  /**
   * A human-readable representation of the error. It is intended as  an aid to developers and is not suitable for exposure to end users.
   * @member {String} message
   */
  exports.prototype.message = undefined;

  /**
   * The target of the particular error (e.g., the name of the property in error).
   * @member {String} target
   */
  exports.prototype.target = undefined;


  return exports;

}));
