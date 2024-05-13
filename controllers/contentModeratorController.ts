const auth = require("@azure/ms-rest-js");
const ContentModerator = require("@azure/cognitiveservices-contentmoderator")

/**
 * Content Moderator quickstart
 * 
 * This quickstart contains these examples:
 *  - Image moderation
 *  - Text moderation
 * 
 * Prerequisites
 *  - A Content Moderator subscription at https://ms.portal.azure.com.
 *  - Install the content moderator and ms-rest-js libraries in the command line with:
 *      npm install @azure/ms-rest-js
 *      npm install @azure/cognitiveservices-contentmoderator
 *  - Set your environment variables (see below for suggested names) with your subscription key and endpoint.
 *    The endpoint is in this format: https://{YOUR_REGION}.api.cognitive.microsoft.com/
 *  - Download and add the content_moderator_text_moderation.txt file in this quickstart's root folder to your local root folder.
 * 
 * How to run:
 *  - From the command line:
 *      node content_moderater_quickstart.js
 * 
 * References:
 *  - Content Moderator documentation: https://docs.microsoft.com/en-us/azure/cognitive-services/content-moderator/
 *  - Node SDK: https://docs.microsoft.com/en-us/javascript/api/azure-cognitiveservices-contentmoderator/?view=azure-node-latest
 *  - Content Moderator API: https://docs.microsoft.com/en-us/azure/cognitive-services/content-moderator/api-reference
 *  - npm library: https://www.npmjs.com/package/@azure/cognitiveservices-contentmoderator
 */

export async function moderate(unmoderatedText: string) {

    /**
     * AUTHENTICATE
     * Using your subscription key and endpoint, a client is created that is used call the API.
     */
    // Set CONTENT_MODERATOR_SUBSCRIPTION_KEY and CONTENT_MODERATOR_ENDPOINT in your environment variables.
    let credentials = new auth.ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': process.env.CONTENT_MODERATOR_SUBSCRIPTION_KEY } });
    let client = new ContentModerator.ContentModeratorClient(credentials, process.env.CONTENT_MODERATOR_ENDPOINT);

    let screenResult = await client.textModeration.screenText("text/plain", unmoderatedText, { classify: true });
    return screenResult;
}