module.exports={
  startInstall(req,res){
      var master_node = newFunction(req);
      console.log(master_node);
  }
}

function newFunction(req) {
    return req.query.master_node;
}
