const fetch = require('node-fetch');
var path = "E:\gmtWorks_zml\阅读和练习的源码版本\kuweb\public\demo.txt";
fetch(path).then(res=>res.json()).then(json=>console.log(json));