# SpeechToTextApiV30.Transcription

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**Links**](Links.md) | The links for additional actions or content related to this transcription. | [optional] 
**properties** | [**TranscriptionProperties**](TranscriptionProperties.md) | Additional configuration options when creating a new transcription and additional metadata provided by the service. | [optional] 
**self** | **String** | The location of this entity. | [optional] 
**model** | [**EntityReference**](EntityReference.md) | The model used in this transcription. | [optional] 
**project** | [**EntityReference**](EntityReference.md) | The project, the transcription is associated with. | [optional] 
**dataset** | [**EntityReference**](EntityReference.md) | A list of acoustic or audio files datasets containing the audio files that will be transcribed. | [optional] 
**contentUrls** | **[String]** | A list of content urls to get audio files from for transcription. Up to 1000 urls are allowed.  This property will not be returned in a response. | [optional] 
**contentContainerUrl** | **String** | A URL for an Azure blob container that contains the audio files. A container is allowed to have a maximum size of 5GB and a maximum number of 10000 blobs.  The maximum size for a blob is 2.5GB.   Container SAS should contain 'r' (read) and 'l' (list) permissions.   This property will not be returned in a response. | [optional] 
**displayName** | **String** | The display name of the object. | 
**description** | **String** | The description of the object. | [optional] 
**customProperties** | **{String: String}** | The custom properties of this entity. The maximum allowed key length is 64 characters, the maximum  allowed value length is 256 characters and the count of allowed entries is 10. | [optional] 
**locale** | **String** | The locale of the contained data. | 
**lastActionDateTime** | **Date** | The time-stamp when the current status was entered.  The time stamp is encoded as ISO 8601 date and time format  (\"YYYY-MM-DDThh:mm:ssZ\", see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations). | [optional] 
**status** | **String** | The status of the object. | [optional] 
**createdDateTime** | **Date** | The time-stamp when the object was created.  The time stamp is encoded as ISO 8601 date and time format  (\"YYYY-MM-DDThh:mm:ssZ\", see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations). | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `notStarted` (value: `"NotStarted"`)

* `running` (value: `"Running"`)

* `succeeded` (value: `"Succeeded"`)

* `failed` (value: `"Failed"`)




