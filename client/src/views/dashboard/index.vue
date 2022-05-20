<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">name: {{ name }}</div>
    <div class="dashboard-text">perms: <span v-for="perm in perms" :key="perm">{{ perm }}</span></div> -->
    <!-- <fund-recommend></fund-recommend> -->
    <img src="../../../public/static/img/detail1.png" alt="" >
    <fund-lists></fund-lists>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import fundslist from '../fundslist.vue'
import news from '../dashboard/news.vue'

export default {
  name: 'Dashboard',
  components: {
    'fund-lists':fundslist,
    'news':news,
  },
  computed: {
    ...mapGetters([
      'name',
      'perms'
    ])
  },
}
</script>

<style lang="scss" scoped>
.fund-lists{
  min-height: 100%;
}
// .el-footer{
//     text-align: center;
//     font-size: 16px;
//     height: 40px; 
    
//     bottom: 0px;
//     left: 0px;
//     color: #666;
//     width: 100%;
//     clear: both;//清除浮动
//     line-height: 90px;
//     background-color: #ebebed;
// }
</style>
