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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SpeechToTextApiV30);
  }
}(this, function(expect, SpeechToTextApiV30) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('InternalModel', function() {
      beforeEach(function() {
        instance = new SpeechToTextApiV30.InternalModel();
      });

      it('should create an instance of InternalModel', function() {
        // TODO: update the code to test InternalModel
        expect(instance).to.be.a(SpeechToTextApiV30.InternalModel);
      });

      it('should have the property storagePrefix (base name: "storagePrefix")', function() {
        // TODO: update the code to test the property storagePrefix
        expect(instance).to.have.property('storagePrefix');
        // expect(instance.storagePrefix).to.be(expectedValueLiteral);
      });

      it('should have the property self (base name: "self")', function() {
        // TODO: update the code to test the property self
        expect(instance).to.have.property('self');
        // expect(instance.self).to.be(expectedValueLiteral);
      });

    });
  });

}));
