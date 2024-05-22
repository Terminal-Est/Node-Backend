# SpeechToTextApiV30.ManagementModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscriptionId** | **String** |  | [optional] 
**kind** | **String** |  | [optional] 
**acousticModel** | [**InternalModel**](InternalModel.md) |  | [optional] 
**languageModel** | [**InternalModel**](InternalModel.md) |  | [optional] 
**hideOnV2Api** | **Boolean** |  | [optional] 
**permissions** | **String** |  | [optional] 
**internalProperties** | [**ManagementModelProperties**](ManagementModelProperties.md) |  | [optional] 
**project** | [**EntityReference**](EntityReference.md) | The project, the model is associated with. | [optional] 
**links** | [**ModelLinks**](ModelLinks.md) | The links for additional actions or content related to this model. | [optional] 
**properties** | [**ModelProperties**](ModelProperties.md) | Additional configuration options when creating a new model and additional metadata provided by the service. | [optional] 
**self** | **String** | The location of this entity. | [optional] 
**displayName** | **String** | The display name of the object. | 
**description** | **String** | The description of the object. | [optional] 
**text** | **String** | The text used to adapt this language model. | [optional] 
**baseModel** | [**EntityReference**](EntityReference.md) | The base model used for adaptation. | [optional] 
**datasets** | [**[EntityReference]**](EntityReference.md) | Datasets used for adaptation. | [optional] 
**locale** | **String** | The locale of the contained data. | 
**lastActionDateTime** | **Date** | The time-stamp when the current status was entered.  The time stamp is encoded as ISO 8601 date and time format  (\"YYYY-MM-DDThh:mm:ssZ\", see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations). | [optional] 
**status** | **String** | The status of the object. | [optional] 
**createdDateTime** | **Date** | The time-stamp when the object was created.  The time stamp is encoded as ISO 8601 date and time format  (\"YYYY-MM-DDThh:mm:ssZ\", see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations). | [optional] 
**customProperties** | **{String: String}** | The custom properties of this entity. The maximum allowed key length is 64 characters, the maximum  allowed value length is 256 characters and the count of allowed entries is 10. | [optional] 


<a name="KindEnum"></a>
## Enum: KindEnum


* `none` (value: `"None"`)

* `acoustic` (value: `"Acoustic"`)

* `language` (value: `"Language"`)

* `acousticAndLanguage` (value: `"AcousticAndLanguage"`)

* `customVoice` (value: `"CustomVoice"`)

* `sentiment` (value: `"Sentiment"`)

* `languageIdentification` (value: `"LanguageIdentification"`)

* `diarization` (value: `"Diarization"`)

* `pronunciationScore` (value: `"PronunciationScore"`)




<a name="PermissionsEnum"></a>
## Enum: PermissionsEnum


* `none` (value: `"None"`)

* `othersWrite` (value: `"OthersWrite"`)

* `othersRead` (value: `"OthersRead"`)

* `groupWrite` (value: `"GroupWrite"`)

* `groupRead` (value: `"GroupRead"`)

* `userWrite` (value: `"UserWrite"`)

* `userRead` (value: `"UserRead"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `notStarted` (value: `"NotStarted"`)

* `running` (value: `"Running"`)

* `succeeded` (value: `"Succeeded"`)

* `failed` (value: `"Failed"`)




