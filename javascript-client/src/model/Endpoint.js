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
    define(['ApiClient', 'model/EndpointLinks', 'model/EndpointProperties', 'model/EntityReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EndpointLinks'), require('./EndpointProperties'), require('./EntityReference'));
  } else {
    // Browser globals (root is window)
    if (!root.SpeechToTextApiV30) {
      root.SpeechToTextApiV30 = {};
    }
    root.SpeechToTextApiV30.Endpoint = factory(root.SpeechToTextApiV30.ApiClient, root.SpeechToTextApiV30.EndpointLinks, root.SpeechToTextApiV30.EndpointProperties, root.SpeechToTextApiV30.EntityReference);
  }
}(this, function(ApiClient, EndpointLinks, EndpointProperties, EntityReference) {
  'use strict';

  /**
   * The Endpoint model module.
   * @module model/Endpoint
   * @version v3.0
   */

  /**
   * Constructs a new <code>Endpoint</code>.
   * @alias module:model/Endpoint
   * @class
   * @param displayName {String} The display name of the object.
   * @param locale {String} The locale of the contained data.
   */
  var exports = function(displayName, locale) {
    this.displayName = displayName;
    this.locale = locale;
  };

  /**
   * Constructs a <code>Endpoint</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Endpoint} obj Optional instance to populate.
   * @return {module:model/Endpoint} The populated <code>Endpoint</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('project'))
        obj.project = EntityReference.constructFromObject(data['project']);
      if (data.hasOwnProperty('links'))
        obj.links = EndpointLinks.constructFromObject(data['links']);
      if (data.hasOwnProperty('properties'))
        obj.properties = EndpointProperties.constructFromObject(data['properties']);
      if (data.hasOwnProperty('self'))
        obj.self = ApiClient.convertToType(data['self'], 'String');
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
      if (data.hasOwnProperty('model'))
        obj.model = EntityReference.constructFromObject(data['model']);
      if (data.hasOwnProperty('locale'))
        obj.locale = ApiClient.convertToType(data['locale'], 'String');
      if (data.hasOwnProperty('customProperties'))
        obj.customProperties = ApiClient.convertToType(data['customProperties'], {'String': 'String'});
      if (data.hasOwnProperty('lastActionDateTime'))
        obj.lastActionDateTime = ApiClient.convertToType(data['lastActionDateTime'], 'Date');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('createdDateTime'))
        obj.createdDateTime = ApiClient.convertToType(data['createdDateTime'], 'Date');
    }
    return obj;
  }

  /**
   * The project, the endpoint is associated with.
   * @member {module:model/EntityReference} project
   */
  exports.prototype.project = undefined;

  /**
   * The links for additional actions or content related to this dataset.
   * @member {module:model/EndpointLinks} links
   */
  exports.prototype.links = undefined;

  /**
   * Additional configuration options when creating a new endpoint and additional metadata provided by the service.
   * @member {module:model/EndpointProperties} properties
   */
  exports.prototype.properties = undefined;

  /**
   * The location of this entity.
   * @member {String} self
   */
  exports.prototype.self = undefined;

  /**
   * The display name of the object.
   * @member {String} displayName
   */
  exports.prototype.displayName = undefined;

  /**
   * The description of the object.
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * The text used to adapt a language model for this endpoint.
   * @member {String} text
   */
  exports.prototype.text = undefined;

  /**
   * Information about the deployed model.
   * @member {module:model/EntityReference} model
   */
  exports.prototype.model = undefined;

  /**
   * The locale of the contained data.
   * @member {String} locale
   */
  exports.prototype.locale = undefined;

  /**
   * The custom properties of this entity. The maximum allowed key length is 64 characters, the maximum  allowed value length is 256 characters and the count of allowed entries is 10.
   * @member {Object.<String, String>} customProperties
   */
  exports.prototype.customProperties = undefined;

  /**
   * The time-stamp when the current status was entered.  The time stamp is encoded as ISO 8601 date and time format  (\"YYYY-MM-DDThh:mm:ssZ\", see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations).
   * @member {Date} lastActionDateTime
   */
  exports.prototype.lastActionDateTime = undefined;

  /**
   * The status of the object.
   * @member {module:model/Endpoint.StatusEnum} status
   */
  exports.prototype.status = undefined;

  /**
   * The time-stamp when the object was created.  The time stamp is encoded as ISO 8601 date and time format  (\"YYYY-MM-DDThh:mm:ssZ\", see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations).
   * @member {Date} createdDateTime
   */
  exports.prototype.createdDateTime = undefined;



  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "NotStarted"
     * @const
     */
    notStarted: "NotStarted",

    /**
     * value: "Running"
     * @const
     */
    running: "Running",

    /**
     * value: "Succeeded"
     * @const
     */
    succeeded: "Succeeded",

    /**
     * value: "Failed"
     * @const
     */
    failed: "Failed"
  };

  return exports;

}));
