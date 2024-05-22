# SpeechToTextApiV30.Dataset

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**Links**](Links.md) | The links for additional actions or content related to this dataset. | [optional] 
**properties** | [**DatasetProperties**](DatasetProperties.md) | Additional configuration options when creating a new dataset and additional metadata provided by the service. | [optional] 
**kind** | **String** | The kind of the dataset. | 
**self** | **String** | The location of this entity. | [optional] 
**displayName** | **String** | The display name of the object. | 
**description** | **String** | The description of the object. | [optional] 
**project** | [**EntityReference**](EntityReference.md) | The project, the dataset is associated with. | [optional] 
**contentUrl** | **String** | The URL of the data for the dataset. | [optional] 
**customProperties** | **{String: String}** | The custom properties of this entity. The maximum allowed key length is 64 characters, the maximum  allowed value length is 256 characters and the count of allowed entries is 10. | [optional] 
**locale** | **String** | The locale of the contained data. | 
**lastActionDateTime** | **Date** | The time-stamp when the current status was entered.  The time stamp is encoded as ISO 8601 date and time format  (\"YYYY-MM-DDThh:mm:ssZ\", see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations). | [optional] 
**status** | **String** | The status of the object. | [optional] 
**createdDateTime** | **Date** | The time-stamp when the object was created.  The time stamp is encoded as ISO 8601 date and time format  (\"YYYY-MM-DDThh:mm:ssZ\", see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations). | [optional] 


<a name="KindEnum"></a>
## Enum: KindEnum


* `language` (value: `"Language"`)

* `acoustic` (value: `"Acoustic"`)

* `pronunciation` (value: `"Pronunciation"`)

* `audioFiles` (value: `"AudioFiles"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `notStarted` (value: `"NotStarted"`)

* `running` (value: `"Running"`)

* `succeeded` (value: `"Succeeded"`)

* `failed` (value: `"Failed"`)




