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
Route for getting a groups category by cat id.  
  
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
  
### GET /categories/:id/:uuid
**Desription**  
Route to get a category by id.  
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
Nil
  
**Success Return**  
200 status and JSON Success Message with category data.  
  
### GET /categories/get/all/:uuid
**Desription**  
Route to get all categories by id.  
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
Nil
  
**Success Return**  
200 status and JSON Success Message with all category data.  
  
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
  
### POST /video
**Desription**  
Route upload a user or sponsor video.  
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
(admin, user, required)uuid  
(admin, user, required)title  
(admin, user, optional)description  
(admin, user, optional)groupId  
(admin, optional)weight  
(admin, optional)sid  
  
**Success Return**  
200 status and JSON Success Message.  
  
### DELETE /video
**Desription**  
Route for deleting a user video.  
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
(admin, user, required)uuid  
(admin, user, required)filename  
(admin, required)userId  
  
**Success Return**  
200 status and JSON Success Message.  
  
### GET /categories/get/all/:uuid
**Desription**  
Route to get all categories by id.  
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
Nil  
  
**Success Return**  
200 status and JSON Success Message with all category data.  
  
### DELETE /video
**Desription**  
Route for deleting a user video.  
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
(admin, user, required)uuid  
(admin, user, required)filename  
(admin, required)userId  
  
**Success Return**  
200 status and JSON Success Message.  
  
### GET /video/:fileName/:uuid
**Desription**  
Route to get a single user video.  
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
Nil  
  
**Success Return**  
200 status and JSON Success Message with a file SaS url.  
  
### POST /video/comment
**Desription**  
Route for adding a video comment.  
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
(required)uuid  
(required)videoId  
(required)comment  
(optional)replyId - ID of comment replying to  
  
**Success Return**  
200 status and JSON Success Message.  
  
### PUT /video/comment
**Desription**  
Route for updating a video comment.   
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
(required)uuid  
(required)commentId
(required)videoId  
(required)comment  
  
**Success Return**  
200 status and JSON Success Message.  
  
### DELETE /video/comment
**Desription**  
Route for adding a video comment.  
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params** 
(admin, required)userId  
(required)uuid  
(required)commentId  
  
**Success Return**  
200 status and JSON Success Message.  

### POST /groups/comment
**Desription**  
Route for adding a group comment.   
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
(required)uuid  
(required)groupId
(required)comment  
(optional)replyId - ID of comment replying to  
  
**Success Return**  
200 status and JSON Success Message.  
  
### PUT /groups/comment
**Desription**  
Route for updating a group comment.   
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
(required)uuid  
(required)groupId
(required)commentId  
(required)comment  
  
**Success Return**  
200 status and JSON Success Message.  
  
### DELETE /groups/comment
**Desription**  
Route for adding a video comment.  
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params** 
(admin, required)userId  
(required)uuid  
(required)commentId  
  
**Success Return**  
200 status and JSON Success Message.  
  
### GET /feed/:uuid
**Desription**  
Route to get a user post feed.  
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
Nil  
  
**Success Return**  
200 status and JSON Success Message with a user feed JSON.  
  
### POST /follow
**Desription**  
Route for adding a user follow.   
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
(required)uuid  
(required)uuidFollowing
  
**Success Return**  
200 status and JSON Success Message.  
  
### POST /like
**Desription**  
Route for adding a video like.   
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
(required)uuid  
(required)videoId  
  
**Success Return**  
200 status and JSON Success Message.  

### DELETE /like
**Desription**  
Route for deleting a video like.   
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params**  
(required)uuid  
(required)videoId  
  
**Success Return**  
200 status and JSON Success Message.  
  
## JWK and E-Mail validation routes
  
### GET /validate/:uuid
**Desription**  
Route for validating a user JWT.  
  
**Headers**  
Authorization(Attach JWT from login)
  
**Multipart/Formdata Body Params**  
Nil    
  
**Success Return**  
200 status and JSON Success Message with attached refreshed JWT.  
  
### GET /register/:token
**Desription**  
Route for validating a user E-Mail address the token must be the JWT sent in the E-Mail.  
  
**Headers**  
Nil  
  
**Multipart/Formdata Body Params**  
Nil  
  
**Success Return**  
200 status and JSON Success Message.  
 
### GET /register/renew/:token
**Desription**  
Route for sending a new E-Mail with validation URL. You must send the old token in the :token route param.
  
**Headers**  
Nil  
  
**Multipart/Formdata Body Params**  
Nil  
  
**Success Return**  
200 status and JSON Success Message.  
  
## Admin specific Routes
  
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
  
### GET /video/:fileName/:userId/:uuid
**Desription**  
Gets a user video SaS URL.  
  
**Headers**  
Authorization(Attach JWT from login)  
  
**Multipart/Formdata Body Params** 
Nil  
  
**Success Return**  
200 status and JSON Success Message and a single user video SaS url.  
