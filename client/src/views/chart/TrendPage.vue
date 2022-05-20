<!--
针对/trendpage这条路径显示出来的组件
-->

<template>
  <div class="com-page">
      <test></test>
  </div>
</template>

<script>
import Trend from '@/components/Charts/Trend'
import Test from '@/components/Charts/Test'
export default {
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    components:{
        trend:Trend,
        test:Test
    }
}
</script>

<style> 

</style>