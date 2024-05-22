# SpeechToTextApiV30.DatasetProperties

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acceptedLineCount** | **Number** | The number of lines accepted for this data set. | [optional] 
**rejectedLineCount** | **Number** | The number of lines rejected for this data set. | [optional] 
**duration** | **String** | The total duration of the datasets if it contains audio files. The duration is encoded as ISO 8601 duration  (\"PnYnMnDTnHnMnS\", see https://en.wikipedia.org/wiki/ISO_8601#Durations). | [optional] 
**email** | **String** | The email address to send email notifications to in case the operation completes.  The value will be removed after successfully sending the email. | [optional] 
**error** | [**EntityError**](EntityError.md) | The details of the error in case the entity is in a failed state. | [optional] 


