# Welcome to the GreenTik API
This repository is the API for the GreenTik video sharing app. This readme will outline the routes, route parameters and various other functions of the API. A guide to deploy the app in a docker container is also included.

## Routes
This section includes all the routes for the API with what HTTP verbs and parameters are expected. The routes are ordered as they appear in the app.js file.

### GET /
Retruns the landing page for the API.

### POST /user
**Desription**  
route for adding a user.  
  
**Multipart/Formdata Body Params**  
(required)email  
(required)password  
(required)username  
(required)dob  
(required)address  
(required)city  
(required)state  
(required)postcode  
(optional)fname  
(optional)lname  
(optional/image file)avatar  
  
**Success Return**  
200 status and JSON Success Message.  
  
**Failure Return**  
400 status message with Message.  
  
**Server Error**  
500 status with message.  

### PUT /user
**Desription**  
route for editing a user.  

**Headers**  
Authorization(Attach JWT from login)
  
**Multipart/Formdata Body Params**  
(required)uuid  
(optional)email  
(optional)address  
(optional)city  
(optional)state  
(optional)postcode  
(optional)fname  
(optional)lname  
(optional/image file)avatar  
  
**Success Return**  
200 status and JSON Success Message.  
  
**Failure Return**  
400 status message with Message.  
  
**Server Error**  
500 status with message.  

### GET /user/:uuid
**Desription**  
route for getting user data.  

**Headers**  
Authorization(Attach JWT from login)
  
**Multipart/Formdata Body Params**  
nil    
  
**Success Return**  
200 status and JSON Success Message with attached user data.  
  
**Failure Return**  
400 status message with Message.  
  
**Server Error**  
500 status with message.  

### GET /groups/videos/:id/:uuid
**Desription**  
route for getting all videos tagged to a group.  

**Headers**  
Authorization(Attach JWT from login)
  
**Multipart/Formdata Body Params**  
nil    
  
**Success Return**  
200 status and JSON Success Message with attached group video data.  
  
**Failure Return**  
400 status message with Message.  
  
**Server Error**  
500 status with message.  

### POST /groups
**Desription**  
route for addin an interest group.  

**Headers**  
Authorization(Attach JWT from login)
  
**Multipart/Formdata Body Params**  
(required)Name  
(optional)Description  
(optional)Location   
(optional/image file)background      
  
**Success Return**  
200 status and JSON Success Message with attached group video data.  
  
**Failure Return**  
400 status message with Message.  
  
**Server Error**  
500 status with message. 

### POST /login
**Desription**  
login route for app.  
  
**Multipart/Formdata Body Params**  
email  
password  
  
**Success Return**  
200 status and JSON Success Message with JWT.  
  
**Failure Return**  
400 status message with Message.  
  
**Server Error**  
500 status with message.  


