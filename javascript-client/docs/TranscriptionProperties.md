# SpeechToTextApiV30.TranscriptionProperties

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**diarizationEnabled** | **Boolean** | A value indicating whether diarization (speaker separation) is requested. | [optional] 
**wordLevelTimestampsEnabled** | **Boolean** | A value indicating whether word level timestamps are requested. | [optional] 
**duration** | **String** | The duration of the transcription. The duration is encoded as ISO 8601 duration  (\"PnYnMnDTnHnMnS\", see https://en.wikipedia.org/wiki/ISO_8601#Durations). | [optional] 
**channels** | **[Number]** | A collection of the requested channel numbers.  In the default case, the channels 0 and 1 are considered. | [optional] 
**destinationContainerUrl** | **String** | The requested destination container. | [optional] 
**punctuationMode** | **String** | The requested punctuation mode. | [optional] 
**profanityFilterMode** | **String** | The requested profanity filter mode. | [optional] 
**timeToLive** | **String** | How long the transcription will be kept in the system. Once the transcription reaches the time to live  after completion (successful or failed) it will be automatically deleted. Not setting this value or setting  to 0 will disable automatic deletion.  The duration is encoded as ISO 8601 duration (\"PnYnMnDTnHnMnS\", see https://en.wikipedia.org/wiki/ISO_8601#Durations). | [optional] 
**email** | **String** | The email address to send email notifications to in case the operation completes.  The value will be removed after successfully sending the email. | [optional] 
**error** | [**EntityError**](EntityError.md) | The details of the error in case the entity is in a failed state. | [optional] 


<a name="PunctuationModeEnum"></a>
## Enum: PunctuationModeEnum


* `none` (value: `"None"`)

* `dictated` (value: `"Dictated"`)

* `automatic` (value: `"Automatic"`)

* `dictatedAndAutomatic` (value: `"DictatedAndAutomatic"`)




<a name="ProfanityFilterModeEnum"></a>
## Enum: ProfanityFilterModeEnum


* `none` (value: `"None"`)

* `removed` (value: `"Removed"`)

* `tags` (value: `"Tags"`)

* `masked` (value: `"Masked"`)




