const passport = require("passport");

// Assuming that we're calling the function with already initialized app object
module.exports = (app) => {
    // 1.a Login - redirect to Google auth flow
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            'scope': ['profile', 'email']
        })
    )
    // 1.b Login - receive callback with user data
    app.get(
        '/auth/google/callback',
        passport.authenticate('google')
    )

    // 2. Logout
    app.get(
        '/auth/logout',
        (req, res) => {
            req.logout();
            res.send("Logged out " + req.user)
        }
    )
    // 3. Current user
    app.get(
        '/auth/user',
        (req, res) => {
            res.send("Logged in user " + req.user)
        }
    )
};
