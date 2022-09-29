const { verifyToken } = require("./verify");

const authenticate = (req) => {
    try {
        let { token } = req.cookies;
        console.log(">>>>>>>>>>>>>>>>>>>");
        console.log(token)
        let result = verifyToken(token);
        console.log(result)
        console.log("<<<<<<<<<<<<<<<<<<<");
        if (!result) return false;
        return result.email;
    } catch (error) {
        return false;
    }
};

module.exports = {
    authenticate,
};
