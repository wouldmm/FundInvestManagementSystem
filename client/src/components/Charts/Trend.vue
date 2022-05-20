<template>
  <!-- <article-detail :is-edit="true" /> -->
    <div class = "com-container">
      <div class="com-chart" ref="trend_ref" :style="{height:height,width:width}"></div>
  </div>
   
</template>

<script>
import { getfundsmain,getfundsnetvaluelist } from "@/api/funds";

export default {
  // mixins: [resize],
  name: "trend",
  props:[
    "height",
    "width",
    "fund_days",
    "net_value",
    "sum_value"

  ],
  data() {
    return {
      x:["1","2","3","4","5","6","7","8","9","10"],
      value:["3.1","3.4","5.6","4","3","7","5.6","7.8","4.7","3.5"],
      chartInstane:null
    };
  },
  methods: {
    initChart(){
      this.chartInstane = this.$echarts.init(this.$refs.trend_ref,'infographic')
      const initOption = {
        xAxis:{
          type:'category'
        },
        yAxis:{
          type:'value'
        }
      }
      this.chartInstane.setOption(initOption)
    },
    getData(){
      const timeArr = this.fund_days
      const valueArr = this.net_value
      this.updateChart(timeArr,valueArr)
    },
    updateChart(timeArr,valueArr){
      const time = timeArr
      const value = valueArr
      // console.log(timeArr)
      const option = {
        title: {
          top: 20,
          text: '单位净值走势图',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#d50000',
            fontFamily:'Arial',
          },
          left: '10%'
        },
        xAxis:{
          data:time
        },
        series:[
          {
            type:'line',
            data:value
          }
        ],
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        toolbox: {
            left: 'center',
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        dataZoom: [{
            startValue: '0'
        }, {
            type: 'inside'
        }],

      }
      this.chartInstane.setOption(option)
      console.log(3)
    },
    
    screenAdapter(){
      const adapterOption = {}
      this.chartInstane.setOption(adapterOption)
      this.chartInstane.resize()

    }
  },
  mounted() {
    this.initChart()
    this.getData();
    window.addEventListener('resize',this.screenAdapter)
    this.screenAdapter()
    },
  destroyed() {
      window.removeEventListener('resize',this.screenAdapter)
  },
  
};
</script>

<style scoped>
.main_cont {
  margin: 20px;
}
h4{
  display: inline-block;
  margin-top: 50px;
  margin-bottom: 30px;
}
.product_title{
    min-height: 100%;
    display: block;
}

.product_title h2 {
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  position: relative;
  
}

.product_code {
  font-size: 20px;
  font-style: normal;
  color: cadetblue;
}
.product_label{
  white-space:normal;   
}
.product_date h6{
  margin-top: 0;
}
.asset_type {
  display: inline-block;
  padding: 0 7px;
  min-width: 56px;
  text-align: center;
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  color: #ff0000;
  background: #ffe3e3;
  margin-right: 8px;
}
.operate_mode {
  display: inline-block;
  padding: 0 7px;
  min-width: 56px;
  text-align: center;
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  color: #5c42f5;
  background: #ffe3e3;
  margin-right: 8px;
}
/* .right{
  color: #D50000;
  font-size:35px;
  display: inline-block;
} */
.product_info {
    margin-top: -50px;
    margin-left: 460px;
}
.product_info dl {
    display: block;
    width: 230px;
    float: left;
    padding: 0;
    margin-block-start: 1em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.product_info dl dd strong {
    font-weight: normal;
    font-size: 50px;
}
.product_info dl dd {
    height: 54px;
    line-height: 54px;
    font-family: 'BarlowSemiCondensed-Medium', "microsoft yahei";
    color: #d50000;
    margin-left: 50px;
}
.product_info dl dt {
    margin-top: 10px;
    font-size: 14px;
    line-height: 16px;
    width: 200px;
    color: #808080;
    margin-left: 50px;
}
element.style {
    margin-left: 70px;
}
.clearfix {
    zoom: 1;
}
div{
  display: block;
}
.mt40{
  margin-top: 40px !important;  
}


</style>
