<template>
  <div class="pro_stock_item">
    <el-row :gutter="20">
      <el-col :span="13">
        <div class="stock-title">
          <h5>2020年第三季度资产配置明细</h5>
          <span class="info">报告日期{{pub_date}}</span>
          </div>
        <br>
        <div class="data_table2">
          <table class="lr_str2" border="0" width="100%" >
              <tbody><tr>
                  <th width="28%">权益类投资金额(万元)</th>
                  <td width="20%" id="equity_value">{{parseFloat(pro_data.equity_value/10000).toFixed(2)}}</td>
                  <th width="32%">权益类投资占比(%)</th>
                  <td width="20%" id="equity_rate">{{parseFloat(pro_data.equity_rate).toFixed(2)}}</td>
              </tr>
              <tr>                                       
                  <th>股票投资金额(万元)</th>
                  <td id="stock_value">{{ parseFloat(pro_data.stock_value/10000).toFixed(2)}}</td>
                  <th>股票投资占比(%)</th>
                  <td id="stock_rate">{{parseFloat(pro_data.stock_rate).toFixed(2)}}</td>
              </tr>
              <tr>
                  <th>固定收益投资金额(万元)</th>
                  <td id="fixed_income_value">{{parseFloat(pro_data.fixed_income_value/10000).toFixed(2)}}</td>
                  <th>固定收益投资占比(%)</th>
                  <td id="fixed_income_rate">{{parseFloat(pro_data.fixed_income_rate).toFixed(2)}}</td>
              </tr>
              <tr>
                  <th>贵金属投资金额(万元)</th>
                  <td id="precious_metal_value">{{parseFloat(pro_data.precious_metal_value/10000).toFixed(2)}}</td>
                  <th>贵金属投资占比(%)</th>
                  <td id="precious_metal_rate">{{parseFloat(pro_data.precious_metal_rate).toFixed(2)}}</td>
              </tr>
              <tr>
                  <th>金融衍生品投资金额(万元)</th>
                  <td id="derivative_value">{{parseFloat(pro_data.derivative_value/10000).toFixed(2)}}</td>
                  <th>金融衍生品投资占比(%)</th>
                  <td id="derivative_rate">{{parseFloat(pro_data.derivative_rate).toFixed(2)}}</td>
              </tr>
              <tr>
                  <th>买入返售金融资产金额(万元)</th>
                  <td id="buying_back_value">{{parseFloat(pro_data.buying_back_value/10000).toFixed(2)}}</td>
                  <th>买入返售金融资产占比(%)</th>
                  <td id="buying_back_rate">{{parseFloat(pro_data.buying_back_rate).toFixed(2)}}</td>
              </tr>
              <tr>
                  <th>银行存款结算备付金合计(万元)</th>
                  <td id="deposit_value">{{parseFloat(pro_data.deposit_value/10000).toFixed(2)}}</td>
                  <th>银行存款结算备付金合计占比(%)</th>
                  <td id="deposit_rate">{{parseFloat(pro_data.deposit_rate).toFixed(2)}}</td>
              </tr>
              <tr>
                  <th>其他资产(万元)</th>
                  <td id="others_value">{{parseFloat(pro_data.others_value/10000).toFixed(2)}}</td>
                  <th>其他资产占比(%)</th>
                  <td id="others_rate">{{parseFloat(pro_data.others_rate).toFixed(2)}}</td>
              </tr>
              <tr>
                  <th>总资产合计(万元)</th>
                  <td id="total_asset">{{parseFloat(pro_data.total_asset/10000).toFixed(2)}}</td>
              </tr>
              
          </tbody></table>
      </div>
      </el-col>
      <el-col :span="11">
        <div class = "com-container">
        <div class="com-chart" id="proChart" ref="proChart" style="width: 570px;height:500px;"></div>
        </div>
      </el-col>
      
    </el-row>
      
  </div>
</template>

<script>
import { getfundprotfolio } from "@/api/funds";

