<template>
  <div v-bind:id="id" v-bind:data="data"></div>
</template>

<script>
export default {
    data() {
        return {
            ChartLineGraph:null,
        }
    },
    watch:{
        data:{
            handler(newValue,oldValue){
                this.drawLineGraph(this.id,newValue);
            },
            deep:true
        },
    },
    props:["id","data"],
    mounted() {
        this.drawLineGraph(this.id,this.data);
    },
    methods: {
        drawLineGraph(id,data){
            let _this = this;
            this.ChartLineGraph = this.$echarts.init(document.getElementById(id),'infographic')
            this.ChartLineGraph.setOption(data);
            window.addEventListener("resize",function(){
                _this.ChartLineGraph.resize();
                console.log(111)
            })
        },
    },
    beforeDestroy() {
        if(this.ChartLineGraph){
            this.ChartLineGraph.clear();
        }
    },
    destroyed () {
        window.removeEventListener('resize', this.drawLineGraph, 20)
    },
}
</script>

<style>

</style>