const axios = require('axios');

describe("URL Shortener Unit Test",()=>{
    let testShortUrl='';
    describe("test API",()=>{
        it("should get 200 status code",async()=>{
            const testData = {
                url:"https://google.com/",
                expireAt:"2021-04-08T09:20:41.000Z"
            }
            axios.post("http://localhost:8080/api/v1/urls",testData).then((res)=>{
                expect(res.status).to.equal(200);
                testShortUrl = JSON.parse(res.body).shortUrl;
            });
        });
    });
    describe("test Short URL",()=>{
        it("should get redirect and 200 status code",async()=>{

            axios.get(testShortUrl).then((res)=>{
                expect(res.status).to.equal(200);
            });
        });
    });
});