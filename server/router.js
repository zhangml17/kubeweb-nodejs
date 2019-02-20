const express = require('express');
const router = express.Router();
const child_process = require('child_process');
const readline = require('readline');
const fs = require('fs');
const api = require('./api')

// 测试例子（有效）
router.post('/progressbar',(req,res)=>{
  console.log(req.body.master_node,'master_node');
  console.log(req.body.ssh_pwd,'ssh_pwd');
  console.log(req.body.node_node,'node_node');
  console.log(req.body.virtual_ip,'virtual_ip');
  console.log(req.body.profix_strategy,'profix_strategy');
  console.log(req.body.version,'version');
  console.log(req.body.ha_strategy,'ha_strategy');
  console.log(req.body.cni_strategy,'cni_strategy');

  var masterNode = req.body.master_node;
  var sshPwd = req.body.ssh_pwd;
  var nodeNode = req.body.node_node;
  var virtualIP = req.body.virtual_ip;
  var profixStrategy = req.body.profix_strategy;
  var kubernetVersion = req.body.version;
  var haStrategy = req.body.ha_strategy;
  var cniStrategy = req.body.cni_strategy;
  //console.log(res,"res");
 // api.startInstall(req,res);

  //定义参数
  var M = '-m';
  var N = '-n';
  var P = '-p';
  var A = '-a';
  var V = '-v';
  var C = '-c';
  var X = '-x';
  var K = '-k';

  if(nodeNode == ""){
    N = "";
  }

  if(virtualIP == ""){
    V = "";
  }

  child_process.exec('./init.sh'+' '+M+' '+masterNode+' '+N+' '+nodeNode+' '+P+' '+sshPwd+' '+A+' '+haStrategy+' '+V+' '+virtualIP+' '+C+' '+
             cniStrategy+' '+X+' '+profixStrategy+' '+K+' '+kubernetVersion+' > /tmp/install.log',function(err,stdout,stderr){ 

   if(err){
      console.log('in err');
      console.log(err);
    }else if(stdout){
      console.log('in stdout');
      //console.log(stdout);
      res.json(stdout);
    }else if(stderr){
      console.log('in stderr');
      console.log(stderr);
    }
   });

});

module.exports = router;