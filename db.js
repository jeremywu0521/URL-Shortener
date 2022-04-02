const mongoose = require('mongoose');
var Schema = mongoose.Schema;


const   DB_AUTH_username  =  'mipod-sso_db-auth',
        DB_AUTH_password  =  'y7fgAnl4yEeDepD1',
        DB_NAME           =  'urlshortener',
        DB_AUTH_URI       =   `mongodb+srv://${DB_AUTH_username}:${DB_AUTH_password}@cluster0.xt4ug.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(DB_AUTH_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

  
module.exports = mongoose;