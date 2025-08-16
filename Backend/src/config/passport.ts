import * as passport from 'passport';
import * as passportJwt from 'passport-jwt';
import { collections } from '../services/database.service';

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'your_jwt_secret', // Change this to your actual JWT secret key
};

passport.use(
  new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
    try {
      const user = await collections?.users?.findOne({ _id: jwtPayload.sub });
      
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })
);

export const passportJwtAuth = passport.authenticate('jwt', { session: false });
