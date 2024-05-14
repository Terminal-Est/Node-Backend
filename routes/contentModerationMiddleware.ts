var SpeechToTextApiV30 = require('speech_to_text_api_v30');

var defaultClient = SpeechToTextApiV30.ApiClient.instance;
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = process.env.API_KEY;
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = process.env.API_KEY;

var api = new SpeechToTextApiV30.DefaultApi();
