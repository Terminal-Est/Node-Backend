# SpeechToTextApiV30.WebHook

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**WebHookLinks**](WebHookLinks.md) | The links for additional actions or content related to this webhook. | [optional] 
**properties** | [**WebHookProperties**](WebHookProperties.md) | Additional configuration options when creating a new webhook  and additional metadata provided by the service. | [optional] 
**self** | **String** | The location of this entity. | [optional] 
**displayName** | **String** | The display name of the object. | 
**description** | **String** | The description of the object. | [optional] 
**webUrl** | **String** | The registered URL that will be used to send the POST requests for the registered events to. | 
**events** | [**WebHookEvents**](WebHookEvents.md) |  | 
**createdDateTime** | **Date** | The time-stamp when the object was created.  The time stamp is encoded as ISO 8601 date and time format  (\"YYYY-MM-DDThh:mm:ssZ\", see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations). | [optional] 
**lastActionDateTime** | **Date** | The time-stamp when the current status was entered.  The time stamp is encoded as ISO 8601 date and time format  (\"YYYY-MM-DDThh:mm:ssZ\", see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations). | [optional] 
**status** | **String** | The status of the object. | [optional] 
**customProperties** | **{String: String}** | The custom properties of this entity. The maximum allowed key length is 64 characters, the maximum  allowed value length is 256 characters and the count of allowed entries is 10. | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `notStarted` (value: `"NotStarted"`)

* `running` (value: `"Running"`)

* `succeeded` (value: `"Succeeded"`)

* `failed` (value: `"Failed"`)




