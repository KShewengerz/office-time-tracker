import * as expressJwt from 'express-jwt';

require('dotenv').config();


export class ValidateAuthentication {
  
  static get isAuthenticated() {
    return expressJwt({ secret: process.env.TOKEN_PRIVATE_KEY });
  }
  
}