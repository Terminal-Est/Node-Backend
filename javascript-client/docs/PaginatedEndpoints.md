# SpeechToTextApiV30.PaginatedEndpoints

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | [**[Endpoint]**](Endpoint.md) | A list of entities limited by either the passed query parameters 'skip' and 'top' or their default values.                When iterating through a list using pagination and deleting entities in parallel, some entities will be skipped in the results.  It's recommended to build a list on the client and delete after the fetching of the complete list. | [optional] 
**nextLink** | **String** | A link to the next set of paginated results if there are more entities available; otherwise null. | [optional] 


