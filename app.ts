var cors = require('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer');
var bodyParser = require('body-parser');
var jwtHandler = require('./routes/validateJWT');
import { NextFunction, Request, Response } from "express";
import { emailMiddleware } from "./routes/getNewEmailAuth";
import { getRSAKeypairs, updateJWKendpoint } from "./controllers/securityController";
import { logToFile } from "./utils/logging";

// Multer disk storage.
const storage = multer.diskStorage({
    fileFilter: function (req: any, file: any, cb: any) {
        mimeTypeCheck(req, file, cb);
    },
    limits: {
        fileSize: 100000000
    },
    destination: function(req: any, file: any, cb: any) {
        cb(null, './videos');
    },
    filename: function (req: any, file: any, cb: any) {
       
        const tstamp: string = Date.now().toString();
        var fname: string = file.fieldname;

        cb(null, fname + "_" + tstamp + path.extname(file.originalname));
    }
});

const imageStore = multer.diskStorage({
    fileFilter: function(req: any, file: any, cb: any) {
        imageMimeTypeCheck(req, file, cb);
    },
    limits: {
        // Limit file size to 5 meg.
        fileSize: 5000000
    },
    destination: function(req: any, file: any, cb: any) {
        cb(null, './images');
    },
    filename: function (req: any, file: any, cb: any) {
        const tstamp: string = Date.now().toString();
        cb(null, file.fieldname + "_" + tstamp + path.extname(file.originalname));
    }
})

// check image mime types
function imageMimeTypeCheck(req: any, file: any, cb: any) {

    if (file.mimetype.toLowerCase() == "image/png" || 
        file.mimetype.toLowerCase() == "image/jpg" || 
        file.mimetype.toLowerCase == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
        }
}

