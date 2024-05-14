# SpeechToTextApiV30.EvaluationProperties

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wordErrorRate2** | **Number** | The word error rate of recognition with model2. | [optional] 
**wordErrorRate1** | **Number** | The word error rate of recognition with model1. | [optional] 
**sentenceErrorRate2** | **Number** | The sentence error rate of recognition with model2. | [optional] 
**sentenceCount2** | **Number** | The number of processed sentences by model2. | [optional] 
**wordCount2** | **Number** | The number of processed words by model2. | [optional] 
**correctWordCount2** | **Number** | The number of correctly recognized words by model2. | [optional] 
**wordSubstitutionCount2** | **Number** | The number of recognized words by model2, that are substitutions. | [optional] 
**wordDeletionCount2** | **Number** | The number of recognized words by model2, that are deletions. | [optional] 
**wordInsertionCount2** | **Number** | The number of recognized words by model2, that are insertions. | [optional] 
**sentenceErrorRate1** | **Number** | The sentence error rate of recognition with model1. | [optional] 
**sentenceCount1** | **Number** | The number of processed sentences by model1. | [optional] 
**wordCount1** | **Number** | The number of processed words by model1. | [optional] 
**correctWordCount1** | **Number** | The number of correctly recognized words by model1. | [optional] 
**wordSubstitutionCount1** | **Number** | The number of recognized words by model1, that are substitutions. | [optional] 
**wordDeletionCount1** | **Number** | The number of recognized words by model1, that are deletions. | [optional] 
**wordInsertionCount1** | **Number** | The number of recognized words by model1, that are insertions. | [optional] 
**email** | **String** | The email address to send email notifications to in case the operation completes.  The value will be removed after successfully sending the email. | [optional] 
**error** | [**EntityError**](EntityError.md) | The details of the error in case the entity is in a failed state. | [optional] 


