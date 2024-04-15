const passport = require('passport');
const mongoose = require('mongoose');
const PassportGoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');


const User = mongoose.model('users');


passport.serializeUser((user, done) => {
    // user.id is a shortcut to Mongo's unique identifier (generated by the engine)
    done(null, user.id)
});

passport.deserializeUser((id, done)=>{
    User.findById(id)
        .then( user => {
            done(null, user);
        }
    );

});


passport.use(new PassportGoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
        if (profile.id != null) {
            const existingUser = await User.findOne({googleID: profile.id});
            if(existingUser){
                // call passport function to notify we're done with custom post-auth flow
                // arguments - error object & user object
                done(null, existingUser);
            }
            else {
               const new_user = await new User({googleID: profile.id}).save();
               done(null, new_user);
            }
        }


    }
));

