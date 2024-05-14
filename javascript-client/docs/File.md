# SpeechToTextApiV30.File

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **String** | The kind of this file. | [optional] 
**links** | [**FileLinks**](FileLinks.md) | The links for additional actions or content related to this file. | [optional] 
**createdDateTime** | **Date** | The creation time of this file.  The time stamp is encoded as ISO 8601 date and time format  (see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations). | [optional] 
**properties** | [**FileProperties**](FileProperties.md) | Additional metadata provided by the service. | [optional] 
**name** | **String** | The name of this file. | [optional] 
**self** | **String** | The location of this entity. | [optional] 


<a name="KindEnum"></a>
## Enum: KindEnum


* `datasetReport` (value: `"DatasetReport"`)

* `audio` (value: `"Audio"`)

* `languageData` (value: `"LanguageData"`)

* `pronunciationData` (value: `"PronunciationData"`)

* `acousticDataArchive` (value: `"AcousticDataArchive"`)

* `acousticDataTranscriptionV2` (value: `"AcousticDataTranscriptionV2"`)

* `transcription` (value: `"Transcription"`)

* `transcriptionReport` (value: `"TranscriptionReport"`)

* `evaluationDetails` (value: `"EvaluationDetails"`)




