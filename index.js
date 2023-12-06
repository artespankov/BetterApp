const express = require('express');
const passport = require('passport');
const PassportGoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')

// URLS = {
//     googleAuthURL: "/auth/google",
// }


const app = express();
passport.use(new PassportGoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        // callbackURL: URLS.googleAuthURL + '/callback'
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
        console.log(done);
    }
));

app.get(
    '/auth/google',
    passport.authenticate('google', {
        'scope': ['profile', 'email']
    })
)
app.get(
    '/auth/google/callback',
    passport.authenticate('google')
)

const PORT = process.env.PORT || 6464;
app.listen(PORT);
