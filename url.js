
const validUrl = require('valid-url');  //check URL isVaild
const Schema = require('mongoose').Schema;
const db = require('./db');
const redis = require("redis").createClient();
redis.connect();
redis.on("error", function(error) {
    console.error(error);
  });
var exports;
let URLSchema = new Schema({
    URL_id: String,
    URL_origin: String,
    expireAt: {
        type: Date,
        default: Date.now
    }
});
let URL = db.model('URL', URLSchema);
exports.URL_findOne = async (URL_id) =>{
    let cacheUrl = await redis.get(URL_id);
    if(cacheUrl==null){
        const url = await URL.findOne({
            URL_id: URL_id,
        });
        return url;
    }else{
        return JSON.parse(cacheUrl);
    }

    
}
exports.URL_create = async (URL_origin, expireAt) =>{
    let _newShortUrl = new URL({
        URL_id: Math.random().toString(36).substring(2, 10),
        URL_origin: URL_origin,
        expireAt: expireAt
    });
    await _newShortUrl.save();
    await redis.setEx(_newShortUrl.URL_id,60*60*24,JSON.stringify(_newShortUrl));
    return _newShortUrl
}
module.exports = exports;