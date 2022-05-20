<template>
  <div>
   <div class='user_info'>
      <span class='user_left'>
         {{showusername}},欢迎回来！
      </span >    
   </div>
  <div class='module-box' >
    <el-tabs v-model="activeName" type="border-card" @tab-click = "handleClick">
            <el-tab-pane label="收藏基金" name="first" :key="'first'">
                <myfav-funds></myfav-funds>
            </el-tab-pane>
    
            <el-tab-pane label="收藏新闻" name="second" :key="'second'">
                <my-news></my-news>    
            </el-tab-pane>
        </el-tabs>
   </div>
 </div>  
</template>

<script>
import fundslist from './fundslist.vue'
import myfavfunds from './myfavfunds.vue'
import mynews from './mynews.vue'
import { mapGetters } from 'vuex'
import Cookie from 'js-cookie';


export default {
  name: 'usercenter',
  data() {
    return {
      activeName: "first",
    }
  },
  methods: {
    handleClick(tab, event) {
      this.warehouseTabs.forEach(tab_ => {
        if (tab_ === tab.name) {
          this.tableIndex = parseInt(tab.index)
        }
      })
    },
  },
  components: {
    'fund-list':fundslist,
    'myfav-funds':myfavfunds,
    'my-news':mynews
  },  
  computed: {
    ...mapGetters([
      'name',  //用户名
      'perms',  //用户权限
      'id'
    ]),
    showusername(){
          return Cookie.get('username')
      },
  },
}
</script>

<style scoped>
.user_info {
    height: 50px;
    line-height: 50px;
    color: #666666;
}
.user_left {
   margin: 10px;
    /* float: left; */
}

.module_box {
    position: relative;
    padding: 40px 73px 0px;
    max-width: 1600px;
    margin: 0 auto;
}
</style>