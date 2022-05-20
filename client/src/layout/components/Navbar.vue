<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb class="breadcrumb-container" />
    <br> 
    <br>
    <img src="../../../public/static/img/logo.png" alt="" width=7% height=7%>
    <h2>金融基金信息管理系统</h2>

    <el-menu
      router
      :default-active="activeIndex"
      text-color="black"
      class="title"
      mode="horizontal"
      @select="handleSelect"
      
    >
      <el-menu-item index="/">系统首页</el-menu-item>
      <el-menu-item index="/news">新闻资讯</el-menu-item>
      <!-- <el-menu-item index="/datacenter">数据中心</el-menu-item> -->
      <el-menu-item index="/usercenter">个人中心</el-menu-item>
      <el-menu-item index="/about">关于我们</el-menu-item>
    </el-menu>
    

    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <!-- <img :src="avatar + '?imageView2/1/w/80/h/80'" class="user-avatar" /> -->
          <span type="flex" justify='end' style="margin-left:20px">
            用户：{{showusername}}</span>
          <i class="el-icon-caret-bottom" />
        </div>

        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item> 首页 </el-dropdown-item>
          </router-link>
          <router-link to="/system/user/password">
            <el-dropdown-item divided> 修改密码 </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout">
            <span style="display: block">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <h4>巴菲特小组让你发现，投资如此简单</h4>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";

import Cookie from 'js-cookie';
export default {
    data() {
      return {
        activeIndex: '1'
      };
    },  
  components: {
    Breadcrumb,
    Hamburger,
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"]),
    showusername(){
          return Cookie.get('username')
      },
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    handleSelect(key, keyPath) {
        this.$router.push({
        path: key,
        params: {data: 'query' }
      })
    },   
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
       }
    }
  }
</script>

<style lang="scss" scoped>
.navbar {
  height: 100%;
  width: 100%;
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 0;
  background: -webkit-linear-gradient(left,#434346,#56676e,#5c8ba0) no-repeat;
  box-shadow: 0px -1px 0px 0px #777676,   /*上边阴影 */
 
                -0.2px 0px 0px 0px #777676,   /*左边阴影  */
 
                0.2px 0px 0px 0px #777676,    /*右边阴影 */
 
                0px 1px 0px 0px #777676;     /*下边阴影 */

  .title{
    display: inline-block;
    margin-left: 80px;
    padding-left: 0px;
    padding-bottom: 0;
    height:50px;
    background-color:transparent;
    border: none;
  }
  .el-menu-item{
    font-size: 16px;
    width: 90px;
    border: none;
    margin-left: 0;
    margin-right:30px;
    background-color:transparent;
  }
  .hamburger-container {
    line-height: 70px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
  .img{
    position:relative;
    width:20px;
    height:15px;
    padding-top: 10px;
  }
  h2 {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 10px;
    padding-left: 10px;
    padding-top: 10px;
  }
  h4{
    color: rgb(123, 119, 126);
    margin-left: 10px;
  }
  .breadcrumb-container {

    padding-left: 0;
    padding-top: 10px;
    height:20px;
    background-color:transparent;
    float: left;
  }
  .breadcrumb-container::before {
    left: 0;
	  bottom: 0px;
	  width: 100%;
	  height: 0px;
  }
  

  .right-menu {
    float: right;
    height: 100%;
    line-height: 60px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;
      color: rgb(41, 40, 40);

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
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
}

</style>
