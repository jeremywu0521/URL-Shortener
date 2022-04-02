const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const validUrl = require('valid-url')
const URL = require('./url');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/:URL_id',async (req,res)=>{
    const urlDetail = await URL.URL_findOne(req.params.URL_id);
    if(urlDetail){
        if(Date.parse(urlDetail.expireAt)<Date.parse(Date())){
            res.redirect(urlDetail.URL_origin);
        }else{
            res.status(404).send('Expired');
        }
    }else{
        res.status(404).send('404 not found');
    }
});
app.post('/api/v1/urls',async (req,res)=>{
    console.log(req.body);
    if (!validUrl.isUri(req.body.url)) {
        return res.status(401).json('Invalid URL');
    }else{
        const _newShortURL = await URL.URL_create(req.body.url, req.body.expireAt);
        console.log(_newShortURL)
        res.send(JSON.stringify({
            id:_newShortURL.URL_id,
            shortUrl:"http://localhost:8080/"+_newShortURL.URL_id
        }));
    }
});
app.listen(8080);