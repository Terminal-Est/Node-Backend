# SpeechToTextApiV30.Evaluation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model1** | [**EntityReference**](EntityReference.md) | The first model that can be used to evaluate the improvements and differences. | 
**model2** | [**EntityReference**](EntityReference.md) | The second model that can be used to evaluate the improvements and differences. | 
**transcription1** | [**EntityReference**](EntityReference.md) | Information about the transcriptions used in the evaluation with model1. | [optional] 
**transcription2** | [**EntityReference**](EntityReference.md) | Information about the transcriptions used in the evaluation with model2. | [optional] 
**dataset** | [**EntityReference**](EntityReference.md) | Information about the dataset used in the evaluation. | 
**links** | [**Links**](Links.md) | The links for additional actions or content related to this evaluation. | [optional] 
**properties** | [**EvaluationProperties**](EvaluationProperties.md) | Additional configuration options when creating a new evaluation and additional metadata provided by the service. | [optional] 
**project** | [**EntityReference**](EntityReference.md) | The project, the evaluation is associated with. | [optional] 
**self** | **String** | The location of this entity. | [optional] 
**lastActionDateTime** | **Date** | The time-stamp when the current status was entered.  The time stamp is encoded as ISO 8601 date and time format  (\"YYYY-MM-DDThh:mm:ssZ\", see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations). | [optional] 
**status** | **String** | The status of the object. | [optional] 
**createdDateTime** | **Date** | The time-stamp when the object was created.  The time stamp is encoded as ISO 8601 date and time format  (\"YYYY-MM-DDThh:mm:ssZ\", see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations). | [optional] 
**displayName** | **String** | The display name of the object. | 
**description** | **String** | The description of the object. | [optional] 
**customProperties** | **{String: String}** | The custom properties of this entity. The maximum allowed key length is 64 characters, the maximum  allowed value length is 256 characters and the count of allowed entries is 10. | [optional] 
**locale** | **String** | The locale of the contained data. | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `notStarted` (value: `"NotStarted"`)

* `running` (value: `"Running"`)

* `succeeded` (value: `"Succeeded"`)

* `failed` (value: `"Failed"`)




