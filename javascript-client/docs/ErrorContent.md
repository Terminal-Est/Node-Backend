# SpeechToTextApiV30.ErrorContent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**[ErrorDetail]**](ErrorDetail.md) | An array of details representing distinct related errors that occured during the request. | [optional] 
**innererror** | [**InnerErrorV2**](InnerErrorV2.md) | The stack trace of the error. The payload is service-defined.  If the error is not at the root level, the object contains a Code  and an InnerError property. | [optional] 
**code** | **String** | A service-defined error code that should be human-readable.  This code serves as a more specific indicator of the error than  the HTTP error code specified in the response. | 
**message** | **String** | A human-readable representation of the error. It is intended as  an aid to developers and is not suitable for exposure to end users. | 
**target** | **String** | The target of the particular error (e.g., the name of the property in error). | [optional] 


