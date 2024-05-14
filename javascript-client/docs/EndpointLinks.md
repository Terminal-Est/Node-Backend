# SpeechToTextApiV30.EndpointLinks

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**restInteractive** | **String** | The REST endpoint for short requests up to 15 seconds. | [optional] 
**restConversation** | **String** | The REST endpoint for requests up to 60 seconds. | [optional] 
**restDictation** | **String** | The REST endpoint for requests up to 60 seconds, supporting dictation of punctuation marks. | [optional] 
**webSocketInteractive** | **String** | The Speech SDK endpoint for short requests up to 15 seconds with a single final result. | [optional] 
**webSocketConversation** | **String** | The Speech SDK endpoint for long requests with multiple final results. | [optional] 
**webSocketDictation** | **String** | The Speech SDK endpoint for long requests with multiple final results, supporting dictation of  punctuation marks. | [optional] 
**logs** | **String** | The audio and transcription logs for this endpoint. | [optional] 


