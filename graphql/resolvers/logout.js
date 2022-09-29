const logout = (parent, args, { req, res }) => {
    try {
        res.clearCookie("token",{
            httpOnly: true,
            sameSite: "none",
            secure:  true,
           });
        return {
            success: true,
            message: "logout success!",
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};

module.exports = {
    logout,
};
