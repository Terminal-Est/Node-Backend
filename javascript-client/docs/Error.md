# SpeechToTextApiV30.Error

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** |  | [optional] 
**details** | [**[Error]**](Error.md) |  | [optional] 
**message** | **String** |  | [optional] 
**target** | **String** |  | [optional] 
**innerError** | [**InnerError**](InnerError.md) |  | [optional] 


<a name="CodeEnum"></a>
## Enum: CodeEnum


* `invalidRequest` (value: `"InvalidRequest"`)

* `invalidArgument` (value: `"InvalidArgument"`)

* `internalServerError` (value: `"InternalServerError"`)

* `serviceUnavailable` (value: `"ServiceUnavailable"`)

* `notFound` (value: `"NotFound"`)

* `pipelineError` (value: `"PipelineError"`)

* `conflict` (value: `"Conflict"`)

* `internalCommunicationFailed` (value: `"InternalCommunicationFailed"`)

* `forbidden` (value: `"Forbidden"`)

* `notAllowed` (value: `"NotAllowed"`)

* `unauthorized` (value: `"Unauthorized"`)

* `unsupportedMediaType` (value: `"UnsupportedMediaType"`)

* `tooManyRequests` (value: `"TooManyRequests"`)




