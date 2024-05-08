# Welcome to the GreenTik API
This repository is the API for the GreenTik video sharing app. This readme will outline the routes, route parameters and various other functions of the API. A guide to deploy the app in a docker container is also included.

## Common route failure responses
  
**Failure Return**  
400 status message with Message.  
  
**Server Error**  
500 status with message.  

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
  
### GET /user/:uuid
**Desription**  
Route for getting user data.  

**Headers**  
Authorization(Attach JWT from login)
  
**Multipart/Formdata Body Params**  
Nil    
  
**Success Return**  
200 status and JSON Success Message with attached user data.  
  
### GET /groups/videos/:id/:uuid
**Desription**  
Route for getting all videos tagged to a group.  

**Headers**  
Authorization(Attach JWT from login)
  
**Multipart/Formdata Body Params**  
Nil    
  
**Success Return**  
200 status and JSON Success Message with attached group video data.  
  
### POST /groups
**Desription**  
Route for adding an interest group.  

**Headers**  
Authorization(Attach JWT from login)
  
**Multipart/Formdata Body Params**  
(required)Name  
(optional)Description  
(optional)Location   
(optional/image file)background  
  
**Success Return**  
200 status and JSON Success Message.  

### POST /groups/:id/join
**Desription**  
Route for joining an interest group.  

**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
(required)uuid  
  
**Success Return**  
200 status and JSON Success Message.  
  
### GET /groups/all/:uuid
**Desription**  
Route for getting all groups.  
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
Nil    
  
**Success Return**  
200 status and JSON Success Message with all groups.  
  
### GET /groups/:id/:uuid
**Desription**  
Route for getting a specific group by ID.  

**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
Nil    
  
**Success Return**  
200 status and JSON Success Message with attached group data.  
  
### GET /groups/user/:userid/:uuid
**Desription**  
Route for getting all groups a specific user has joined.  

**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
Nil    
  
**Success Return**  
200 status and JSON Success Message with attached user group data.  
  
### DELETE /groups/user
**Desription**  
Route for deleteing a user from a group.  
  
**Headers**  
Authorization(Attach JWT from login)  
   
**Multipart/Formdata Body Params**  
(admin, required)userId  
(required)uuid  
(required)groupId  
  
**Success Return**  
200 status and JSON Success Message.  
  
### GET /groups/category/:id/:uuid
**Desription**  
Route for getting category by cat id.  
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
Nil  
  
**Success Return**  
200 status and JSON Success Message with category data.  
  
### POST /categories
**Desription**  
Route add a new category.  
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
(required)Name   
(optional/image file)bgimage  
(optional/image file)iconimage  
  
**Success Return**  
200 status and JSON Success Message.  
  
### POST /login
**Desription**  
login route for app.  
  
**Headers**  
Nil
  
**Multipart/Formdata Body Params**  
(required)email  
(required)password  
  
**Success Return**  
200 status and JSON Success Message.  
  
## Admin Routes

### POST /sponsor  
**Desription**  
Adds sponsor.  
  
**Headers**  
Authorization(Attach JWT from login)
  
**Multipart/Formdata Body Params**  
(required)uuid  
(required)email  
(required)name  
(required)city  
(required)address  
(required)postcode  
(optional)pnumber  
(optional)descrition  
  
**Success Return**  
200 status and JSON Success Message.  
 
### PUT /sponsor  
**Desription**  
Updates sponsor.  
  
**Headers**  
Authorization(Attach JWT from login)
  
**Multipart/Formdata Body Params** 
(required)uuid
(optional)sid  
(optional)email  
(optional)name  
(optional)description  
(optional)city  
(optional)postcode  
(optional)address  
(optional)pnumber  
  
**Success Return**  
200 status and JSON Success Message.  
  
### GET /sponsor/all/:uuid  
**Desription**  
Returns all sponsors.  
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
Nil  
  
**Success Return**  
200 status and JSON Success Message and all Sponsors data.  
  
### GET /sponsor/:sid/:uuid  
**Desription**  
Gets a sponsor by id. 
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
Nil  
  
**Success Return**  
200 status and JSON Success Message and a single Sponsors data.  
  
### GET /sponsor/name/:name/:uuid  
**Desription**  
Gets a sponsor by name.  
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params** 
Nil  
  
**Success Return**  
200 status and JSON Success Message and a single Sponsors data.  
  
### GET /sponsor/videos/:sid/:uuid  
**Desription**  
Gets all sponsor videos.  
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params** 
Nil  
  
**Success Return**  
200 status and JSON Success Message and a single Sponsors video data.  
  
### DELETE /sponsor  
**Desription**  
Deletes a sponsor.  
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
(required)uuid  
(optional)sid  
  
**Success Return**  
200 status and JSON Success Message.  