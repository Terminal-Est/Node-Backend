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
    describe('EndpointLinks', function() {
      beforeEach(function() {
        instance = new SpeechToTextApiV30.EndpointLinks();
      });

      it('should create an instance of EndpointLinks', function() {
        // TODO: update the code to test EndpointLinks
        expect(instance).to.be.a(SpeechToTextApiV30.EndpointLinks);
      });

      it('should have the property restInteractive (base name: "restInteractive")', function() {
        // TODO: update the code to test the property restInteractive
        expect(instance).to.have.property('restInteractive');
        // expect(instance.restInteractive).to.be(expectedValueLiteral);
      });

      it('should have the property restConversation (base name: "restConversation")', function() {
        // TODO: update the code to test the property restConversation
        expect(instance).to.have.property('restConversation');
        // expect(instance.restConversation).to.be(expectedValueLiteral);
      });

      it('should have the property restDictation (base name: "restDictation")', function() {
        // TODO: update the code to test the property restDictation
        expect(instance).to.have.property('restDictation');
        // expect(instance.restDictation).to.be(expectedValueLiteral);
      });

      it('should have the property webSocketInteractive (base name: "webSocketInteractive")', function() {
        // TODO: update the code to test the property webSocketInteractive
        expect(instance).to.have.property('webSocketInteractive');
        // expect(instance.webSocketInteractive).to.be(expectedValueLiteral);
      });

      it('should have the property webSocketConversation (base name: "webSocketConversation")', function() {
        // TODO: update the code to test the property webSocketConversation
        expect(instance).to.have.property('webSocketConversation');
        // expect(instance.webSocketConversation).to.be(expectedValueLiteral);
      });

      it('should have the property webSocketDictation (base name: "webSocketDictation")', function() {
        // TODO: update the code to test the property webSocketDictation
        expect(instance).to.have.property('webSocketDictation');
        // expect(instance.webSocketDictation).to.be(expectedValueLiteral);
      });

      it('should have the property logs (base name: "logs")', function() {
        // TODO: update the code to test the property logs
        expect(instance).to.have.property('logs');
        // expect(instance.logs).to.be(expectedValueLiteral);
      });

    });
  });

}));
