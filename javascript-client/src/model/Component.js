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
    root.SpeechToTextApiV30.Component = factory(root.SpeechToTextApiV30.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Component model module.
   * @module model/Component
   * @version v3.0
   */

  /**
   * Constructs a new <code>Component</code>.
   * @alias module:model/Component
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Component</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Component} obj Optional instance to populate.
   * @return {module:model/Component} The populated <code>Component</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }

  /**
   * Additional messages about the current service health.
   * @member {String} message
   */
  exports.prototype.message = undefined;

  /**
   * The name of the component.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The health status of this component.
   * @member {module:model/Component.StatusEnum} status
   */
  exports.prototype.status = undefined;

  /**
   * The type of this component.
   * @member {String} type
   */
  exports.prototype.type = undefined;



  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "Healthy"
     * @const
     */
    healthy: "Healthy",

    /**
     * value: "Sick"
     * @const
     */
    sick: "Sick",

    /**
     * value: "Error"
     * @const
     */
    error: "Error"
  };

  return exports;

}));