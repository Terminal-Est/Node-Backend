import { NextFunction, Request, Response } from "express";
import { sendAuthenticationEmail } from "../controllers/emailController";
import { getAuthJWT } from "../controllers/securityController";
import { User } from "../data/entity/user";

const emailMiddleware = (async(req: Request, res: Response, next: NextFunction) => {

    const regUser: User = res.locals.user;
    var jwk;
    var keySet;
    var kid;

    if(req.app.get('onKey2')) {
        keySet = req.app.get('KeySet2');
        jwk = req.app.get('jwk2');
        kid = jwk.kid;
    } else {
        keySet = req.app.get('KeySet1');
        jwk = req.app.get('jwk1');
        kid = jwk.kid;
    }

    const jwt: any = await getAuthJWT(res.locals.uuid, keySet.private, kid, '1d').then((handleFulfilled) => {
        return handleFulfilled;
    }, (handleRejected) => {
        return handleRejected;
    });

    const subject: string = "Greentik Authentication Email";
    const htmlcontent: string = `<h1>Greentik Authentication Email</h1><br>` +
                                `<p>Please click the following link to authenticate your e-mail address...</p><br>` + 
                                `<a href="https://greentikapidev.azurewebsites.net/register/${jwt}">Click here to validate!</a>`;

    sendAuthenticationEmail(regUser.email, regUser.username, subject, htmlcontent);

    next();
});
    
export {
    emailMiddleware
}