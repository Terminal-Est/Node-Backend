/** 
 * Code concepts within courtesy of Microsoft Cognitive Srevices.
 */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
// @ts-nocheck

"use strict";
import { moderate } from "./contentModeratorController";
import { flagVideo } from "./fileController";
var SpeechToTextApiV30 = require("speech_to_text_api_v30");
var sleep = require("system-sleep");
var defaultClient = SpeechToTextApiV30.ApiClient.instance;
var request = require("request");

// Create API Instance
var apiInstance = new SpeechToTextApiV30.DefaultApi();
// Your subscription key and region for the speech service

var API_KEY = process.env.API_KEY;
var NAME = "Simple transcription";
var DESCRIPTION = "Simple transcription description";
var LOCALE = process.env.LOCALE;
// provide the service region
var SERVICE_REGION = process.env.SERVICE_REGION;
var DEFAULTPATH =
  "https://" +
  SERVICE_REGION +
  ".api.cognitive.microsoft.com/speechtotext/v3.0";
var VIDEO_ID = "";

// Provide the SAS URI of the audio file stored in Azure Blob Storage
var callbackGetTrans = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(
      "Callback Get Transcription API called successfully. Returned data: " +
        JSON.stringify(data)
    );
    var tid = data.self.substring(data.self.lastIndexOf("/") + 1);
    console.log("Transcription Id " + tid);
    let status = _checkComplete(tid);
    if (status == "Succeeded") {
      var opts = _getTranscriptionFiles();
      apiInstance.getTranscriptionFiles(tid, opts, callbackGetTransFiles);
    } else if (data.status == "Failed")
      console.log(
        "Transcription failed: {transcription.properties.error.message}"
      );
  } // end else
}; // end callbackGetTrans

var callbackGetTransFiles = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(
      "callbackGetTransFiles API called successfully. Returned data: " +
        JSON.stringify(data)
    );
    let pag_files = data.values;
    for (var i = 0; i < pag_files.length; i++) {
      var file_data = pag_files[i];
      var url = file_data.links.contentUrl;
      if (file_data.kind !== "Transcription") {
        continue;
      } else {
        request(url, { json: true }, async function (err, body) {
          if (err) {
            return console.log(err);
          } else {
            var response = JSON.stringify(body);
            var trJSON = JSON.parse(response);
            try {
              var screen = await moderate(trJSON.body.combinedRecognizedPhrases[0].lexical);
              if (screen.classification.reviewRecommended) {
                  _flagVideoForReview();
              }
            } catch {
              console.log("Transcribe returned no hits.");
            }
          } // end else
        }); // end request
      } // end else
    } // end for
  } // end else
}; // end callbackGetTransFiles

export function _transcribe(sasURL, videoId) {
  VIDEO_ID = videoId;
  console.log(DEFAULTPATH);
  // Configure API key authorization: apiKeyHeader
  var apiKeyHeader = defaultClient.authentications["apiKeyHeader"];
  apiKeyHeader.apiKey = API_KEY;
  // Configure API key authorization: apiKeyQuery
  var apiKeyQuery = defaultClient.authentications["apiKeyQuery"];
  apiKeyQuery.apiKey = API_KEY;

  defaultClient.basePath = DEFAULTPATH;

  // transcribe one file. - only one method of transcription can be used- _transcribeFromSingleBlob or _transcribeFromContainer
  var opts = _transcribeFromSingleBlob(sasURL);

  // Uncomment this block to transcribe all files from a container. Comment the previous block - _transcribeFromSingleBlob when this is uncommented
  // var opts = _transcribeFromContainer(RECORDINGS_CONTAINER_URI);

  apiInstance.createTranscription(opts, function (error, data, response) {
    if (error) {
      console.error(error);
    } else {
      var completed = false;
      var tid = data.self.substring(data.self.lastIndexOf("/") + 1);
      console.log("Transcription ID created is : " + tid);
      apiInstance.getTranscription(tid, callbackGetTrans);
    } // end else
  }); // end createTranscription
} // end of _transcribe()

