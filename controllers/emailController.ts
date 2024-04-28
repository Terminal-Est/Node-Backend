import { KnownEmailSendStatus } from "@azure/communication-email";

const { EmailClient } = require("@azure/communication-email");
require("dotenv").config();

// This code demonstrates how to fetch your connection string
// from an environment variable.
const connectionString = process.env['COMMUNICATION_SERVICES_CONNECTION_STRING'];
const emailClient = new EmailClient(connectionString);

async function sendAuthenticationEmail(userEmail: string, displayName: string, subject: string, htmlcontent: string) {
    const POLLER_WAIT_TIME = 10
    try {
        const message = {
            senderAddress: "<DoNotReply@33824c19-0263-4b34-b899-98e6c6a91689.azurecomm.net>",
            content: {
                subject: subject,
                html: htmlcontent
            },
            recipients: {
                to: [
                    {
                        address: userEmail,
                        displayName: displayName,
                    },
                ],
            },
        };

        const poller = await emailClient.beginSend(message);

        if (!poller.getOperationState().isStarted) {
            throw "Poller was not started."
        }

        let timeElapsed = 0;
        while (!poller.isDone()) {
            poller.poll();
            console.log("Email send polling in progress");

            await new Promise(resolve => setTimeout(resolve, POLLER_WAIT_TIME * 1000));
            timeElapsed += 10;

            if (timeElapsed > 18 * POLLER_WAIT_TIME) {
                throw "Polling timed out.";
            }
        }

        if (poller.getResult().status === KnownEmailSendStatus.Succeeded) {
            console.log(`Successfully sent the email (operation id: ${poller.getResult().id})`);
        }
        else {
            throw poller.getResult().error;
        }
    } catch (e) {
        console.log(e);
    }
}

export {
    sendAuthenticationEmail
}
