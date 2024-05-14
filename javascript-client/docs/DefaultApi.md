# SpeechToTextApiV30.DefaultApi

All URIs are relative to *https://cognitive-wu.cognitiveservices.azure.com/speechtotext/v3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyModelToSubscription**](DefaultApi.md#copyModelToSubscription) | **POST** /models/{id}/copyto | Copy Model
[**createDataset**](DefaultApi.md#createDataset) | **POST** /datasets | Create Dataset
[**createEndpoint**](DefaultApi.md#createEndpoint) | **POST** /endpoints | Create Endpoint
[**createEvaluation**](DefaultApi.md#createEvaluation) | **POST** /evaluations | Create Evaluation
[**createHook**](DefaultApi.md#createHook) | **POST** /webhooks | Create Web Hook
[**createModel**](DefaultApi.md#createModel) | **POST** /models | Create Model
[**createProject**](DefaultApi.md#createProject) | **POST** /projects | Create Project
[**createTranscription**](DefaultApi.md#createTranscription) | **POST** /transcriptions | Create Transcription
[**deleteBaseModelLog**](DefaultApi.md#deleteBaseModelLog) | **DELETE** /endpoints/base/{locale}/files/logs/{logId} | Delete Base Model Endpoint Log
[**deleteBaseModelLogs**](DefaultApi.md#deleteBaseModelLogs) | **DELETE** /endpoints/base/{locale}/files/logs | Delete All Base Model Endpoint Logs
[**deleteDataset**](DefaultApi.md#deleteDataset) | **DELETE** /datasets/{id} | Delete Dataset
[**deleteEndpoint**](DefaultApi.md#deleteEndpoint) | **DELETE** /endpoints/{id} | Delete Endpoint
[**deleteEndpointLog**](DefaultApi.md#deleteEndpointLog) | **DELETE** /endpoints/{id}/files/logs/{logId} | Delete Custom Model Endpoint Log
[**deleteEndpointLogs**](DefaultApi.md#deleteEndpointLogs) | **DELETE** /endpoints/{id}/files/logs | Delete All Custom Model Endpoint Logs
[**deleteEvaluation**](DefaultApi.md#deleteEvaluation) | **DELETE** /evaluations/{id} | Delete Evaluation
[**deleteHook**](DefaultApi.md#deleteHook) | **DELETE** /webhooks/{id} | Delete Web Hook
[**deleteModel**](DefaultApi.md#deleteModel) | **DELETE** /models/{id} | Delete Model
[**deleteProject**](DefaultApi.md#deleteProject) | **DELETE** /projects/{id} | Delete Project
[**deleteTranscription**](DefaultApi.md#deleteTranscription) | **DELETE** /transcriptions/{id} | Delete Transcription
[**getBaseModel**](DefaultApi.md#getBaseModel) | **GET** /models/base/{id} | Get Base Model
[**getBaseModelLog**](DefaultApi.md#getBaseModelLog) | **GET** /endpoints/base/{locale}/files/logs/{logId} | Get Base Model Endpoint Log
[**getBaseModelLogs**](DefaultApi.md#getBaseModelLogs) | **GET** /endpoints/base/{locale}/files/logs | Get Base Model Endpoint Logs
[**getBaseModelManifest**](DefaultApi.md#getBaseModelManifest) | **GET** /models/base/{id}/manifest | Get Base Model Manifest
[**getBaseModels**](DefaultApi.md#getBaseModels) | **GET** /models/base | Get Base Models
[**getDataset**](DefaultApi.md#getDataset) | **GET** /datasets/{id} | Get Dataset
[**getDatasetFile**](DefaultApi.md#getDatasetFile) | **GET** /datasets/{id}/files/{fileId} | Get Dataset File
[**getDatasetFiles**](DefaultApi.md#getDatasetFiles) | **GET** /datasets/{id}/files | Get Dataset Files
[**getDatasets**](DefaultApi.md#getDatasets) | **GET** /datasets | Get Datasets
[**getDatasetsForProject**](DefaultApi.md#getDatasetsForProject) | **GET** /projects/{id}/datasets | Get Datasets for Project
[**getEndpoint**](DefaultApi.md#getEndpoint) | **GET** /endpoints/{id} | Get Endpoint
[**getEndpointLog**](DefaultApi.md#getEndpointLog) | **GET** /endpoints/{id}/files/logs/{logId} | Get Custom Model Endpoint Log
[**getEndpointLogs**](DefaultApi.md#getEndpointLogs) | **GET** /endpoints/{id}/files/logs | Get Custom Model Endpoint Logs
[**getEndpoints**](DefaultApi.md#getEndpoints) | **GET** /endpoints | Get Endpoints
[**getEndpointsForProject**](DefaultApi.md#getEndpointsForProject) | **GET** /projects/{id}/endpoints | Get Endpoints for Project
[**getEvaluation**](DefaultApi.md#getEvaluation) | **GET** /evaluations/{id} | Get Evaluation
[**getEvaluationFile**](DefaultApi.md#getEvaluationFile) | **GET** /evaluations/{id}/files/{fileId} | Get Evaluation File
[**getEvaluationFiles**](DefaultApi.md#getEvaluationFiles) | **GET** /evaluations/{id}/files | Get Evaluation Files
[**getEvaluations**](DefaultApi.md#getEvaluations) | **GET** /evaluations | Get Evaluations
[**getEvaluationsForProject**](DefaultApi.md#getEvaluationsForProject) | **GET** /projects/{id}/evaluations | Get Evaluations for Project
[**getHealthStatus**](DefaultApi.md#getHealthStatus) | **GET** /healthstatus | Get Health Status
[**getHook**](DefaultApi.md#getHook) | **GET** /webhooks/{id} | Get Web Hook
[**getHooks**](DefaultApi.md#getHooks) | **GET** /webhooks | Get Web Hooks
[**getModel**](DefaultApi.md#getModel) | **GET** /models/{id} | Get Model
[**getModelManifest**](DefaultApi.md#getModelManifest) | **GET** /models/{id}/manifest | Get Custom Model Manifest
[**getModels**](DefaultApi.md#getModels) | **GET** /models | Get Custom Models
[**getModelsForProject**](DefaultApi.md#getModelsForProject) | **GET** /projects/{id}/models | Get Models for Project
[**getProject**](DefaultApi.md#getProject) | **GET** /projects/{id} | Get Project
[**getProjects**](DefaultApi.md#getProjects) | **GET** /projects | Get Projects
[**getSupportedLocalesForDatasets**](DefaultApi.md#getSupportedLocalesForDatasets) | **GET** /datasets/locales | Get Supported Locales for Datasets
[**getSupportedLocalesForEndpoints**](DefaultApi.md#getSupportedLocalesForEndpoints) | **GET** /endpoints/locales | Get Supported Locales for Endpoints
[**getSupportedLocalesForEvaluations**](DefaultApi.md#getSupportedLocalesForEvaluations) | **GET** /evaluations/locales | Get Supported Locales for Evaluations
[**getSupportedLocalesForModels**](DefaultApi.md#getSupportedLocalesForModels) | **GET** /models/locales | Get Supported Locales for Models
[**getSupportedLocalesForTranscriptions**](DefaultApi.md#getSupportedLocalesForTranscriptions) | **GET** /transcriptions/locales | Get Supported Locales for Transcriptions
[**getSupportedProjectLocales**](DefaultApi.md#getSupportedProjectLocales) | **GET** /projects/locales | Get Supported Locales for Projects
[**getTranscription**](DefaultApi.md#getTranscription) | **GET** /transcriptions/{id} | Get Transcription
[**getTranscriptionFile**](DefaultApi.md#getTranscriptionFile) | **GET** /transcriptions/{id}/files/{fileId} | Get Transcription File
[**getTranscriptionFiles**](DefaultApi.md#getTranscriptionFiles) | **GET** /transcriptions/{id}/files | Get Transcription Files
[**getTranscriptions**](DefaultApi.md#getTranscriptions) | **GET** /transcriptions | Get Transcriptions
[**getTranscriptionsForProject**](DefaultApi.md#getTranscriptionsForProject) | **GET** /projects/{id}/transcriptions | Get Transcriptions for Project
[**pingHook**](DefaultApi.md#pingHook) | **POST** /webhooks/{id}/ping | Ping Web Hook
[**testHook**](DefaultApi.md#testHook) | **POST** /webhooks/{id}/test | Test Web Hook
[**updateDataset**](DefaultApi.md#updateDataset) | **PATCH** /datasets/{id} | Update Dataset
[**updateEndpoint**](DefaultApi.md#updateEndpoint) | **PATCH** /endpoints/{id} | Update Endpoint
[**updateEvaluation**](DefaultApi.md#updateEvaluation) | **PATCH** /evaluations/{id} | Update Evaluation
[**updateHook**](DefaultApi.md#updateHook) | **PATCH** /webhooks/{id} | Update Web Hook
[**updateModel**](DefaultApi.md#updateModel) | **PATCH** /models/{id} | Update Model
[**updateProject**](DefaultApi.md#updateProject) | **PATCH** /projects/{id} | Update Project
[**updateTranscription**](DefaultApi.md#updateTranscription) | **PATCH** /transcriptions/{id} | Update Transcription
[**uploadDatasetFromForm**](DefaultApi.md#uploadDatasetFromForm) | **POST** /datasets/upload | Create Dataset from Form


<a name="copyModelToSubscription"></a>
# **copyModelToSubscription**
> Model copyModelToSubscription(id, opts)

Copy Model

This method can be used to copy a model from one location to another. If the target subscription key belongs to a subscription created for another location, the model will be copied to that location. Only adapted models are allowed to copy to another subscription.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the model that will be copied.

var opts = { 
  'modelCopy': new SpeechToTextApiV30.ModelCopy() // ModelCopy | The body contains the subscription key of the target subscription.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.copyModelToSubscription(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the model that will be copied. | 
 **modelCopy** | [**ModelCopy**](ModelCopy.md)| The body contains the subscription key of the target subscription. | [optional] 

### Return type

[**Model**](Model.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDataset"></a>
# **createDataset**
> Dataset createDataset(opts)

Create Dataset

Uploads and creates a new dataset by getting the data from a specified URL.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var opts = { 
  'dataset': new SpeechToTextApiV30.Dataset() // Dataset | Definition for the new dataset.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDataset(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataset** | [**Dataset**](Dataset.md)| Definition for the new dataset. | [optional] 

### Return type

[**Dataset**](Dataset.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createEndpoint"></a>
# **createEndpoint**
> Endpoint createEndpoint(opts)

Create Endpoint

Creates a new endpoint.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var opts = { 
  'endpoint': new SpeechToTextApiV30.Endpoint() // Endpoint | The details of the endpoint.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createEndpoint(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint** | [**Endpoint**](Endpoint.md)| The details of the endpoint. | [optional] 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createEvaluation"></a>
# **createEvaluation**
> Evaluation createEvaluation(opts)

Create Evaluation

Creates a new evaluation.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var opts = { 
  'evaluation': new SpeechToTextApiV30.Evaluation() // Evaluation | The details of the new evaluation.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createEvaluation(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **evaluation** | [**Evaluation**](Evaluation.md)| The details of the new evaluation. | [optional] 

### Return type

[**Evaluation**](Evaluation.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createHook"></a>
# **createHook**
> WebHook createHook(opts)

Create Web Hook

If the property secret in the configuration is present and contains a non-empty string, it will be used to create a SHA256 hash of the payload with the secret as HMAC key. This hash will be set as X-MicrosoftSpeechServices-Signature header when calling back into the registered URL.              When calling back into the registered URL, the request will contain a X-MicrosoftSpeechServices-Event header containing one of the registered event types. There will be one request per registered event type.              After successfully registering the web hook, it will not be usable until a challenge/response is completed. To do this, a request with the event type challenge will be made with a query parameter called validationToken. Respond to the challenge with a 200 OK containing the value of the validationToken query parameter as the response body. When the challenge/response is successfully completed, the web hook will begin receiving events.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var opts = { 
  'webHook': new SpeechToTextApiV30.WebHook() // WebHook | The details of the new web hook.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createHook(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webHook** | [**WebHook**](WebHook.md)| The details of the new web hook. | [optional] 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createModel"></a>
# **createModel**
> Model createModel(opts)

Create Model

Creates a new model.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var opts = { 
  'model': new SpeechToTextApiV30.Model() // Model | The details of the new model.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createModel(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**Model**](Model.md)| The details of the new model. | [optional] 

### Return type

[**Model**](Model.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createProject"></a>
# **createProject**
> Project createProject(opts)

Create Project

Creates a new project.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var opts = { 
  'project': new SpeechToTextApiV30.Project() // Project | The details of the project.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createProject(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | [**Project**](Project.md)| The details of the project. | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTranscription"></a>
# **createTranscription**
> Transcription createTranscription(opts)

Create Transcription

Creates a new transcription.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var opts = { 
  'transcription': new SpeechToTextApiV30.Transcription() // Transcription | The details of the new transcription.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTranscription(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcription** | [**Transcription**](Transcription.md)| The details of the new transcription. | [optional] 

### Return type

[**Transcription**](Transcription.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBaseModelLog"></a>
# **deleteBaseModelLog**
> deleteBaseModelLog(locale, logId)

Delete Base Model Endpoint Log

Deletes one audio or transcription log that have been stored when using the default base model of a given language.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var locale = "locale_example"; // String | The language used to select the default base model.

var logId = "logId_example"; // String | The identifier of the log.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteBaseModelLog(locale, logId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locale** | **String**| The language used to select the default base model. | 
 **logId** | **String**| The identifier of the log. | 

### Return type

null (empty response body)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteBaseModelLogs"></a>
# **deleteBaseModelLogs**
> deleteBaseModelLogs(locale, opts)

Delete All Base Model Endpoint Logs

Deletion process is done asynchronously and can take up to one day depending on the amount of log files.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var locale = "locale_example"; // String | The language used to select the default base model.

var opts = { 
  'endDate': "endDate_example" // String | The end date of the audio logs deletion (specific day, UTC).              Expected format: \"yyyy-mm-dd\". for instance, \"2019-09-20\" results in deleting all logs on September 20th, 2019 and before.              Deletes all existing logs when date is not specified.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteBaseModelLogs(locale, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locale** | **String**| The language used to select the default base model. | 
 **endDate** | **String**| The end date of the audio logs deletion (specific day, UTC).              Expected format: \"yyyy-mm-dd\". for instance, \"2019-09-20\" results in deleting all logs on September 20th, 2019 and before.              Deletes all existing logs when date is not specified. | [optional] 

### Return type

null (empty response body)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteDataset"></a>
# **deleteDataset**
> deleteDataset(id)

Delete Dataset

Deletes the specified dataset.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the dataset.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteDataset(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the dataset. | 

### Return type

null (empty response body)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteEndpoint"></a>
# **deleteEndpoint**
> deleteEndpoint(id)

Delete Endpoint

Deletes the endpoint identified by the given ID.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the endpoint.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteEndpoint(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the endpoint. | 

### Return type

null (empty response body)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteEndpointLog"></a>
# **deleteEndpointLog**
> deleteEndpointLog(id, logId)

Delete Custom Model Endpoint Log

Deletes one audio or transcription log that have been stored for a given endpoint.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the endpoint.

var logId = "logId_example"; // String | The identifier of the log.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteEndpointLog(id, logId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the endpoint. | 
 **logId** | **String**| The identifier of the log. | 

### Return type

null (empty response body)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteEndpointLogs"></a>
# **deleteEndpointLogs**
> deleteEndpointLogs(id, opts)

Delete All Custom Model Endpoint Logs

The deletion process is done asynchronously and can take up to one day depending on the amount of log files.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the endpoint.

var opts = { 
  'endDate': "endDate_example" // String | The end date of the audio logs deletion (specific day, UTC).              Expected format: \"yyyy-mm-dd\". for instance, \"2019-09-20\" results in deleting all logs on September 20th, 2019 and before.              Deletes all existing logs when date is not specified.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteEndpointLogs(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the endpoint. | 
 **endDate** | **String**| The end date of the audio logs deletion (specific day, UTC).              Expected format: \"yyyy-mm-dd\". for instance, \"2019-09-20\" results in deleting all logs on September 20th, 2019 and before.              Deletes all existing logs when date is not specified. | [optional] 

### Return type

null (empty response body)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteEvaluation"></a>
# **deleteEvaluation**
> deleteEvaluation(id)

Delete Evaluation

Deletes the evaluation identified by the given ID.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the evaluation.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteEvaluation(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the evaluation. | 

### Return type

null (empty response body)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteHook"></a>
# **deleteHook**
> deleteHook(id)

Delete Web Hook

Deletes the web hook registration identified by the given ID.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the web hook.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteHook(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the web hook. | 

### Return type

null (empty response body)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteModel"></a>
# **deleteModel**
> deleteModel(id)

Delete Model

Deletes the model identified by the given ID.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the model.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteModel(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the model. | 

### Return type

null (empty response body)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteProject"></a>
# **deleteProject**
> deleteProject(id)

Delete Project

Deletes the project identified by the given ID.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the project.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProject(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the project. | 

### Return type

null (empty response body)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteTranscription"></a>
# **deleteTranscription**
> deleteTranscription(id)

Delete Transcription

Deletes the specified transcription task.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the transcription.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTranscription(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the transcription. | 

### Return type

null (empty response body)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBaseModel"></a>
# **getBaseModel**
> Model getBaseModel(id)

Get Base Model

Gets the base model identified by the given ID.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the base model.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBaseModel(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the base model. | 

### Return type

[**Model**](Model.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBaseModelLog"></a>
# **getBaseModelLog**
> File getBaseModelLog(locale, logId, opts)

Get Base Model Endpoint Log

Gets a specific audio or transcription log for the default base model in a given language.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var locale = "locale_example"; // String | The language used to select the default base model.

var logId = "logId_example"; // String | The identifier of the log.

var opts = { 
  'sasValidityInSeconds': 56 // Number | Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBaseModelLog(locale, logId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locale** | **String**| The language used to select the default base model. | 
 **logId** | **String**| The identifier of the log. | 
 **sasValidityInSeconds** | **Number**| Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours. | [optional] 

### Return type

**File**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBaseModelLogs"></a>
# **getBaseModelLogs**
> PaginatedFiles getBaseModelLogs(locale, opts)

Get Base Model Endpoint Logs

Gets the list of audio and transcription logs that have been stored when using the default base model of a given language.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var locale = "locale_example"; // String | The language used to select the default base model.

var opts = { 
  'sasValidityInSeconds': 56, // Number | Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours.
  'skipToken': "skipToken_example", // String | Token to skip logs that were already retrieved in previous requests. Pagination starts from beginning when not defined.
  'top': 56 // Number | Format - int32. Number of files that will be included (between 1 and 5000).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBaseModelLogs(locale, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locale** | **String**| The language used to select the default base model. | 
 **sasValidityInSeconds** | **Number**| Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours. | [optional] 
 **skipToken** | **String**| Token to skip logs that were already retrieved in previous requests. Pagination starts from beginning when not defined. | [optional] 
 **top** | **Number**| Format - int32. Number of files that will be included (between 1 and 5000). | [optional] 

### Return type

[**PaginatedFiles**](PaginatedFiles.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBaseModelManifest"></a>
# **getBaseModelManifest**
> ModelManifest getBaseModelManifest(id, opts)

Get Base Model Manifest

Returns an manifest for this base model which can be used in an on-premise container.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The ID of the model to generate a manifest for.

var opts = { 
  'sasValidityInSeconds': 56 // Number | Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBaseModelManifest(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The ID of the model to generate a manifest for. | 
 **sasValidityInSeconds** | **Number**| Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours. | [optional] 

### Return type

[**ModelManifest**](ModelManifest.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBaseModels"></a>
# **getBaseModels**
> PaginatedModels getBaseModels(opts)

Get Base Models

Gets the list of base models for the authenticated subscription.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var opts = { 
  'skip': 56, // Number | Format - int32. Number of base models that will be skipped.
  'top': 56 // Number | Format - int32. Number of base models that will be included after skipping.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBaseModels(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**| Format - int32. Number of base models that will be skipped. | [optional] 
 **top** | **Number**| Format - int32. Number of base models that will be included after skipping. | [optional] 

### Return type

[**PaginatedModels**](PaginatedModels.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDataset"></a>
# **getDataset**
> Dataset getDataset(id)

Get Dataset

Gets the dataset identified by the given ID.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the dataset.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDataset(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the dataset. | 

### Return type

[**Dataset**](Dataset.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDatasetFile"></a>
# **getDatasetFile**
> File getDatasetFile(id, fileId, opts)

Get Dataset File

Gets one specific file (identified with fileId) from a dataset (identified with id).

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the dataset.

var fileId = "fileId_example"; // String | Format - uuid. The identifier of the file.

var opts = { 
  'sasValidityInSeconds': 56 // Number | Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDatasetFile(id, fileId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the dataset. | 
 **fileId** | **String**| Format - uuid. The identifier of the file. | 
 **sasValidityInSeconds** | **Number**| Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours. | [optional] 

### Return type

**File**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDatasetFiles"></a>
# **getDatasetFiles**
> PaginatedFiles getDatasetFiles(id, opts)

Get Dataset Files

Gets the files of the dataset identified by the given ID.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the dataset.

var opts = { 
  'sasValidityInSeconds': 56, // Number | Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours.
  'skip': 56, // Number | Format - int32. Number of files that will be skipped.
  'top': 56 // Number | Format - int32. Number of files that will be included after skipping.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDatasetFiles(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the dataset. | 
 **sasValidityInSeconds** | **Number**| Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours. | [optional] 
 **skip** | **Number**| Format - int32. Number of files that will be skipped. | [optional] 
 **top** | **Number**| Format - int32. Number of files that will be included after skipping. | [optional] 

### Return type

[**PaginatedFiles**](PaginatedFiles.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDatasets"></a>
# **getDatasets**
> PaginatedDatasets getDatasets(opts)

Get Datasets

Gets a list of datasets for the authenticated subscription.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var opts = { 
  'skip': 56, // Number | Format - int32. Number of datasets that will be skipped.
  'top': 56 // Number | Format - int32. Number of datasets that will be included after skipping.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDatasets(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**| Format - int32. Number of datasets that will be skipped. | [optional] 
 **top** | **Number**| Format - int32. Number of datasets that will be included after skipping. | [optional] 

### Return type

[**PaginatedDatasets**](PaginatedDatasets.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDatasetsForProject"></a>
# **getDatasetsForProject**
> PaginatedDatasets getDatasetsForProject(id, opts)

Get Datasets for Project

Gets the list of datasets for specified project.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the project.

var opts = { 
  'skip': 56, // Number | Format - int32. Number of datasets that will be skipped.
  'top': 56 // Number | Format - int32. Number of datasets that will be included after skipping.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDatasetsForProject(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the project. | 
 **skip** | **Number**| Format - int32. Number of datasets that will be skipped. | [optional] 
 **top** | **Number**| Format - int32. Number of datasets that will be included after skipping. | [optional] 

### Return type

[**PaginatedDatasets**](PaginatedDatasets.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEndpoint"></a>
# **getEndpoint**
> Endpoint getEndpoint(id)

Get Endpoint

Gets the endpoint identified by the given ID.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the endpoint.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEndpoint(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the endpoint. | 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEndpointLog"></a>
# **getEndpointLog**
> File getEndpointLog(id, logId, opts)

Get Custom Model Endpoint Log

Gets a specific audio or transcription log for a given endpoint.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the endpoint.

var logId = "logId_example"; // String | The identifier of the log.

var opts = { 
  'sasValidityInSeconds': 56 // Number | Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEndpointLog(id, logId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the endpoint. | 
 **logId** | **String**| The identifier of the log. | 
 **sasValidityInSeconds** | **Number**| Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours. | [optional] 

### Return type

**File**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEndpointLogs"></a>
# **getEndpointLogs**
> PaginatedFiles getEndpointLogs(id, opts)

Get Custom Model Endpoint Logs

Gets the list of audio and transcription logs that have been stored for a given endpoint.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the endpoint.

var opts = { 
  'sasValidityInSeconds': 56, // Number | Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours.
  'skipToken': "skipToken_example", // String | Token to skip logs that were already retrieved in previous requests. Pagination starts from beginning when not defined.
  'top': 56 // Number | Format - int32. Number of files that will be included (between 1 and 5000).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEndpointLogs(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the endpoint. | 
 **sasValidityInSeconds** | **Number**| Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours. | [optional] 
 **skipToken** | **String**| Token to skip logs that were already retrieved in previous requests. Pagination starts from beginning when not defined. | [optional] 
 **top** | **Number**| Format - int32. Number of files that will be included (between 1 and 5000). | [optional] 

### Return type

[**PaginatedFiles**](PaginatedFiles.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEndpoints"></a>
# **getEndpoints**
> PaginatedEndpoints getEndpoints(opts)

Get Endpoints

Gets the list of endpoints for the authenticated subscription.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var opts = { 
  'skip': 56, // Number | Format - int32. Number of endpoints that will be skipped.
  'top': 56 // Number | Format - int32. Number of endpoints that will be included after skipping.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEndpoints(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**| Format - int32. Number of endpoints that will be skipped. | [optional] 
 **top** | **Number**| Format - int32. Number of endpoints that will be included after skipping. | [optional] 

### Return type

[**PaginatedEndpoints**](PaginatedEndpoints.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEndpointsForProject"></a>
# **getEndpointsForProject**
> PaginatedEndpoints getEndpointsForProject(id, opts)

Get Endpoints for Project

Gets the list of endpoints for specified project.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the project.

var opts = { 
  'skip': 56, // Number | Format - int32. Number of endpoints that will be skipped.
  'top': 56 // Number | Format - int32. Number of endpoints that will be included after skipping.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEndpointsForProject(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the project. | 
 **skip** | **Number**| Format - int32. Number of endpoints that will be skipped. | [optional] 
 **top** | **Number**| Format - int32. Number of endpoints that will be included after skipping. | [optional] 

### Return type

[**PaginatedEndpoints**](PaginatedEndpoints.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEvaluation"></a>
# **getEvaluation**
> Evaluation getEvaluation(id)

Get Evaluation

Gets the evaluation identified by the given ID.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the evaluation.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEvaluation(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the evaluation. | 

### Return type

[**Evaluation**](Evaluation.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEvaluationFile"></a>
# **getEvaluationFile**
> File getEvaluationFile(id, fileId, opts)

Get Evaluation File

Gets one specific file (identified with fileId) from an evaluation (identified with id).

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the evaluation.

var fileId = "fileId_example"; // String | Format - uuid. The identifier of the file.

var opts = { 
  'sasValidityInSeconds': 56 // Number | Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEvaluationFile(id, fileId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the evaluation. | 
 **fileId** | **String**| Format - uuid. The identifier of the file. | 
 **sasValidityInSeconds** | **Number**| Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours. | [optional] 

### Return type

**File**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEvaluationFiles"></a>
# **getEvaluationFiles**
> PaginatedFiles getEvaluationFiles(id, opts)

Get Evaluation Files

Gets the files of the evaluation identified by the given ID.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the evaluation.

var opts = { 
  'sasValidityInSeconds': 56, // Number | Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours.
  'skip': 56, // Number | Format - int32. Number of files that will be skipped.
  'top': 56 // Number | Format - int32. Number of files that will be included after skipping.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEvaluationFiles(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the evaluation. | 
 **sasValidityInSeconds** | **Number**| Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours. | [optional] 
 **skip** | **Number**| Format - int32. Number of files that will be skipped. | [optional] 
 **top** | **Number**| Format - int32. Number of files that will be included after skipping. | [optional] 

### Return type

[**PaginatedFiles**](PaginatedFiles.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEvaluations"></a>
# **getEvaluations**
> PaginatedEvaluations getEvaluations(opts)

Get Evaluations

Gets the list of evaluations for the authenticated subscription.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var opts = { 
  'skip': 56, // Number | Format - int32. Number of evaluations that will be skipped.
  'top': 56 // Number | Format - int32. Number of evaluations that will be included after skipping.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEvaluations(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**| Format - int32. Number of evaluations that will be skipped. | [optional] 
 **top** | **Number**| Format - int32. Number of evaluations that will be included after skipping. | [optional] 

### Return type

[**PaginatedEvaluations**](PaginatedEvaluations.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEvaluationsForProject"></a>
# **getEvaluationsForProject**
> PaginatedEvaluations getEvaluationsForProject(id, opts)

Get Evaluations for Project

Gets the list of evaluations for specified project.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the project.

var opts = { 
  'skip': 56, // Number | Format - int32. Number of evaluations that will be skipped.
  'top': 56 // Number | Format - int32. Number of evaluations that will be included after skipping.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEvaluationsForProject(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the project. | 
 **skip** | **Number**| Format - int32. Number of evaluations that will be skipped. | [optional] 
 **top** | **Number**| Format - int32. Number of evaluations that will be included after skipping. | [optional] 

### Return type

[**PaginatedEvaluations**](PaginatedEvaluations.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHealthStatus"></a>
# **getHealthStatus**
> HealthStatus getHealthStatus()

Get Health Status

Returns the overall health of the service and optionally of the different subcomponents.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getHealthStatus(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**HealthStatus**](HealthStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHook"></a>
# **getHook**
> WebHook getHook(id)

Get Web Hook

Gets the web hook registration identified by the given ID.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the web hook.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getHook(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the web hook. | 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHooks"></a>
# **getHooks**
> PaginatedWebHooks getHooks(opts)

Get Web Hooks

Gets the list of web hook registrations for the authenticated subscription.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var opts = { 
  'skip': 56, // Number | Format - int32. Number of hooks that will be skipped.
  'top': 56 // Number | Format - int32. Number of hooks that will be included after skipping.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getHooks(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**| Format - int32. Number of hooks that will be skipped. | [optional] 
 **top** | **Number**| Format - int32. Number of hooks that will be included after skipping. | [optional] 

### Return type

[**PaginatedWebHooks**](PaginatedWebHooks.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getModel"></a>
# **getModel**
> Model getModel(id)

Get Model

Gets the model identified by the given ID.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the model.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getModel(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the model. | 

### Return type

[**Model**](Model.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getModelManifest"></a>
# **getModelManifest**
> ModelManifest getModelManifest(id, opts)

Get Custom Model Manifest

Returns an manifest for this model which can be used in an on-premise container.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The ID of the model to generate a manifest for.

var opts = { 
  'sasValidityInSeconds': 56 // Number | Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getModelManifest(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The ID of the model to generate a manifest for. | 
 **sasValidityInSeconds** | **Number**| Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours. | [optional] 

### Return type

[**ModelManifest**](ModelManifest.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getModels"></a>
# **getModels**
> PaginatedModels getModels(opts)

Get Custom Models

Gets the list of custom models for the authenticated subscription.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var opts = { 
  'skip': 56, // Number | Format - int32. Number of models that will be skipped.
  'top': 56 // Number | Format - int32. Number of models that will be included after skipping.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getModels(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**| Format - int32. Number of models that will be skipped. | [optional] 
 **top** | **Number**| Format - int32. Number of models that will be included after skipping. | [optional] 

### Return type

[**PaginatedModels**](PaginatedModels.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getModelsForProject"></a>
# **getModelsForProject**
> PaginatedModels getModelsForProject(id, opts)

Get Models for Project

Gets the list of models for specified project.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the project.

var opts = { 
  'skip': 56, // Number | Format - int32. Number of models that will be skipped.
  'top': 56 // Number | Format - int32. Number of models that will be included after skipping.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getModelsForProject(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the project. | 
 **skip** | **Number**| Format - int32. Number of models that will be skipped. | [optional] 
 **top** | **Number**| Format - int32. Number of models that will be included after skipping. | [optional] 

### Return type

[**PaginatedModels**](PaginatedModels.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProject"></a>
# **getProject**
> Project getProject(id)

Get Project

Gets the project identified by the given ID.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the project.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProject(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the project. | 

### Return type

[**Project**](Project.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProjects"></a>
# **getProjects**
> PaginatedProjects getProjects(opts)

Get Projects

Gets the list of projects for the authenticated subscription.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var opts = { 
  'skip': 56, // Number | Format - int32. Number of projects that will be skipped.
  'top': 56 // Number | Format - int32. Number of projects that will be included after skipping.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProjects(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**| Format - int32. Number of projects that will be skipped. | [optional] 
 **top** | **Number**| Format - int32. Number of projects that will be included after skipping. | [optional] 

### Return type

[**PaginatedProjects**](PaginatedProjects.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSupportedLocalesForDatasets"></a>
# **getSupportedLocalesForDatasets**
> ApiSpeechtotextV30DatasetsLocalesGet200ApplicationJsonResponse getSupportedLocalesForDatasets()

Get Supported Locales for Datasets

Gets a list of supported locales for data imports.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSupportedLocalesForDatasets(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ApiSpeechtotextV30DatasetsLocalesGet200ApplicationJsonResponse**](ApiSpeechtotextV30DatasetsLocalesGet200ApplicationJsonResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSupportedLocalesForEndpoints"></a>
# **getSupportedLocalesForEndpoints**
> ApiSpeechtotextV30EndpointsLocalesGet200ApplicationJsonResponse getSupportedLocalesForEndpoints()

Get Supported Locales for Endpoints

Gets a list of supported locales for endpoint creations.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSupportedLocalesForEndpoints(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ApiSpeechtotextV30EndpointsLocalesGet200ApplicationJsonResponse**](ApiSpeechtotextV30EndpointsLocalesGet200ApplicationJsonResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSupportedLocalesForEvaluations"></a>
# **getSupportedLocalesForEvaluations**
> ApiSpeechtotextV30EvaluationsLocalesGet200ApplicationJsonResponse getSupportedLocalesForEvaluations()

Get Supported Locales for Evaluations

Gets a list of supported locales for evaluations.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSupportedLocalesForEvaluations(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ApiSpeechtotextV30EvaluationsLocalesGet200ApplicationJsonResponse**](ApiSpeechtotextV30EvaluationsLocalesGet200ApplicationJsonResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSupportedLocalesForModels"></a>
# **getSupportedLocalesForModels**
> ApiSpeechtotextV30ModelsLocalesGet200ApplicationJsonResponse getSupportedLocalesForModels()

Get Supported Locales for Models

Gets a list of supported locales for model adaptation.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSupportedLocalesForModels(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ApiSpeechtotextV30ModelsLocalesGet200ApplicationJsonResponse**](ApiSpeechtotextV30ModelsLocalesGet200ApplicationJsonResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSupportedLocalesForTranscriptions"></a>
# **getSupportedLocalesForTranscriptions**
> ApiSpeechtotextV30TranscriptionsLocalesGet200ApplicationJsonResponse getSupportedLocalesForTranscriptions()

Get Supported Locales for Transcriptions

Gets a list of supported locales for offline transcriptions.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSupportedLocalesForTranscriptions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ApiSpeechtotextV30TranscriptionsLocalesGet200ApplicationJsonResponse**](ApiSpeechtotextV30TranscriptionsLocalesGet200ApplicationJsonResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSupportedProjectLocales"></a>
# **getSupportedProjectLocales**
> ApiSpeechtotextV30ProjectsLocalesGet200ApplicationJsonResponse getSupportedProjectLocales()

Get Supported Locales for Projects

Gets the list of supported locales.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSupportedProjectLocales(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ApiSpeechtotextV30ProjectsLocalesGet200ApplicationJsonResponse**](ApiSpeechtotextV30ProjectsLocalesGet200ApplicationJsonResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTranscription"></a>
# **getTranscription**
> Transcription getTranscription(id)

Get Transcription

Gets the transcription identified by the given ID.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the transcription.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTranscription(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the transcription. | 

### Return type

[**Transcription**](Transcription.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTranscriptionFile"></a>
# **getTranscriptionFile**
> File getTranscriptionFile(id, fileId, opts)

Get Transcription File

Gets one specific file (identified with fileId) from a transcription (identified with id).

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the transcription.

var fileId = "fileId_example"; // String | Format - uuid. The identifier of the file.

var opts = { 
  'sasValidityInSeconds': 56 // Number | Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTranscriptionFile(id, fileId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the transcription. | 
 **fileId** | **String**| Format - uuid. The identifier of the file. | 
 **sasValidityInSeconds** | **Number**| Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours. | [optional] 

### Return type

**File**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTranscriptionFiles"></a>
# **getTranscriptionFiles**
> PaginatedFiles getTranscriptionFiles(id, opts)

Get Transcription Files

Gets the files of the transcription identified by the given ID.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the transcription.

var opts = { 
  'sasValidityInSeconds': 56, // Number | Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours.
  'skip': 56, // Number | Format - int32. Number of files that will be skipped.
  'top': 56 // Number | Format - int32. Number of files that will be included after skipping.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTranscriptionFiles(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the transcription. | 
 **sasValidityInSeconds** | **Number**| Format - int32. The duration in seconds that an SAS url should be valid. The default duration is 12 hours. | [optional] 
 **skip** | **Number**| Format - int32. Number of files that will be skipped. | [optional] 
 **top** | **Number**| Format - int32. Number of files that will be included after skipping. | [optional] 

### Return type

[**PaginatedFiles**](PaginatedFiles.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTranscriptions"></a>
# **getTranscriptions**
> PaginatedTranscriptions getTranscriptions(opts)

Get Transcriptions

Gets a list of transcriptions for the authenticated subscription.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var opts = { 
  'skip': 56, // Number | Format - int32. Number of transcriptions that will be skipped.
  'top': 56 // Number | Format - int32. Number of transcriptions that will be included after skipping.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTranscriptions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**| Format - int32. Number of transcriptions that will be skipped. | [optional] 
 **top** | **Number**| Format - int32. Number of transcriptions that will be included after skipping. | [optional] 

### Return type

[**PaginatedTranscriptions**](PaginatedTranscriptions.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTranscriptionsForProject"></a>
# **getTranscriptionsForProject**
> PaginatedTranscriptions getTranscriptionsForProject(id, opts)

Get Transcriptions for Project

Gets the list of transcriptions for specified project.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the project.

var opts = { 
  'skip': 56, // Number | Format - int32. Number of transcriptions that will be skipped.
  'top': 56 // Number | Format - int32. Number of transcriptions that will be included after skipping.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTranscriptionsForProject(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the project. | 
 **skip** | **Number**| Format - int32. Number of transcriptions that will be skipped. | [optional] 
 **top** | **Number**| Format - int32. Number of transcriptions that will be included after skipping. | [optional] 

### Return type

[**PaginatedTranscriptions**](PaginatedTranscriptions.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="pingHook"></a>
# **pingHook**
> pingHook(id)

Ping Web Hook

The request body of the POST request sent to the registered web hook URL is of the same shape as in the GET request for a specific hook. The Swagger Schema ID of the model is WebHookV3.              The request will contain a X-MicrosoftSpeechServices-Event header with the value ping. If the web hook was registered with a secret it will contain a X-MicrosoftSpeechServices-Signature header with an SHA256 hash of the payload with the secret as HMAC key. The hash is base64 encoded.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the web hook to ping.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pingHook(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the web hook to ping. | 

### Return type

null (empty response body)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="testHook"></a>
# **testHook**
> testHook(id)

Test Web Hook

The payload will be generated from the last entity that would have invoked the web hook. If no entity is present for none of the registered event types, the POST will respond with 204. If a test request can be made, it will respond with 200. The request will contain a X-MicrosoftSpeechServices-Event header with the respective registered event type. If the web hook was registered with a secret it will contain a X-MicrosoftSpeechServices-Signature header with an SHA256 hash of the payload with the secret as HMAC key. The hash is base64 encoded.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the web hook to ping.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.testHook(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the web hook to ping. | 

### Return type

null (empty response body)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateDataset"></a>
# **updateDataset**
> Dataset updateDataset(id, opts)

Update Dataset

Updates the mutable details of the dataset identified by its ID.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the dataset.

var opts = { 
  'datasetUpdate': new SpeechToTextApiV30.DatasetUpdate() // DatasetUpdate | The updated values for the dataset.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDataset(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the dataset. | 
 **datasetUpdate** | [**DatasetUpdate**](DatasetUpdate.md)| The updated values for the dataset. | [optional] 

### Return type

[**Dataset**](Dataset.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: application/json, application/merge-patch+json
 - **Accept**: application/json

<a name="updateEndpoint"></a>
# **updateEndpoint**
> Endpoint updateEndpoint(id, opts)

Update Endpoint

Updates the metadata of the endpoint identified by the given ID.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the endpoint.

var opts = { 
  'endpointUpdate': new SpeechToTextApiV30.EndpointUpdate() // EndpointUpdate | The updated values for the endpoint.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateEndpoint(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the endpoint. | 
 **endpointUpdate** | [**EndpointUpdate**](EndpointUpdate.md)| The updated values for the endpoint. | [optional] 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: application/json, application/merge-patch+json
 - **Accept**: application/json

<a name="updateEvaluation"></a>
# **updateEvaluation**
> Evaluation updateEvaluation(id, opts)

Update Evaluation

Updates the mutable details of the evaluation identified by its id.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the evaluation.

var opts = { 
  'evaluationUpdate': new SpeechToTextApiV30.EvaluationUpdate() // EvaluationUpdate | The object containing the updated fields of the evaluation.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateEvaluation(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the evaluation. | 
 **evaluationUpdate** | [**EvaluationUpdate**](EvaluationUpdate.md)| The object containing the updated fields of the evaluation. | [optional] 

### Return type

[**Evaluation**](Evaluation.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: application/json, application/merge-patch+json
 - **Accept**: application/json

<a name="updateHook"></a>
# **updateHook**
> WebHook updateHook(id, opts)

Update Web Hook

If the property secret in the configuration is omitted or contains an empty string, future callbacks won't contain X-MicrosoftSpeechServices-Signature headers. If the property contains a non-empty string, it will be used to create a SHA256 hash of the payload with the secret as HMAC key. This hash will be set as X-MicrosoftSpeechServices-Signature header when calling back into the registered URL.              If the URL changes,  the web hook will stop receiving events until a challenge/response is completed. To do this, a request with the event type challenge will be made with a query parameter called validationToken. Respond to the challenge with a 200 OK containing the value of the validationToken query parameter as the response body. When the challenge/response is successfully completed, the web hook will begin receiving events.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the web hook.

var opts = { 
  'webHookUpdate': new SpeechToTextApiV30.WebHookUpdate() // WebHookUpdate | The updated values for the web hook.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateHook(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the web hook. | 
 **webHookUpdate** | [**WebHookUpdate**](WebHookUpdate.md)| The updated values for the web hook. | [optional] 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: application/json, application/merge-patch+json
 - **Accept**: application/json

<a name="updateModel"></a>
# **updateModel**
> Model updateModel(id, opts)

Update Model

Updates the metadata of the model identified by the given ID.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the model.

var opts = { 
  'modelUpdate': new SpeechToTextApiV30.ModelUpdate() // ModelUpdate | The updated values for the model.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateModel(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the model. | 
 **modelUpdate** | [**ModelUpdate**](ModelUpdate.md)| The updated values for the model. | [optional] 

### Return type

[**Model**](Model.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: application/json, application/merge-patch+json
 - **Accept**: application/json

<a name="updateProject"></a>
# **updateProject**
> Project updateProject(id, opts)

Update Project

Updates the project identified by the given ID.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the project.

var opts = { 
  'projectUpdate': new SpeechToTextApiV30.ProjectUpdate() // ProjectUpdate | The updated values for the project.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateProject(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the project. | 
 **projectUpdate** | [**ProjectUpdate**](ProjectUpdate.md)| The updated values for the project. | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: application/json, application/merge-patch+json
 - **Accept**: application/json

<a name="updateTranscription"></a>
# **updateTranscription**
> Transcription updateTranscription(id, opts)

Update Transcription

Updates the mutable details of the transcription identified by its ID.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var id = "id_example"; // String | Format - uuid. The identifier of the transcription.

var opts = { 
  'transcriptionUpdate': new SpeechToTextApiV30.TranscriptionUpdate() // TranscriptionUpdate | The updated values for the transcription.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTranscription(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Format - uuid. The identifier of the transcription. | 
 **transcriptionUpdate** | [**TranscriptionUpdate**](TranscriptionUpdate.md)| The updated values for the transcription. | [optional] 

### Return type

[**Transcription**](Transcription.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: application/json, application/merge-patch+json
 - **Accept**: application/json

<a name="uploadDatasetFromForm"></a>
# **uploadDatasetFromForm**
> Dataset uploadDatasetFromForm(opts)

Create Dataset from Form

Uploads data and creates a new dataset.

### Example
```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');
var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

var apiInstance = new SpeechToTextApiV30.DefaultApi();

var opts = { 
  'project': "project_example", // String | The optional string representation of the url of a project. If set, the dataset will be associated with that project.
  'displayName': "displayName_example", // String | The name of this data import (required).
  'description': "description_example", // String | Optional description of this data import.
  'locale': "locale_example", // String | The locale of this data import (required).
  'kind': "kind_example", // String | The kind of the data import (required).
  'customProperties': "customProperties_example", // String | The optional custom properties of this entity. The maximum allowed key length is 64 characters, the maximum allowed value length is 256 characters and the count of allowed entries is 10.
  'data': "/path/to/file.txt", // File | For acoustic data imports, a zip file containing the audio data and a text file containing the transcriptions for the audio data. for language data imports, a text file containing the language or pronunciation data. Required in both cases.
  'email': "email_example" // String | An optional string containing the email address to send email notifications to in case the operation completes. The value will be removed after successfully sending the email.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadDatasetFromForm(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **String**| The optional string representation of the url of a project. If set, the dataset will be associated with that project. | [optional] 
 **displayName** | **String**| The name of this data import (required). | [optional] 
 **description** | **String**| Optional description of this data import. | [optional] 
 **locale** | **String**| The locale of this data import (required). | [optional] 
 **kind** | **String**| The kind of the data import (required). | [optional] 
 **customProperties** | **String**| The optional custom properties of this entity. The maximum allowed key length is 64 characters, the maximum allowed value length is 256 characters and the count of allowed entries is 10. | [optional] 
 **data** | **File**| For acoustic data imports, a zip file containing the audio data and a text file containing the transcriptions for the audio data. for language data imports, a text file containing the language or pronunciation data. Required in both cases. | [optional] 
 **email** | **String**| An optional string containing the email address to send email notifications to in case the operation completes. The value will be removed after successfully sending the email. | [optional] 

### Return type

[**Dataset**](Dataset.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader), [apiKeyQuery](../README.md#apiKeyQuery)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

