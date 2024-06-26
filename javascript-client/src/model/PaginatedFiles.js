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
    root.SpeechToTextApiV30.PaginatedFiles = factory(root.SpeechToTextApiV30.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PaginatedFiles model module.
   * @module model/PaginatedFiles
   * @version v3.0
   */

  /**
   * Constructs a new <code>PaginatedFiles</code>.
   * @alias module:model/PaginatedFiles
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PaginatedFiles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaginatedFiles} obj Optional instance to populate.
   * @return {module:model/PaginatedFiles} The populated <code>PaginatedFiles</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('values'))
        obj.values = ApiClient.convertToType(data['values'], ['File']);
      if (data.hasOwnProperty('@nextLink'))
        obj.nextLink = ApiClient.convertToType(data['@nextLink'], 'String');
    }
    return obj;
  }

  /**
   * A list of entities limited by either the passed query parameters 'skip' and 'top' or their default values.                When iterating through a list using pagination and deleting entities in parallel, some entities will be skipped in the results.  It's recommended to build a list on the client and delete after the fetching of the complete list.
   * @member {Array.<File>} values
   */
  exports.prototype.values = undefined;

  /**
   * A link to the next set of paginated results if there are more entities available; otherwise null.
   * @member {String} nextLink
   */
  exports.prototype.nextLink = undefined;


  return exports;

}));
