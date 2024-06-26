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
    root.SpeechToTextApiV30.InternalModel = factory(root.SpeechToTextApiV30.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InternalModel model module.
   * @module model/InternalModel
   * @version v3.0
   */

  /**
   * Constructs a new <code>InternalModel</code>.
   * @alias module:model/InternalModel
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InternalModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InternalModel} obj Optional instance to populate.
   * @return {module:model/InternalModel} The populated <code>InternalModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('storagePrefix'))
        obj.storagePrefix = ApiClient.convertToType(data['storagePrefix'], 'String');
      if (data.hasOwnProperty('self'))
        obj.self = ApiClient.convertToType(data['self'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} storagePrefix
   */
  exports.prototype.storagePrefix = undefined;

  /**
   * The location of this entity.
   * @member {String} self
   */
  exports.prototype.self = undefined;


  return exports;

}));
