var express = require('express');
var router = express.Router();
var readline = require('readline');
var schdule = require('node-schedule');
var child_process = require('child_process');
var path =require('path');
var lineReader = require('line-reader');
var readline = require('readline');
var fs = require('fs');

var path = "./public/demo.txt";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('install');
});

var result="等待安装结束...";
var n=0;
router.post('/',function(req,res){

    //获取参数值i
    var masterNode = req.body['master_node'];
    var sshPwd = req.body['ssh_pwd'];
    var nodeNode = req.body['node_node'];
    var virtualIP = req.body['virtual_ip'];
    var haStrategy = req.body['ha_strategy'];
    var cniStrategy = req.body['cni_strategy'];
    var profixStrategy = req.body['profix_strategy'];
    var kubernetVersion = req.body['version'];

    var rl = readline.createInterface({  
      input: process.stdin,  
      output: process.stdout  
    }); 


  //  function schduleCronstyle(){
      // 每秒输出一下日期时间
      schdule.scheduleJob('* * * * * *',function(){
  
          // console.log('scheduleCronstyle:'+new Date());
          
          lineReader.eachLine(path,function(line,last){
              
             result = line;
         
             n += 10;
            //  var rs = result.includes('ERROR');
            //  if(rs){
            //    result="中国..."
            //  }
            // console.log(result);
          });

          function writeSome(){
              return new Date()+'\n';
          }
          
          // 追加文本
          // fs.appendFile(path,writeSome(),(err)=>{
              
          // })
           fs.writeFile(path,writeSome(),(err)=>{})
      })
 // }
  //schduleCronstyle();

  res.render('afterinstall',{
    data:result,
    percent: n
  });
})
module.exports = router;
