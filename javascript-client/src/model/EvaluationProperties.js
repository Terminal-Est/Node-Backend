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
    define(['ApiClient', 'model/EntityError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EntityError'));
  } else {
    // Browser globals (root is window)
    if (!root.SpeechToTextApiV30) {
      root.SpeechToTextApiV30 = {};
    }
    root.SpeechToTextApiV30.EvaluationProperties = factory(root.SpeechToTextApiV30.ApiClient, root.SpeechToTextApiV30.EntityError);
  }
}(this, function(ApiClient, EntityError) {
  'use strict';

  /**
   * The EvaluationProperties model module.
   * @module model/EvaluationProperties
   * @version v3.0
   */

  /**
   * Constructs a new <code>EvaluationProperties</code>.
   * @alias module:model/EvaluationProperties
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EvaluationProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EvaluationProperties} obj Optional instance to populate.
   * @return {module:model/EvaluationProperties} The populated <code>EvaluationProperties</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('wordErrorRate2'))
        obj.wordErrorRate2 = ApiClient.convertToType(data['wordErrorRate2'], 'Number');
      if (data.hasOwnProperty('wordErrorRate1'))
        obj.wordErrorRate1 = ApiClient.convertToType(data['wordErrorRate1'], 'Number');
      if (data.hasOwnProperty('sentenceErrorRate2'))
        obj.sentenceErrorRate2 = ApiClient.convertToType(data['sentenceErrorRate2'], 'Number');
      if (data.hasOwnProperty('sentenceCount2'))
        obj.sentenceCount2 = ApiClient.convertToType(data['sentenceCount2'], 'Number');
      if (data.hasOwnProperty('wordCount2'))
        obj.wordCount2 = ApiClient.convertToType(data['wordCount2'], 'Number');
      if (data.hasOwnProperty('correctWordCount2'))
        obj.correctWordCount2 = ApiClient.convertToType(data['correctWordCount2'], 'Number');
      if (data.hasOwnProperty('wordSubstitutionCount2'))
        obj.wordSubstitutionCount2 = ApiClient.convertToType(data['wordSubstitutionCount2'], 'Number');
      if (data.hasOwnProperty('wordDeletionCount2'))
        obj.wordDeletionCount2 = ApiClient.convertToType(data['wordDeletionCount2'], 'Number');
      if (data.hasOwnProperty('wordInsertionCount2'))
        obj.wordInsertionCount2 = ApiClient.convertToType(data['wordInsertionCount2'], 'Number');
      if (data.hasOwnProperty('sentenceErrorRate1'))
        obj.sentenceErrorRate1 = ApiClient.convertToType(data['sentenceErrorRate1'], 'Number');
      if (data.hasOwnProperty('sentenceCount1'))
        obj.sentenceCount1 = ApiClient.convertToType(data['sentenceCount1'], 'Number');
      if (data.hasOwnProperty('wordCount1'))
        obj.wordCount1 = ApiClient.convertToType(data['wordCount1'], 'Number');
      if (data.hasOwnProperty('correctWordCount1'))
        obj.correctWordCount1 = ApiClient.convertToType(data['correctWordCount1'], 'Number');
      if (data.hasOwnProperty('wordSubstitutionCount1'))
        obj.wordSubstitutionCount1 = ApiClient.convertToType(data['wordSubstitutionCount1'], 'Number');
      if (data.hasOwnProperty('wordDeletionCount1'))
        obj.wordDeletionCount1 = ApiClient.convertToType(data['wordDeletionCount1'], 'Number');
      if (data.hasOwnProperty('wordInsertionCount1'))
        obj.wordInsertionCount1 = ApiClient.convertToType(data['wordInsertionCount1'], 'Number');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('error'))
        obj.error = EntityError.constructFromObject(data['error']);
    }
    return obj;
  }

  /**
   * The word error rate of recognition with model2.
   * @member {Number} wordErrorRate2
   */
  exports.prototype.wordErrorRate2 = undefined;

  /**
   * The word error rate of recognition with model1.
   * @member {Number} wordErrorRate1
   */
  exports.prototype.wordErrorRate1 = undefined;

  /**
   * The sentence error rate of recognition with model2.
   * @member {Number} sentenceErrorRate2
   */
  exports.prototype.sentenceErrorRate2 = undefined;

  /**
   * The number of processed sentences by model2.
   * @member {Number} sentenceCount2
   */
  exports.prototype.sentenceCount2 = undefined;

  /**
   * The number of processed words by model2.
   * @member {Number} wordCount2
   */
  exports.prototype.wordCount2 = undefined;

  /**
   * The number of correctly recognized words by model2.
   * @member {Number} correctWordCount2
   */
  exports.prototype.correctWordCount2 = undefined;

  /**
   * The number of recognized words by model2, that are substitutions.
   * @member {Number} wordSubstitutionCount2
   */
  exports.prototype.wordSubstitutionCount2 = undefined;

  /**
   * The number of recognized words by model2, that are deletions.
   * @member {Number} wordDeletionCount2
   */
  exports.prototype.wordDeletionCount2 = undefined;

  /**
   * The number of recognized words by model2, that are insertions.
   * @member {Number} wordInsertionCount2
   */
  exports.prototype.wordInsertionCount2 = undefined;

  /**
   * The sentence error rate of recognition with model1.
   * @member {Number} sentenceErrorRate1
   */
  exports.prototype.sentenceErrorRate1 = undefined;

  /**
   * The number of processed sentences by model1.
   * @member {Number} sentenceCount1
   */
  exports.prototype.sentenceCount1 = undefined;

  /**
   * The number of processed words by model1.
   * @member {Number} wordCount1
   */
  exports.prototype.wordCount1 = undefined;

  /**
   * The number of correctly recognized words by model1.
   * @member {Number} correctWordCount1
   */
  exports.prototype.correctWordCount1 = undefined;

  /**
   * The number of recognized words by model1, that are substitutions.
   * @member {Number} wordSubstitutionCount1
   */
  exports.prototype.wordSubstitutionCount1 = undefined;

  /**
   * The number of recognized words by model1, that are deletions.
   * @member {Number} wordDeletionCount1
   */
  exports.prototype.wordDeletionCount1 = undefined;

  /**
   * The number of recognized words by model1, that are insertions.
   * @member {Number} wordInsertionCount1
   */
  exports.prototype.wordInsertionCount1 = undefined;

  /**
   * The email address to send email notifications to in case the operation completes.  The value will be removed after successfully sending the email.
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * The details of the error in case the entity is in a failed state.
   * @member {module:model/EntityError} error
   */
  exports.prototype.error = undefined;


  return exports;

}));
