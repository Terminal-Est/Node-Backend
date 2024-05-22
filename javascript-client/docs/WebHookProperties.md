# SpeechToTextApiV30.WebHookProperties

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**EntityError**](EntityError.md) | The details of the error in case the dataset is in a failed state. | [optional] 
**apiVersion** | **String** | The API version the web hook was created in. This defines the shape of the payload in the callbacks.  If the payload type is not supported anymore, because the shape changed and the API version using it is removed (after deprecation),  the web hook will be disabled. | [optional] 
**secret** | **String** | A secret that will be used to create a SHA256 hash of the payload with the secret as HMAC key.  This hash will be set as X-MicrosoftSpeechServices-Signature header when calling back into the registered URL. | [optional] 