export default {
  name:"pro",
  data() {
    return {
      pro:{},
      pro_data:{},
      pro_rates:[],
      pro_values:[],
      pub_date:"",
      pro_name:[],
      chartInstance:null,
      radar_data:[[]],
    }
  },
  created() {
    const code = this.$route.params && this.$route.params.code;
    this.getData(code); 
    this.tempRoute = Object.assign({}, this.$route);
  },
  methods: {
    initpro () {
      this.chartInstance = this.$echarts.init(document.getElementById("proChart"),'infographic')
      const initOption = {
        
        title: {
          text: '▎ 资产配置信息',
          left: 20,
          top: 20,
          textStyle:{ 
                color:"rgba(22,22,39,0.7)",
            }
        },
        grid: {
          position: 'center',
        },
        series: [
          {
            name:'资产配置(%)',
            type: "radar",
            symbolSize: 8,
            symbol: 'circle',
            lineStyle :{
                normal: {
                    width: 5,
                    opacity: 0.6
                }
            },
            
            data: this.radar_data,
            itemStyle: {
                color: '#72649A'
            },
            areaStyle: {
                opacity: 0.2
            }
          },
        ],
        radar: {
          indicator: [
              {name: '权益', max: 100},
              {name: '股票', max: 100},
              {name: '固定收益', max: 100},
              {name: '贵金属', max: 100},
              {name: '金融衍生品', max: 100},
              {name: '买入返售金融资产', max: 100},
              {name: '银行存款结算备付金', max: 100},
              {name: '其他', max: 100}
          ],
          axisLabel: {show: true, textStyle: {fontSize: 10, color: '#333'}},
          shape: 'circle',
          splitNumber: 5,
          name: {
              textStyle: {
                  color: 'black',
                  fontSize: '15',
              }
          },
          splitLine: {
              lineStyle: {
                  width : 3,
                  color: [
                      'rgba(22,22,39,0.1)', 'rgba(22,22,39,0.2)',
                      'rgba(22,22,39,0.4)', 'rgba(22,22,39,0.6)',
                      'rgba(22,22,39,0.8)', 'rgba(22,22,39,0.9)',
                  ].reverse()
              }
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
                width:3,
                color: 'rgba(22,22,39,0.5)',
                },
        },
        },
        legend: {
          data: ["资产配置"],
          bottom: 5,
          itemGap: 20,
          textStyle: {
              color: '#fff',
              fontSize: 14
          },
          selectedMode: 'single'
        },
        tooltip : {
        //雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
            confine: true,
            enterable: true, //鼠标是否可以移动到tooltip区域内
        },
        animationDuration: 2000
        
      }
      this.chartInstance.setOption(initOption)
    },
    getData(code) {
      let params = {'code__main_code':params}  
      getfundprotfolio(params)
        .then((response) => {
          this.pro = response.data;
          this.pro_data = this.pro.results[0];
          this.pub_date = this.pro_data.pub_date;
          Object.keys(this.pro_data).forEach(item=>{
              let a = {}
              if(!this.pro_data[item]){
                this.pro_data[item]=0.0;
              }
              else if(this.pro_data[item]<100 && item!='id'){
                a.name=item
                a.value=this.pro_data[item];
                this.pro_rates.push(a);
              }
              else if(this.pro_data[item]>=100 && item!="id" && item!="total_asset"){
                console.log("1");
                a.name=item
                a.value=this.pro_data[item];
                this.pro_name.push(item);
                this.pro_values.push(a);
              }
              if(item=="equity_rate"){
                this.radar_data[0].push(this.pro_data[item])
              }
              if(item=="stock_rate"){
                this.radar_data[0].push(this.pro_data[item])
              }
              if(item=="fixed_income_rate"){
                this.radar_data[0].push(this.pro_data[item])
              }
              if(item=="precious_metal_rate"){
                this.radar_data[0].push(this.pro_data[item])
              }
              if(item=="derivative_rate"){
                this.radar_data[0].push(this.pro_data[item])
              }
              if(item=="buying_back_rate"){
                this.radar_data[0].push(this.pro_data[item])
              }
              if(item=="deposit_rate"){
                this.radar_data[0].push(this.pro_data[item])
              }
              if(item=="others_rate"){
                this.radar_data[0].push(this.pro_data[item])
              }
          })
         
          console.log(this.radar_data)
          // console.log(this.pro_data)
          this.$nextTick(()=>{
            this.initpro()
          })
        })
        .catch((err) => {
          console.log(err);
        });
    },
    
  },
  

}
</script>

<style>
.mt40{
  margin-top: 40px !important;  
}
.pd_detail_tit{
  font-size:18px;
	padding: 5px 0;
	line-height: 10px;
	margin-bottom: 20px;
	position: relative;
  color: #D50000;
}

.funds-list {
  /* background-color: #e9eef3; */
  color: rgb(8, 8, 8);
  /* text-align: center; */
  line-height: 60px;
}

.stock-title h5 {
    display: inline-block;
    font-size: 15px;
    font-weight: normal;
    width: 250px;
    margin-right: 100px;
    margin-bottom: 0px;
    color: #6d3737;
}
.stock-title .info {
    display: inline-block;
    font-weight: normal;
    font-size: 15px;
    color: #6d3737;
    margin-inline-start: 0px;
}
th{ 
  line-height: 20px;
  margin-right: 100px;
  height:40px;
  white-space: nowrap;  
} 

</style>