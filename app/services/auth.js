import Service from '@ember/service';
import auth0 from 'auth0-js';

const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';

const CLIENT_ID = '2loqexfLPeO68WL9nOzDRQRvEdA5Ot5u';
const CLIENT_DOMAIN = 'emberjs2authenticationtutorial.auth0.com';
const REDIRECT = 'http://localhost:4200/callback';
const SCOPE = 'full_access';
const AUDIENCE = 'http://whistleblower.com';


export default Service.extend({
  auth: new auth0.WebAuth({
    clientID: CLIENT_ID,
    domain: CLIENT_DOMAIN
  }),

  login() {
    this.get('auth').authorize({
      responseType: 'token id_token',
      redirectUri: REDIRECT,
      audience: AUDIENCE,
      scope: SCOPE
    });
  }
});
