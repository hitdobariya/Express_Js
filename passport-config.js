const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("./model/user.model");

passport.use(
    new localStrategy({ usernameField: "userName" }, async (userName, password, done) => {
        console.log(userName, password);
        try {
            const user = await User.findOne({ userName: userName });
            // console.log(user , "passport user");
            if (!user) return done(null, false);
            if (user.password !== password) return done(null, false);
            return done(null, user);
        } catch (error) {
            return done(error, false);
        }
    })
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, false);
    }
});
