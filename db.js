const mongoose = require('mongoose');
var Schema = mongoose.Schema;


const   MIPOD_SSO_DB_AUTH_username  =  'mipod-sso_db-auth',
        MIPOD_SSO_DB_AUTH_password  =  'y7fgAnl4yEeDepD1',
        MIPOD_SSO_DB_NAME           =  'urlshortener',
        MIPOD_SSO_DB_AUTH_URI       =   `mongodb+srv://${MIPOD_SSO_DB_AUTH_username}:${MIPOD_SSO_DB_AUTH_password}@cluster0.xt4ug.mongodb.net/${MIPOD_SSO_DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(MIPOD_SSO_DB_AUTH_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

  
module.exports = mongoose;