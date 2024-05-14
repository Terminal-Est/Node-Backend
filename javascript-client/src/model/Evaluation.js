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
    define(['ApiClient', 'model/EntityReference', 'model/EvaluationProperties', 'model/Links'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EntityReference'), require('./EvaluationProperties'), require('./Links'));
  } else {
    // Browser globals (root is window)
    if (!root.SpeechToTextApiV30) {
      root.SpeechToTextApiV30 = {};
    }
    root.SpeechToTextApiV30.Evaluation = factory(root.SpeechToTextApiV30.ApiClient, root.SpeechToTextApiV30.EntityReference, root.SpeechToTextApiV30.EvaluationProperties, root.SpeechToTextApiV30.Links);
  }
}(this, function(ApiClient, EntityReference, EvaluationProperties, Links) {
  'use strict';

  /**
   * The Evaluation model module.
   * @module model/Evaluation
   * @version v3.0
   */

  /**
   * Constructs a new <code>Evaluation</code>.
   * @alias module:model/Evaluation
   * @class
   * @param model1 {module:model/EntityReference} The first model that can be used to evaluate the improvements and differences.
   * @param model2 {module:model/EntityReference} The second model that can be used to evaluate the improvements and differences.
   * @param dataset {module:model/EntityReference} Information about the dataset used in the evaluation.
   * @param displayName {String} The display name of the object.
   * @param locale {String} The locale of the contained data.
   */
  var exports = function(model1, model2, dataset, displayName, locale) {
    this.model1 = model1;
    this.model2 = model2;
    this.dataset = dataset;
    this.displayName = displayName;
    this.locale = locale;
  };

  /**
   * Constructs a <code>Evaluation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Evaluation} obj Optional instance to populate.
   * @return {module:model/Evaluation} The populated <code>Evaluation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('model1'))
        obj.model1 = EntityReference.constructFromObject(data['model1']);
      if (data.hasOwnProperty('model2'))
        obj.model2 = EntityReference.constructFromObject(data['model2']);
      if (data.hasOwnProperty('transcription1'))
        obj.transcription1 = EntityReference.constructFromObject(data['transcription1']);
      if (data.hasOwnProperty('transcription2'))
        obj.transcription2 = EntityReference.constructFromObject(data['transcription2']);
      if (data.hasOwnProperty('dataset'))
        obj.dataset = EntityReference.constructFromObject(data['dataset']);
      if (data.hasOwnProperty('links'))
        obj.links = Links.constructFromObject(data['links']);
      if (data.hasOwnProperty('properties'))
        obj.properties = EvaluationProperties.constructFromObject(data['properties']);
      if (data.hasOwnProperty('project'))
        obj.project = EntityReference.constructFromObject(data['project']);
      if (data.hasOwnProperty('self'))
        obj.self = ApiClient.convertToType(data['self'], 'String');
      if (data.hasOwnProperty('lastActionDateTime'))
        obj.lastActionDateTime = ApiClient.convertToType(data['lastActionDateTime'], 'Date');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('createdDateTime'))
        obj.createdDateTime = ApiClient.convertToType(data['createdDateTime'], 'Date');
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('customProperties'))
        obj.customProperties = ApiClient.convertToType(data['customProperties'], {'String': 'String'});
      if (data.hasOwnProperty('locale'))
        obj.locale = ApiClient.convertToType(data['locale'], 'String');
    }
    return obj;
  }

  /**
   * The first model that can be used to evaluate the improvements and differences.
   * @member {module:model/EntityReference} model1
   */
  exports.prototype.model1 = undefined;

  /**
   * The second model that can be used to evaluate the improvements and differences.
   * @member {module:model/EntityReference} model2
   */
  exports.prototype.model2 = undefined;

  /**
   * Information about the transcriptions used in the evaluation with model1.
   * @member {module:model/EntityReference} transcription1
   */
  exports.prototype.transcription1 = undefined;

  /**
   * Information about the transcriptions used in the evaluation with model2.
   * @member {module:model/EntityReference} transcription2
   */
  exports.prototype.transcription2 = undefined;

  /**
   * Information about the dataset used in the evaluation.
   * @member {module:model/EntityReference} dataset
   */
  exports.prototype.dataset = undefined;

  /**
   * The links for additional actions or content related to this evaluation.
   * @member {module:model/Links} links
   */
  exports.prototype.links = undefined;

  /**
   * Additional configuration options when creating a new evaluation and additional metadata provided by the service.
   * @member {module:model/EvaluationProperties} properties
   */
  exports.prototype.properties = undefined;

  /**
   * The project, the evaluation is associated with.
   * @member {module:model/EntityReference} project
   */
  exports.prototype.project = undefined;

  /**
   * The location of this entity.
   * @member {String} self
   */
  exports.prototype.self = undefined;

  /**
   * The time-stamp when the current status was entered.  The time stamp is encoded as ISO 8601 date and time format  (\"YYYY-MM-DDThh:mm:ssZ\", see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations).
   * @member {Date} lastActionDateTime
   */
  exports.prototype.lastActionDateTime = undefined;

  /**
   * The status of the object.
   * @member {module:model/Evaluation.StatusEnum} status
   */
  exports.prototype.status = undefined;

  /**
   * The time-stamp when the object was created.  The time stamp is encoded as ISO 8601 date and time format  (\"YYYY-MM-DDThh:mm:ssZ\", see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations).
   * @member {Date} createdDateTime
   */
  exports.prototype.createdDateTime = undefined;

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
   * The custom properties of this entity. The maximum allowed key length is 64 characters, the maximum  allowed value length is 256 characters and the count of allowed entries is 10.
   * @member {Object.<String, String>} customProperties
   */
  exports.prototype.customProperties = undefined;

  /**
   * The locale of the contained data.
   * @member {String} locale
   */
  exports.prototype.locale = undefined;



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
