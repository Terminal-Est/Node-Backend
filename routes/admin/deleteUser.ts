import { NextFunction, Request, Response } from "express";
import { deleteBlobStorageContainer } from "../../controllers/fileController";
import { deleteUserPII, deleteUserData } from "../../controllers/userController";
import { DeleteResult } from "typeorm";
var express = require('express');
var router = express.Router();

router.use((req: Request, res : Response, next: NextFunction) => { 
    
    const idToDelete: string = req.body.userId;
    var deletePii: DeleteResult;
    var deleteDataUuid: DeleteResult;

    deleteUserPII(idToDelete).then((handleFulfilled) => {
        
        deletePii = handleFulfilled;

        deleteUserData(idToDelete).then((handleFulfilled) => {

            deleteDataUuid = handleFulfilled;

            deleteBlobStorageContainer("u-" + idToDelete).then((handleFulfilled) => {
                res.status(200).json({
                    Message: "Delete User Container Server Error",
                    StorageReqId: handleFulfilled,
                    PiiDeleted: deletePii,
                    DataUUID: deleteDataUuid
                });
            })
            .catch((err) => {
                res.status(500).json({
                    Message: "Delete User Container Server Error",
                    Detail: err.details
                });
            });
        }, (handleRejected) => {
            res.status(400).json({
                Message: "User Not Found On Data DB.",
                Detail: handleRejected
            });
        }).catch((err) => {
            res.status(500).json({
                Message: "Delete Data UUID Server Error",
                Detail: err
            });
        });
    }, (handleRejected) => {
        res.status(400).json({
            Message: "User Not Found.",
            Detail: handleRejected
        });
    }).catch((err) => {
        res.status(500).json({
            Message: "Delete User Server Error",
            Detail: err
        });
    })
});

module.exports = router;