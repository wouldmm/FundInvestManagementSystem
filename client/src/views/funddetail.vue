<template>
  <!-- <article-detail :is-edit="true" /> -->
  <div class="main_cont">
    <h4>基金详情</h4>
    <div class="product_title">
      <h2 id="product_title">
        <i style="background: #cc101b"></i>
        {{ fundmain.name }}
        <em class="product_code">{{ fundmain.main_code }}</em>
      </h2>
      <div class="product_label">
        <span class="asset_type">{{ fundmain.underlying_asset_type }}</span>
        <span class="operate_mode">{{ fundmain.operate_mode }}</span>
        <span>{{ fundmain.advisor }}</span>
      </div>

      <div id="productInfo" class="product_info clearfix">
        <dl><dd><strong class="ared">{{ parseFloat(net_value[net_value.length-1]).toFixed(3) }}</strong></dd><dt>单位净值(2020-12-03)</dt></dl>
        <dl><dd><strong class="ared">{{ parseFloat(sum_value[sum_value.length-1]).toFixed(3) }}</strong></dd><dt>累计净值</dt></dl>
        <dl><dd><strong class="ared">
          <span v-if="daily_return[daily_return.length-1]>0" style="color:'#D50000'">{{ parseFloat( daily_return[daily_return.length-1]).toFixed(3)}}%</span>
          <span v-else-if="daily_return[daily_return.length-1]<= 0" style="color: #404040">{{ parseFloat( daily_return[daily_return.length-1]).toFixed(3)}}%</span>
          </strong></dd><dt>日涨跌幅</dt></dl>
        <div id="indexlight" class="fund_gzinfo"></div>
      </div>
      <div class='product_date'>
        <h6>开始时间：{{fundmain.start_date}}</h6>
      </div>
    </div>
    <!-- 收益率图 -->
    <el-row :gutter="20">
      <el-col :span="12">
        <div class = "com-container">
        <div class="com-chart" id="trend_netvalue" ref="trend_netvalue" style="width: 600px;height:400px;"></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class = "com-container">
        <div class="com-chart" id="trend_sumvalue" ref="trend_sumvalue" style="width: 600px;height:400px;"></div>
        </div>
      </el-col>
    </el-row>
    <br><br><br>
    <el-row :gutter="20">
      <el-col :span="24">
        <div class = "com-container">
        <div class="com-chart" id="trend_return" ref="trend_return" style="width: 1300px;height:400px;"></div>
        </div>
      </el-col>
    </el-row>
   <!-- 详细信息饼图 -->
   <el-row :gutter="20">
      
        <el-tabs v-model="activeName" type="border-card" @tab-click = "handleClick">
            <el-tab-pane label="基本信息" name="first" :key="'first'">
              <el-col :span="18">
                <info v-bind:fundmain="fundmain" v-if="activeName=='first'"></info>
              </el-col>
            </el-tab-pane>
    
            <el-tab-pane label="持股信息" name="second" :key="'second'">
              <stock v-if="activeName=='second'"></stock>      
            </el-tab-pane>

            <el-tab-pane label="持债信息" name="third" :key="'third'">
              <bond v-if="activeName=='third'"></bond>
            </el-tab-pane>

            <el-tab-pane label="资产配置" name="fourth" :key="'forth'">
              <pro v-if="activeName=='fourth'"></pro>
            </el-tab-pane>
        </el-tabs>    
    </el-row>  
  </div>
</template>

<script>
import { getfundsmain,getfundsnetvaluelist } from "@/api/funds";
// import echarts from 'echarts'
// import resize from './mixins/resize'
import info from './chart/info';
import stock from './chart/prostock';
import bond from './chart/probond';
import pro from './chart/fundpro';

