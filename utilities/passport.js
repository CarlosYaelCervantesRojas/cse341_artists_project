const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/userModel");

module.exports = function (passport) {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_REDIRECT_URL
    }, 
    async function(accessToken, refreshToken, profile, done) {
        const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName
        }

        try {
            let user = await User.findOne({ googleId: profile.id});

            if (user) {
                done(null, user)
            } else {
                user = await User.create(newUser);
                done(null, user);
            }
        } catch (error) {
            console.log(error);
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user)
    });
      
      passport.deserializeUser((user, done) => {
        done(null, user)
    });
}