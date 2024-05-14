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
    describe('Transcription', function() {
      beforeEach(function() {
        instance = new SpeechToTextApiV30.Transcription();
      });

      it('should create an instance of Transcription', function() {
        // TODO: update the code to test Transcription
        expect(instance).to.be.a(SpeechToTextApiV30.Transcription);
      });

      it('should have the property links (base name: "links")', function() {
        // TODO: update the code to test the property links
        expect(instance).to.have.property('links');
        // expect(instance.links).to.be(expectedValueLiteral);
      });

      it('should have the property properties (base name: "properties")', function() {
        // TODO: update the code to test the property properties
        expect(instance).to.have.property('properties');
        // expect(instance.properties).to.be(expectedValueLiteral);
      });

      it('should have the property self (base name: "self")', function() {
        // TODO: update the code to test the property self
        expect(instance).to.have.property('self');
        // expect(instance.self).to.be(expectedValueLiteral);
      });

      it('should have the property model (base name: "model")', function() {
        // TODO: update the code to test the property model
        expect(instance).to.have.property('model');
        // expect(instance.model).to.be(expectedValueLiteral);
      });

      it('should have the property project (base name: "project")', function() {
        // TODO: update the code to test the property project
        expect(instance).to.have.property('project');
        // expect(instance.project).to.be(expectedValueLiteral);
      });

      it('should have the property dataset (base name: "dataset")', function() {
        // TODO: update the code to test the property dataset
        expect(instance).to.have.property('dataset');
        // expect(instance.dataset).to.be(expectedValueLiteral);
      });

      it('should have the property contentUrls (base name: "contentUrls")', function() {
        // TODO: update the code to test the property contentUrls
        expect(instance).to.have.property('contentUrls');
        // expect(instance.contentUrls).to.be(expectedValueLiteral);
      });

      it('should have the property contentContainerUrl (base name: "contentContainerUrl")', function() {
        // TODO: update the code to test the property contentContainerUrl
        expect(instance).to.have.property('contentContainerUrl');
        // expect(instance.contentContainerUrl).to.be(expectedValueLiteral);
      });

      it('should have the property displayName (base name: "displayName")', function() {
        // TODO: update the code to test the property displayName
        expect(instance).to.have.property('displayName');
        // expect(instance.displayName).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property customProperties (base name: "customProperties")', function() {
        // TODO: update the code to test the property customProperties
        expect(instance).to.have.property('customProperties');
        // expect(instance.customProperties).to.be(expectedValueLiteral);
      });

      it('should have the property locale (base name: "locale")', function() {
        // TODO: update the code to test the property locale
        expect(instance).to.have.property('locale');
        // expect(instance.locale).to.be(expectedValueLiteral);
      });

      it('should have the property lastActionDateTime (base name: "lastActionDateTime")', function() {
        // TODO: update the code to test the property lastActionDateTime
        expect(instance).to.have.property('lastActionDateTime');
        // expect(instance.lastActionDateTime).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property createdDateTime (base name: "createdDateTime")', function() {
        // TODO: update the code to test the property createdDateTime
        expect(instance).to.have.property('createdDateTime');
        // expect(instance.createdDateTime).to.be(expectedValueLiteral);
      });

    });
  });

}));
