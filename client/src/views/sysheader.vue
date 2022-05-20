<template>
  <div class="header-item">
    <img src="../../public/static/img/logo.png" alt="" width=8% height=8%>
    <h2 style="display: inline;">金融基金信息系统</h2>
        <ul>
            <li><a href="/home">首页</a></li>
            <li><a href="/news">新闻资讯</a></li>
            <li><a href="/datacenter">数据中心</a></li>
            <li><a href="/user">个人中心</a></li>
            <li><a href="/about">关于我们</a></li>
            <span type="flex" justify='end' style="margin-left:180px">
            用户：{{showusername}}
            <el-button divided @click.native="logout">
            <el-link href="/login">注销</el-link>
            </el-button>
            </span>
        </ul>
    <h5>巴菲特小组让你发现，投资如此简单</h5>
  </div>
</template>

<script>
import Cookie from 'js-cookie';
import { mapGetters } from 'vuex'

export default {
  name: 'sys-header',
  computed:{
      showusername(){
          return Cookie.get('username')
      },
      ...mapGetters([
      'sidebar',
      'avatar'
      ]),
  },
  methods: {
    logout() {
      this.$cookies.remove('token')
      this.$cookies.remove('username')
      this.username=''
      this.token=''
    },
    
  }
  
};
</script>


<style>
.header-item{
  width: 100%;
  position: relative;
  margin: auto;
  background: -webkit-linear-gradient(left,#8680E9,#5AB9EA,#84ceeb) no-repeat;
}
h1 {
  display: inline-block;
}
ul {
  display: inline-block;
}
li {
  display: inline-block;
  padding:1em;
}
a {
  padding: 0 10px;
  cursor: pointer;
  text-decoration: none;
  color: rgb(46, 63, 110);
}
</style>