// Check video mime types. Must be .mov or .mp4.
function mimeTypeCheck(req: any, file: any, cb: any) {

    const mimetype: string = file.mimetype;

    if (mimetype.toLowerCase() == "video/mp4" || 
        mimetype.toLowerCase() == "video/quicktime") {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

// Multer for pulling form data from multipart/form-data
const fieldsOnly = multer().none();
// Multer for temp storage of video uploads.
const uploads = multer({ storage: storage });
// Middleware for adding array of images to request of a size of 2.
const imageUpload = multer({ storage: imageStore });

var app = express();

app.use(cors());

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// app logger
app.use(logger('dev'));
app.use(cookieParser());

/**
 * All General Routes go here.
 * ---------------------------
 */

// Admin validation route.
var adminValidationRouter = require('./routes/admin/validateAdmin');

// Get index router.
var indexRouter = require('./routes/index');
app.get('/', indexRouter);

// Post route for adding User.
var getIPRouter = require('./routes/validateIP');
var addUserRouter = require('./routes/addUser');
app.post('/user', imageUpload.single('avatar'), /**getIPRouter,**/ addUserRouter);

// Put route for updating User.
var updateUserRouter = require('./routes/updateUser');
app.put('/user', imageUpload.single('avatar'), adminValidationRouter, jwtHandler.validateJWT, updateUserRouter);

// Get route for getting a User.
var getUserRouter = require('./routes/getUser');
app.get('/user/:uuid', (req: Request, res: Response, next: NextFunction) => {
    res.locals.uuid = req.params.uuid;
    next();
}, jwtHandler.validateJWT, getUserRouter);

// Get route to get all videos by group ID.
var getGroupVideos = require('./routes/getGroupVideos');
app.get('/groups/videos/:id/:uuid', (req: Request, res: Response, next: NextFunction) => {
    res.locals.groupId = req.params.id;
    res.locals.uuid = req.params.uuid;
    next();
}, jwtHandler.validateJWT, getGroupVideos);

// Post route for users to join a group.
var addGroupRouter = require('./routes/addGroup');
app.post('/groups', imageUpload.single('background'), jwtHandler.validateJWT , addGroupRouter);

// Post group for joining group.
var joinGroupRouter = require('./routes/joinGroup');
app.post('/groups/:id/join', (req: Request, res: Response, next: NextFunction) => {
    res.locals.groupid = req.params.id;
    next();
}, fieldsOnly, jwtHandler.validateJWT, joinGroupRouter);

// Get route for getting groups.
var getGroupsRouter = require('./routes/getGroups');
app.get('/groups/all/:uuid', (req: Request, res: Response, next: NextFunction) => {
    res.locals.uuid = req.params.uuid;
    next();
}, jwtHandler.validateJWT, getGroupsRouter);

// Get route for getting groups by ID
var getGroupsIdRouter = require('./routes/getGroupsId');
app.get('/groups/:id/:uuid', (req: Request, res: Response, next: NextFunction) => {
    res.locals.id = req.params.id;
    res.locals.uuid = req.params.uuid;
    next();
}, jwtHandler.validateJWT, getGroupsIdRouter);

// Get route for getting groups by user ID
var getGroupsByUserIDRouter = require('./routes/getGroupsByUserID');
app.get('/groups/user/:userid/:uuid', (req: Request, res: Response, next: NextFunction) => {
    res.locals.userid = req.params.userid;
    res.locals.uuid = req.params.uuid;
    next();
}, jwtHandler.validateJWT, getGroupsByUserIDRouter);

// Delete route to delete a user from a group.
var deleteUserGroupRouter = require('./routes/deleteUserFromGroup');
app.delete('/groups/user', fieldsOnly, adminValidationRouter, jwtHandler.validateJWT, deleteUserGroupRouter);

// Get route for getting groups by CategoryID
var getGroupsByCategoryRouter = require('./routes/getGroupsByCategory');
app.get('/groups/category/:id/:uuid', (req: Request, res: Response, next: NextFunction) => {
    res.locals.id = req.params.id;
    res.locals.uuid = req.params.uuid;
    next();
}, jwtHandler.validateJWT, getGroupsByCategoryRouter);

// Post route to add a category.
const catimages = imageUpload.fields([{ name: 'bgimage', maxcount: 1 }, { name: 'iconimage', maxcount: 1 }]);
var addCategoryRouter = require('./routes/addCategory');
app.post('/categories', catimages, jwtHandler.validateJWT, addCategoryRouter);

// Gets a category by id.
var getCategoryRouter = require('./routes/getCategory');
app.get('/categories/:id/:uuid', (req: Request, res: Response, next: NextFunction) => {
    res.locals.id = req.params.id;
    res.locals.uuid = req.params.uuid;
    next();
}, jwtHandler.validateJWT, getCategoryRouter);

// Gets all categories.
var getCategoriesRouter = require('./routes/getCategories');
app.get('/categories/get/all/:uuid', (req: Request, res: Response, next: NextFunction) => {
    res.locals.uuid = req.params.uuid;
    next();
}, jwtHandler.validateJWT, getCategoriesRouter);

// Get login route. Returns a JWT.
var loginRouter = require('./routes/login');
app.post('/login', fieldsOnly, loginRouter);

// Post route for video upload
var addVideoRouter = require('./routes/addVideo');
app.post('/video', uploads.single('video'), adminValidationRouter, jwtHandler.validateJWT, addVideoRouter);

// Delete video from storage.
var deleteVideoRouter = require('./routes/deleteVideo');
app.delete('/video/delete', fieldsOnly, adminValidationRouter, jwtHandler.validateJWT, deleteVideoRouter);

// Get Video SaS url.
var getVideoSas = require('./routes/getVideoSas');
app.get('/video/:fileName/:uuid', (req: Request, res: Response, next: NextFunction) => {
    res.locals.filename = req.params.fileName;
    res.locals.uuid = req.params.uuid;
    next();
}, jwtHandler.validateJWT, getVideoSas);

/**
 * Comment routes start here.
 * --------------------------
 */

// Post video comment route.
var addVideoCommentRouter = require('./routes/addVideoComment');
app.post('/video/comment', fieldsOnly, jwtHandler.validateJWT, addVideoCommentRouter);

// Put route for updating video comment.
var updateVideoCommentRouter = require('./routes/updateUserVideoComment');
app.put('/video/comment', fieldsOnly, jwtHandler.validateJWT, updateVideoCommentRouter);

// Delete video comment from database.
var deleteVideoCommentRouter = require('./routes/deleteUserVideoComment');
app.delete('/video/comment', fieldsOnly, adminValidationRouter, jwtHandler.validateJWT, deleteVideoCommentRouter);

// Post group comment route.
var addGroupCommentRouter = require('./routes/addGroupComment');
app.post('/groups/comment', fieldsOnly, jwtHandler.validateJWT, addGroupCommentRouter);

// Put route for updating group comment.
var updateGroupCommentRouter = require('./routes/updateUserGroupComment');
app.put('/groups/comment', fieldsOnly, jwtHandler.validateJWT, updateGroupCommentRouter);

// Delete group comment from database.
var deleteGroupCommentRouter = require('./routes/deleteUserGroupComment');
app.delete('/groups/comment', fieldsOnly, adminValidationRouter, jwtHandler.validateJWT, deleteGroupCommentRouter);

// Get user feed JSON.
var getUserFeed = require('./routes/getFeed');
app.get('/feed/:uuid', (req: Request, res: Response, next: NextFunction) => {
    res.locals.uuid = req.params.uuid;
    next();
}, jwtHandler.validateJWT, getUserFeed);

/**
 * User follow routes go here.
 * ---------------------------
 */

// Add a user follow.
var addUserFollow = require('./routes/addFollow');
app.post('/follow', fieldsOnly, jwtHandler.validateJWT, addUserFollow);

/**
 * Like routes go here.
 * --------------------
 */

// Get likes for a video.
var getLikesRouter = require("./routes/getLikes");
app.get('/like/:videoid/:uuid', (req: Request, res: Response, next: NextFunction) => {
    res.locals.videoid = req.params.videoid;
    res.locals.uuid = req.params.uuid;
    next();
}, jwtHandler.validateJWT, getLikesRouter);

// Add a user like to a video.
var addLikeRouter = require('./routes/addLike');
app.post('/like', fieldsOnly, jwtHandler.validateJWT, addLikeRouter);

// Remove a user like for a video.
var deleteLikeRouter = require('./routes/deleteLike');
app.delete('/like', fieldsOnly, jwtHandler.validateJWT, deleteLikeRouter);

/**
 * JWT an e-mail validation routes go here.
 * ----------------------------------------
 */

// Get router for JWKS.
var jwksRouter = require('./routes/jwks');
app.get('/.well-known/jwks', jwksRouter);

// Get JWT Refresh token.
var getJWTRouter = require('./routes/getJWT');
app.get('/validate/:uuid', (req: Request, res: Response, next: NextFunction) => {
    res.locals.uuid = req.params.uuid;
    next();
}, jwtHandler.validateJWT, jwtHandler.issueJWT, getJWTRouter);

// Get route for validating e-mail addresses.
var getEmailValidationRouter = require('./routes/getEmailValidation');
app.get('/register/:token', (req: Request, res: Response, next: NextFunction) => {
    res.locals.token = req.params.token;
    next();
}, getEmailValidationRouter);

// Get route for getting new e-mail validation token.
var validateEmailTokenRouter = require('./routes/validateEmailToken');
app.get('/register/renew/:token', 
    (req: Request, res: Response, next: NextFunction) => {
        res.locals.token = req.params.token;
        next();
    }, 
    validateEmailTokenRouter, 
    emailMiddleware, 
    (req: Request, res: Response) => {
        res.status(200).json({
            Message: "E-mail Verification Sent."
        });
    }, 
);

/**
 * All Admin Routes go here
 * ------------------------
 */

// Delete route for deleting a User.
var deleteUserRouter = require('./routes/admin/deleteUser');
app.delete('/user', (req: Request, res: Response, next: NextFunction) => {
    res.locals.adminOnlyRoute = true;
    next();
}, fieldsOnly, jwtHandler.validateJWT, adminValidationRouter, deleteUserRouter);

// Get route for getting a User (admin).
var getUserRouter = require('./routes/getUser');
app.get('/user/:uuid/:userId', (req: Request, res: Response, next: NextFunction) => {
    res.locals.uuid = req.params.uuid;
    res.locals.userId = req.params.userId;
    res.locals.adminOnlyRoute = true;
    next();
}, jwtHandler.validateJWT, adminValidationRouter, getUserRouter);

// Get route to get all users.
var getAllUsersRouter = require('./routes/admin/getAllUsers');
app.get('/users/all/:uuid', (req: Request, res: Response, next: NextFunction) => {
    res.locals.uuid = req.params.uuid;
    res.locals.adminOnlyRoute = true;
    next();
}, jwtHandler.validateJWT, adminValidationRouter, getAllUsersRouter);

// Put route to ban user from app.
var userBanRouter = require('./routes/admin/updateUserBan')
app.put('/users/ban', fieldsOnly, (req: Request, res: Response, next: NextFunction) => {
    res.locals.adminOnlyRoute = true;
    next();
}, jwtHandler.validateJWT, adminValidationRouter, userBanRouter);

// Put route to ban user from a group.
var updateUserGroupBanRouter = require('./routes/admin/updateUserGroupBan');
app.put('/users/ban/group', fieldsOnly, (req: Request, res: Response, next: NextFunction) => {
    res.locals.adminOnlyRoute = true;
    next();
}, jwtHandler.validateJWT, adminValidationRouter, updateUserGroupBanRouter);

// Get route to get all posts
var getAllCommentsRouter =  require('./routes/admin/getAllComments')
app.get('/comments/:uuid', (req: Request, res: Response, next: NextFunction) => {
    res.locals.uuid = req.params.uuid;
    res.locals.adminOnlyRoute = true;
    next();
}, jwtHandler.validateJWT, adminValidationRouter, getAllCommentsRouter);

// Post route for adding a sponsor
var addSponsorRouter = require('./routes/admin/addSponsor');
app.post('/sponsor', (req: Request, res: Response, next: NextFunction) => {
    res.locals.adminOnlyRoute = true;
    next();
}, fieldsOnly, jwtHandler.validateJWT, adminValidationRouter, addSponsorRouter);

// Delete route for deleting sponsor
var deleteSponsorRouter = require('./routes/admin/deleteSponsor');
app.delete('/sponsor', (req: Request, res: Response, next: NextFunction) => {
    res.locals.adminOnlyRoute = true;
    next();
}, fieldsOnly, jwtHandler.validateJWT, adminValidationRouter, deleteSponsorRouter);

// Get route to get all sponsors
var getAllSponsorsRouter = require('./routes/admin/getAllSponsors')
app.get('/sponsor/all/:uuid', (req: Request, res: Response, next: NextFunction) => {
    res.locals.uuid = req.params.uuid;
    res.locals.adminOnlyRoute = true;
    next();
}, jwtHandler.validateJWT, adminValidationRouter, getAllSponsorsRouter);

// Get route to get sponsor by name
var getSponsorNameRouter = require('./routes/admin/getSponsorName')
app.get('/sponsor/name/:name/:uuid', (req: Request, res: Response, next: NextFunction) => {
    res.locals.uuid = req.params.uuid;
    res.locals.name = req.params.name;
    res.locals.adminOnlyRoute = true;
    next();
}, jwtHandler.validateJWT, adminValidationRouter, getSponsorNameRouter);

// Get route to get sponsor by SID
var getSponsorSIDRouter = require('./routes/admin/getSponsorSID')
app.get('/sponsor/sid/:sid/:uuid', (req: Request, res: Response, next: NextFunction) => {
    res.locals.uuid = req.params.uuid;
    res.locals.sid = req.params.sid;
    res.locals.adminOnlyRoute = true;
    next();
}, jwtHandler.validateJWT, adminValidationRouter, getSponsorSIDRouter);

// Get route to get sponsor by SID
var getSponsorVideosRouter = require('./routes/admin/getSponsorVideos')
app.get('/sponsor/videos/:sid/:uuid', (req: Request, res: Response, next: NextFunction) => {
    res.locals.uuid = req.params.uuid;
    res.locals.sid = req.params.sid;
    res.locals.adminOnlyRoute = true;
    next();
}, jwtHandler.validateJWT, adminValidationRouter, getSponsorVideosRouter);

// Get Video SaS url admin.
var getVideoSas = require('./routes/getVideoSas');
app.get('/video/:fileName/:userId/:uuid', (req: Request, res: Response, next: NextFunction) => {
    res.locals.filename = req.params.fileName;
    res.locals.userId = req.params.userId;
    res.locals.uuid = req.params.uuid;
    next();
}, jwtHandler.validateJWT, adminValidationRouter, getVideoSas);

/**
 * App Utility functions go here
 * -----------------------------
 */

// Set keypairs on Start Up.
function appKeyPair (keySet: string, jwk: string) {
    getRSAKeypairs().then((handleFulfilled: { keyPair: any; jwk: any; }) => {
        app.set(keySet, handleFulfilled.keyPair);
        app.set(jwk, handleFulfilled.jwk);
        updateJWKendpoint(handleFulfilled.jwk, 0);
        logToFile(app.get(jwk));
    }).catch((error: any) => {
        logToFile(error);
    });
}

appKeyPair('KeySet1', 'jwk1');
appKeyPair('KeySet2', 'jwk2');

// Get KeySet 1 for signing JWTs.
const getKeyPair1 = (req: Request, res: Response, next: NextFunction) => {
    getRSAKeypairs().then((handleFulfilled: { keyPair: any; jwk: any; }) => {
        req.app.set('KeySet1', handleFulfilled.keyPair);
        req.app.set('jwk1', handleFulfilled.jwk);
        updateJWKendpoint(handleFulfilled.jwk, 0);
        logToFile(app.get('jwk1'));
        next();
    }).catch((error: any) => {
        logToFile(error);
    });
}

// Get KeySet 2 for signing JWTs.
const getKeyPair2 = (req: Request, res: Response, next: NextFunction) => {
    getRSAKeypairs().then((handleFulfilled: { keyPair: any; jwk: any; }) => {
        req.app.set('KeySet2', handleFulfilled.keyPair);
        req.app.set('jwk2', handleFulfilled.jwk);
        updateJWKendpoint(handleFulfilled.jwk, 1);
        logToFile(app.get('jwk2'));
        next();
    }).catch((error: any) => {
        logToFile(error);
    });
}


const refreshJWKs = ((req: Request, res: Response) => {
    res.status(200).json({
        Message: "JWKs Refreshed."
    })
});

// Route for refreshing JWKS.
app.put('/jwk/refresh', (req: Request, res: Response, next: NextFunction) => {
    res.locals.adminOnlyRoute = true;
    next();
}, fieldsOnly, jwtHandler.validateJWT, adminValidationRouter, getKeyPair1, getKeyPair2, refreshJWKs);


module.exports = app;