// GET transcriptions API returns transcription as pages (of 100 entities by default).
// Call this function multiple times; or implement the paged call.
export function _deleteAllTranscriptions() {
  // Delete all transcriptions associated with your speech resource.
  console.log("Deleting all existing completed transcriptions.");
  // Configure API key authorization: apiKeyHeader
  var apiKeyHeader = defaultClient.authentications["apiKeyHeader"];
  apiKeyHeader.apiKey = API_KEY;
  // Configure API key authorization: apiKeyQuery
  var apiKeyQuery = defaultClient.authentications["apiKeyQuery"];
  apiKeyQuery.apiKey = API_KEY;

  defaultClient.basePath = DEFAULTPATH;

  // get all transcriptions for the subscription
  var opts = {};
  var callback = function (error, data, response) {
    if (error) {
      console.error(error);
    } else {
      // uncomment to display the response of Delete All transcriptions
      // console.log('Delete all transcriptions API called successfully. Returned data: ' + JSON.stringify(data));
      pag_files = data.values;
      console.log(" Total number of transcriptions : " + pag_files.length);
      for (var i = 0; i < pag_files.length; i++) {
        var file_data = pag_files[i];
        var tid = file_data.self.substring(file_data.self.lastIndexOf("/") + 1);
        if (file_data.status == "Succeeded" || file_data.status == "Failed") {
          console.log(
            "Deleting Transcription with status failed or success " + tid
          );
          var callback = function (error, data, response) {
            if (error) {
              console.error(error);
            } else {
              console.log(
                "Transcription deleted - API called successfully." + tid
              );
            } //end else
          }; //end callback
          //api to delete the transcription
          apiInstance.deleteTranscription(tid, callback);
        } //end if
        else {
          console.log("Status running" + file_data.status);
        }
      } //end for
    } //end else
  }; // end callback
  apiInstance.getTranscriptions(opts, callback);
} // end deleteAllTranscriptions

function _getTranscriptionFiles() {
  var opts = {
    // Transcription | The details of the new transcription.
    transcription: new SpeechToTextApiV30.Transcription(),
  }; //end opts
  return opts;
}

function _transcribeFromSingleBlob(uri) {
  var opts = {
    // Transcription | The details of the new transcription.
    transcription: new SpeechToTextApiV30.Transcription(),
  };
  opts.transcription = {
    contentUrls: [uri],
    properties: {
      wordLevelTimestampsEnabled: false,
      profanityFilterMode: "None",
    },
    locale: LOCALE,
    displayName: NAME + new Date(),
    description: DESCRIPTION,
  };
  return opts;
} // end of _transcribeFromSingleBlob

/**
function _transcribeFromContainer(uri) {
  console.log("_transcribeFromContainer");
  var opts = {
    // Transcription | The details of the new transcription.
    transcription: new SpeechToTextApiV30.Transcription(),
  };
  opts.transcription = {
    contentContainerUrl: uri,
    properties: {
      wordLevelTimestampsEnabled: true,
      profanityFilterMode: "None",
    },
    locale: LOCALE,
    displayName: NAME + new Date(),
    description: DESCRIPTION,
  };
  return opts;
} // end of _transcribeFromSingleBlob
**/

function _checkComplete(tid) {
  var status;
  var completed = false;
  while (completed != true) {
    // wait for 5 seconds before refreshing the transcription status
    sleep(500);
    apiInstance.getTranscription(tid, function (error, data, response) {
      console.log("Transcription Status is ", data.status);
      status = data.status;
      if (error) {
        console.error(error);
        completed = true;
      } else {
        if (status == "Failed" || status == "Succeeded") completed = true;
      }
    });
  } // end while
  return status;
}

async function _flagVideoForReview() {
   var updated = await flagVideo(VIDEO_ID, true);
   console.log(updated);
}