# Welcome to the GreenTik API
This repository is the API for the GreenTik video sharing app. This readme will outline the routes, route parameters and various other functions of the API. A guide to deploy the app in a docker container is also included.

## Routes
This section includes all the routes for the API with what HTTP verbs and parameters are expected.

### GET /
Retruns the landing page for the API.

### POST /login
**Desription**\n
login route for app.\n
**Multipart/Formdata Body Params**\n
email\n
password\n
**Success Return**\n
200 status and JSON Success Message with JWT.\n
**Failure Return**\n
400 status message with Message.\n
**Server Error**\n
500 status with message.\n

