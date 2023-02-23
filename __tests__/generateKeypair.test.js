var security = require("../security/security")

describe("Generate an RSA keypair", () => {
    test("Should return a keypair", async () => {
        await security.storeRSAKeys();
    });
});
