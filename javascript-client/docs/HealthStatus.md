# SpeechToTextApiV30.HealthStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | The overall service status. | [optional] 
**message** | **String** | Additional messages about the current service health. | [optional] 
**components** | [**[Component]**](Component.md) | Optional subcomponents of this service and their status. | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `healthy` (value: `"Healthy"`)

* `sick` (value: `"Sick"`)

* `error` (value: `"Error"`)




