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
    describe('ProjectProperties', function() {
      beforeEach(function() {
        instance = new SpeechToTextApiV30.ProjectProperties();
      });

      it('should create an instance of ProjectProperties', function() {
        // TODO: update the code to test ProjectProperties
        expect(instance).to.be.a(SpeechToTextApiV30.ProjectProperties);
      });

      it('should have the property datasetCount (base name: "datasetCount")', function() {
        // TODO: update the code to test the property datasetCount
        expect(instance).to.have.property('datasetCount');
        // expect(instance.datasetCount).to.be(expectedValueLiteral);
      });

      it('should have the property evaluationCount (base name: "evaluationCount")', function() {
        // TODO: update the code to test the property evaluationCount
        expect(instance).to.have.property('evaluationCount');
        // expect(instance.evaluationCount).to.be(expectedValueLiteral);
      });

      it('should have the property modelCount (base name: "modelCount")', function() {
        // TODO: update the code to test the property modelCount
        expect(instance).to.have.property('modelCount');
        // expect(instance.modelCount).to.be(expectedValueLiteral);
      });

      it('should have the property transcriptionCount (base name: "transcriptionCount")', function() {
        // TODO: update the code to test the property transcriptionCount
        expect(instance).to.have.property('transcriptionCount');
        // expect(instance.transcriptionCount).to.be(expectedValueLiteral);
      });

      it('should have the property endpointCount (base name: "endpointCount")', function() {
        // TODO: update the code to test the property endpointCount
        expect(instance).to.have.property('endpointCount');
        // expect(instance.endpointCount).to.be(expectedValueLiteral);
      });

    });
  });

}));
