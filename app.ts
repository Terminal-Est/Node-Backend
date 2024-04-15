var cors = require('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer');
var cron = require('node-cron');
var bodyParser = require('body-parser');
var security = require('./controllers/securityController');
var fileLogging = require('./utils/logging');
var jwtHandler = require('./routes/validateJWT');
import { NextFunction, Request, Response } from "express";

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
        cb(null, file.fieldname + "_" + tstamp + path.extname(file.originalname));
    }
});

const avatarImage = multer.diskStorage({
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

    const mimetype: string = file.mimetype;

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
const avatarUpload = multer({ storage: avatarImage });

var app = express();

app.use(cors());

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// app logger
app.use(logger('dev'));
app.use(cookieParser());

// Get index router.
var indexRouter = require('./routes/index');
app.get('/', indexRouter);

// Post route for adding User.
var addUserRouter = require('./routes/addUser');
app.post('/user', avatarUpload.single('avatar'), addUserRouter);

// Put route for updating User.
var updateUserRouter = require('./routes/updateUser');
app.put('/user', jwtHandler.validateJWT, avatarUpload.single('avatar'), updateUserRouter);

// Get route for getting a User.
var getUserRouter = require('./routes/getUser');
app.get('/user/:id', (req: Request, res: Response, next: NextFunction) => {
    res.locals.uuid = req.params.id;
    next();
}, jwtHandler.validateJWT, getUserRouter);

// Delete route for deleting a User.
var deleteUserRouter = require('./routes/deleteUser');
app.delete('/user', fieldsOnly, deleteUserRouter);

// Get route to get all groups.
var getGroupsRouter = require('./routes/getGroups');
app.get('/groups', fieldsOnly, getGroupsRouter);

// Get route to get all videos by group ID.
var getGroupVideos = require('./routes/getGroupVideos');
app.get('/groups/videos/:id/:uuid', (req: Request, res: Response, next: NextFunction) => {
    res.locals.groupId = req.params.id;
    res.locals.uuid = req.params.uuid;
    next();
}, jwtHandler.validateJWT, fieldsOnly, getGroupVideos)

// Post route for users to join a group.
var joinGroupRouter = require('./routes/joinGroup');
app.post('/joingroup', fieldsOnly, joinGroupRouter);

// Get route for getting all categories
var getCategoriesRouter = require('./routes/getCategories')
app.get('/categories', fieldsOnly, getCategoriesRouter);

// Get login route. Returns a JWT.
var loginRouter = require('./routes/login');
app.post('/login', fieldsOnly, loginRouter);

// Post route for video upload
var addVideoRouter = require('./routes/addVideo');
app.post('/video', jwtHandler.validateJWT, uploads.single('video'), addVideoRouter);

// Delete video from storage.
var deleteVideoRouter = require('./routes/deleteVideo');
app.use('/video/delete', jwtHandler.validateJWT, fieldsOnly, deleteVideoRouter);

// Get Video SaS url.
var getVideoSas = require('./routes/getVideoSas');
app.get('/video/:id/:fileName', (req: Request, res: Response, next: NextFunction) => {
    res.locals.uuid = req.params.id;
    res.locals.filename = req.params.fileName;
    next();
}, jwtHandler.validateJWT, getVideoSas);

// Get user feed JSON.
var getUserFeed = require('./routes/getFeed');
app.get('/feed/:id', (req: Request, res: Response, next: NextFunction) => {
    res.locals.uuid = req.params.id;
    next();
}, jwtHandler.validateJWT, getUserFeed);

// Add a user follow.
var addUserFollow = require('./routes/addFollow');
app.post('/follow', jwtHandler.validateJWT, fieldsOnly, addUserFollow);

// Get likes for a video.
var getLikesRouter = require("./routes/getLikes");
app.get('/like/:videoid', (req: Request, res: Response, next: NextFunction) => {
    res.locals.videoid = req.params.videoid;
    next();
}, getLikesRouter);

// Add a user like to a video.
var addLikeRouter = require('./routes/addLike');
app.post('/like', fieldsOnly, addLikeRouter);

// Remove a user like for a video.
var deleteLikeRouter = require('./routes/deleteLike');
app.delete('/like', fieldsOnly, deleteLikeRouter);

// Get router for JWKS.
var jwksRouter = require('./routes/jwks');
app.get('/.well-known/jwks', jwksRouter);

// Get JWT Refresh token.
var getJWTRouter = require('./routes/getJWT');
app.get('/validate/:id', (req: Request, res: Response, next: NextFunction) => {
    res.locals.uuid = req.params.id;
    next();
}, jwtHandler.validateJWT, jwtHandler.issueJWT, getJWTRouter)

// Set app key switchRSA to true.
app.set('switchRSA', true);

// Init RSA keypairs.
getKeyPair1();
getKeyPair2();

function getKeyPair1() {
    security.getRSAKeypairs().then((handleFulfilled: { keyPair: any; jwk: any; }) => {
        app.set('KeySet1', handleFulfilled.keyPair);
        app.set('jwk1', handleFulfilled.jwk);
        app.set('onKey2', false);
        security.updateJWKendpoint(handleFulfilled.jwk, 0);
    }).catch((error: any) => {
        fileLogging.logToFile(error);
    });
}

function getKeyPair2() {
    security.getRSAKeypairs().then((handleFulfilled: { keyPair: any; jwk: any; }) => {
        app.set('KeySet2', handleFulfilled.keyPair);
        app.set('jwk2', handleFulfilled.jwk);
        app.set('onKey2', true);
        security.updateJWKendpoint(handleFulfilled.jwk, 1);
    }).catch((error: any) => {
        fileLogging.logToFile(error);
    });
}

var getRSA1 = cron.schedule('* * * Jan,Mar,May,Jul,Sep,Nov Sun', () => {
    getKeyPair1();
}, {
    scheduled: true,
    timezone: "Australia/Melbourne"
});

var getRSA2 = cron.schedule('* * * Feb,Apr,Jun,Aug,Oct,Dec Sun', () => {
   getKeyPair2();
}, {
    scheduled: true,
    timezone: "Australia/Melbourne"
});

// TODO: Add admin path for stopping starting RSA rotation
function startRsaRotation() {
    getRSA1.start();
    getRSA2.start();
}

function stopRsaRotation() {
    getRSA1.stop();
    getRSA2.stop();
}

// Start RSA rotation.
startRsaRotation();

module.exports = app;