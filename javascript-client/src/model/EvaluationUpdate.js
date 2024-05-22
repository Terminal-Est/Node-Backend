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
    define(['ApiClient', 'model/EntityReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EntityReference'));
  } else {
    // Browser globals (root is window)
    if (!root.SpeechToTextApiV30) {
      root.SpeechToTextApiV30 = {};
    }
    root.SpeechToTextApiV30.EvaluationUpdate = factory(root.SpeechToTextApiV30.ApiClient, root.SpeechToTextApiV30.EntityReference);
  }
}(this, function(ApiClient, EntityReference) {
  'use strict';

  /**
   * The EvaluationUpdate model module.
   * @module model/EvaluationUpdate
   * @version v3.0
   */

  /**
   * Constructs a new <code>EvaluationUpdate</code>.
   * @alias module:model/EvaluationUpdate
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EvaluationUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EvaluationUpdate} obj Optional instance to populate.
   * @return {module:model/EvaluationUpdate} The populated <code>EvaluationUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('project'))
        obj.project = EntityReference.constructFromObject(data['project']);
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('customProperties'))
        obj.customProperties = ApiClient.convertToType(data['customProperties'], {'String': 'String'});
    }
    return obj;
  }

  /**
   * The project, the entity is associated with.
   * @member {module:model/EntityReference} project
   */
  exports.prototype.project = undefined;

  /**
   * The name of the object.
   * @member {String} displayName
   */
  exports.prototype.displayName = undefined;

  /**
   * The description of the object.
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * The custom properties of this entity. The maximum allowed key length is 64 characters, the maximum  allowed value length is 256 characters and the count of allowed entries is 10.
   * @member {Object.<String, String>} customProperties
   */
  exports.prototype.customProperties = undefined;


  return exports;

}));
