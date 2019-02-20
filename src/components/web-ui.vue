<template>
<div>
  <form method="post">
        <div class="row">
            <div class="col-md-2"></div>

            <div class="col-md-3">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">*master节点：</span>
                    </div>
                    <input type="text" class="form-control" ref="master_node">
                </div>

                <div class="alert alert-light">可选设置：</div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">node 节 点：</span>
                    </div>
                    <input type="text" class="form-control" ref="node_node">
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">虚 拟 机 IP：</span>
                    </div>
                    <input type="text" class="form-control" ref="virtual_ip">
                </div>

                <label for="sel1">Ser代理:</label>
                <select class="form-control" id="sel1" ref="profix_strategy">
                    <option value="iptables">iptables</option>
                    <option value="ipvs">ipvs</option>
                </select>
                <br>

                <label for="sel1">Kubernetes:</label>
                <select class="form-control" id="sel1" ref="version">
                    <option value="v1.11.0">v1.11.0</option>
                    <option value="v1.11.1">v1.11.1</option>
                </select>
                <br>

            </div>

            <div class="col-md-2"></div>

            <div class="col-md-3">

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">*SSH 密 码：</span>
                    </div>
                    <input type="text" class="form-control" ref="ssh_pwd">
                </div>
                <div class="alert alert-light"></div>
                <div class="form-group">
                    <label for="sel1">高可用方案:</label>
                    <select class="form-control" id="sel1" ref="ha_strategy">
                        <option value="nginx">nginx</option>
                        <option value="vip">vip</option>
                    </select>
                    <br>

                    <label for="sel1">CNI Strategy:</label>
                    <select class="form-control" id="sel1" ref="cni_strategy">
                        <option value="flannel">flannel</option>
                        <option value="calico">calico</option>
                    </select>
                    <br>

                    <div class="alert alert-light"></div>
                    <div class="container">
                        <input type="button" value="安装" @click="startInstall" style="color:#fff;background:#138496;border-color:#117a8b" />
                    </div>

                </div>
            </div>
            <div class="col-md-2"></div>
        </div>
    </form>

    <footer id="fh5co-footer" role="contentinfo">
        <div class="container footercontainer">
            <div class="row copyright">
                <div class="col-md-12 text-center">
                    <p>
                        <small><a href="#">Copyright © 2018 by GMT</a></small>
                    </p>
                    <p> <small>Powered by <a href="#">西安端怡科技有限公司</a></small>
                    </p>
                </div>
            </div>
        </div>
    </footer>
 </div>
</template>

<script>
export default {
  methods:{
    startInstall() {
        // console.log(this.$refs.master_node.value);
      this.$http.post('/progressbar',{
         master_node: this.$refs.master_node.value,
         ssh_pwd: this.$refs.ssh_pwd.value,
         node_node: this.$refs.node_node.value,
         virtual_ip: this.$refs.virtual_ip.value,
         profix_strategy: this.$refs.profix_strategy.value,
         version: this.$refs.version.value,
         ha_strategy: this.$refs.ha_strategy.value,
         cni_strategy: this.$refs.cni_strategy.value
        }).then((res)=>{
          console.log("res on vuejs...");
      });
      this.$router.push('/progressbar');
	}
  }
}
</script>