export default {
  components: { info,stock,bond,pro },
  // mixins: [resize],
  name: "FundDetail",
  
  data() {
    return {
      fundmain: {},
      fundnetvalue: {},
      protfliostock:{},
      protfliobond:{},
      fundprotflio:{},
      activeName:'first',

      isFirst: true,
      isSecond: false,
      isThird:false,
      isForth: false,

      fund_days:[],
      net_value:[],
      sum_value:[],
      Height:0,
      daily_return:[],
      month_return:[],
      quarter_return:[],
      total_return:[],
      option_netvalue:null,
      option_sumvalue:null,
      option_returns:null
    };
  },
  created() {
    const code = this.$route.params && this.$route.params.code;
    this.fetchData(code); 
    this.tempRoute = Object.assign({}, this.$route);
  },
  
  methods: {
    handleClick(tab) {
      this.activeName = tab.name;
    },
    initreturns(){
      const legendArr = ["日回报","月度回报","季度回报","年度回报"]
      this.option_returns = this.$echarts.init(document.getElementById("trend_return"),'infographic')
      const initOption = {
        legend: {
          data: ['日回报','月度回报','季度回报','年度回报']
        },
        title: {
          textAlign: 'center',
          top: 10,
          text: '收益曲线图',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: 'black',
            fontFamily:'Arial',
          },
          left: '10%'
        },
        xAxis:{
          type:'category'
        },
        yAxis:{
          type:'value'
        }
      }
      this.option_returns.setOption(initOption)
    },
    initnetvalue(){
      this.option_netvalue = this.$echarts.init(document.getElementById("trend_netvalue"),'infographic')
      const initOption = {
        title: {
          textAlign: 'center',
          top: 20,
          text: '单位净值走势图',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: 'black',
            fontFamily:'Arial',
          },
          left: '10%'
        },
        xAxis:{
          type:'category'
        },
        yAxis:{
          type:'value'
        }
      }
      this.option_netvalue.setOption(initOption)
    },
    initsumvalue(){
      this.option_sumvalue = this.$echarts.init(document.getElementById("trend_sumvalue"),'infographic')
      const initOption = {
        title: {
          textAlign: 'center',
          top: 20,
          text: '累计净值走势图',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: 'black',
            fontFamily:'Arial',
          },
          left: '10%'
        },
        xAxis:{
          type:'category'
        },
        yAxis:{
          type:'value'
        }
      }
      this.option_sumvalue.setOption(initOption)
    },
    updatereturns(){
        const time = this.fund_days
        const value = [this.daily_return,this.month_return,this.quarter_return,this.total_return]
        // console.log(value)
        const option = {
        
        xAxis:{
          data:time
        },
        series:[
          {
            name:'日回报',
            type:'line',
            data:value[0],
          },
          {
            name:'月度回报',
            type:'line',
            data:value[1],
          },
          {
            name:'季度回报',
            type:'line',
            data:value[2],
          },
          {
            name:'年度回报',
            type:'line',
            data:value[3],
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
            left: '70%',
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
        animationDuration: 2000
      }
      this.option_returns.showLoading({
        text: 'loading',
        color: '#c23531',
        textColor: '#000',
        maskColor: 'rgba(255, 255, 255, 0.2)',
        zlevel: 0,
      });;
      setTimeout(() => {
        this.option_returns.hideLoading();
        this.option_returns.setOption(option)
      }, 1000);
      

    },
    updatenetvalue(){
        const time = this.fund_days
        const value = this.net_value
        const option = {
        
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
        animationDuration: 2000
      }
      this.option_netvalue.showLoading({
        text: 'loading',
        color: '#c23531',
        textColor: '#000',
        maskColor: 'rgba(255, 255, 255, 0.2)',
        zlevel: 0,
      });;
      setTimeout(() => {
        this.option_netvalue.hideLoading();
        this.option_netvalue.setOption(option)
      }, 1000);
      
    },
    updatesumvalue(){
        const time = this.fund_days
        const value = this.sum_value
        const option = {
        
        xAxis:{
          data:time
        },
        series:[
          {
            type:'line',
            data:value,
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
        animationDuration: 2000
      }
      this.option_sumvalue.showLoading({
        text: 'loading',
        color: '#c23531',
        textColor: '#000',
        maskColor: 'rgba(255, 255, 255, 0.2)',
        zlevel: 0,
      });;
      setTimeout(() => {
        this.option_sumvalue.hideLoading();
        this.option_sumvalue.setOption(option)
      }, 1000);
    },
    fetchData(code) {
      getfundsmain(code)
        .then((response) => {
          this.fundmain = response.data;
          // console.log(this.fundmain);
        })
        .catch((err) => {
          console.log(err);
        });
      let params = {'code__main_code':code}  
      getfundsnetvaluelist(params).then((response) => {
        this.fundnetvalue = response.data.results;
        for(let row of this.fundnetvalue){
          this.fund_days.push(row.day.substr(0,9))
          this.net_value.push(row.net_value)
          this.sum_value.push(row.sum_value)
          this.daily_return.push(row.daily_return)
          this.month_return.push(row.month_return)
          this.quarter_return.push(row.quarter_return)
          this.total_return.push(row.total_return)
        }
        this.$nextTick(()=>{
          this.updatenetvalue()
          this.updatesumvalue()
          this.updatereturns()
        })
        console.log(1)
      })
      console.log(2)
    },

  //   screenAdapter(){
  //     const titleFontSize = this.$refs.trend_ref.offsetWidth/100 
  //     const adapterOption = {}
  //     this.chartInstane.setOption(adapterOption)
  //     this.chartInstane.resize()

  //   }
  },
  mounted() {
    this.initnetvalue();
    this.initsumvalue();
    this.initreturns();
    // window.addEventListener('resize',this.screenAdapter)
    // this.screenAdapter()
    },
  // destroyed() {
  //     window.removeEventListener('resize',this.screenAdapter)
  // },
  
};
</script>

<style>
.main_cont {
  margin: 20px;
}

h4{
  display: inline-block;
  margin-top: 30px;
  margin-bottom: 30px;
  color:#d50000;
  font-size: 20px;
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

.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}

.el-tabs__item {
    padding: 0 20px;
    height: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 20px;
    font-weight: 500;
    position: relative;
}

.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    color: #d50000;
    background-color: #FFF;
    border-right-color: #DCDFE6;
    border-left-color: #DCDFE6;
}

.el-table--enable-row-hover .el-table__body tr:hover>td{
    background-color: #c6cfdf !important;
}
.el-table tbody tr:hover>td { 
    background-color:#ecf5ff!important
}
.el-tabs__nav{
    width: 20px;
  }
</style>
