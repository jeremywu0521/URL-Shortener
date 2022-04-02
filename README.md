#URL Shortener
思路：2個 endpoint 
    URL Entrance 使用EXPRESS package的Get router 作為Primary的Gateway
    API endpoint 使用EXPRESS package的Post router 作為Secondary的Gateway
分成三部分 Access point/URL處理/DB處理
DB選擇 為了避免SQL injection 使用安全性較穩的Mongoose Package故選擇使用MongoDB
ExpireAt用Date.parse獲取毫秒數來比較來獲得是否過期

函式URL_create用Redis以URL uid鍵值(與db一起)來儲存ShortURL Schema Object然後函式URL_fineOne 獲取直接返回結果如果是null跟db依樣會結果是undefined所以直接返回數值 都是直接獲取ShortURL Parsed Data(redis鍵值有parse過string)
先讀redis再讀db的方式來提升效能
預設redis 1天到期
函式URL_create用Math.random的方式產生字串

用validUrl確認API給的URL是可用的

Release測試時請更改db.js mongodb的address