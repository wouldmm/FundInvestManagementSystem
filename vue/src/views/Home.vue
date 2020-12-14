<template>
  <el-container>
    <el-header>
      <sys-header></sys-header>
    </el-header>

    <el-container>
      <el-main>
        <funds-list></funds-list>
      </el-main>
    </el-container>
    
    <el-footer>
    <sys-footer></sys-footer>
    </el-footer>

  </el-container>
</template>

<script>
import sysheader from "@/components/sysheader.vue";
import sysfooter from "@/components/sysfooter.vue";
import fundslist from "@/components/fundslist.vue";

export default {
  name: 'Home',
  components: {
    'sys-header':sysheader,
    'sys-footer':sysfooter,
    'funds-list':fundslist,
  },

};
</script>

<style scoped>
.el-main
{
    min-height: 1400px;
}
.el-footer{
    position:relative;
    width:100%;
    background-color: #333;
    color:#eee;
    text-align: center;
    font-size: 16px;
    height: 40px; 
}

</style>
