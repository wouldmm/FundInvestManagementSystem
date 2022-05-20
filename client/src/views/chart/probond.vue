<template>
  <div class="pro_bond_item">
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="bond-title">
          <h5>2020年第三季度重仓债券明细</h5>
          <span class="info">报告日期{{pub_date}}</span>
          </div>
        <br>
        <el-table
          :data="bond_data"
          style="width:94%"
          stripe
          border
          :row-style="{height:50+'px'}"
          :cell-style="{padding:0+'px'}"
          :default-sort="{ prop: 'rank', order: 'descending' }"
        >
          <el-table-column align="center" prop="symbol" label="债券代码"  width="110">
          </el-table-column>
          <el-table-column align="center" prop="name" label="债券名称"  width="105">
          </el-table-column>
          <el-table-column align="center" prop="shares" label="持股数量(张)" width="130" sortable :formatter="int_formatter">
          </el-table-column>
          <el-table-column align="center" prop="market_cap" label="市值(万元)" width="115" sortable :formatter="market_formatter">
          </el-table-column>>
          <el-table-column align="center" prop="proportion" label="占净值比例" width="120" sortable :formatter="proportion_formatter">
          </el-table-column>>
          <el-table-column align="center" prop="pub_date" label="公布日期" width="120" sortable>
          </el-table-column>>
        </el-table>
      </el-col>
      <el-col :span="12">
        <div class = "com-container">
        <div class="com-chart" id="bondChart" ref="bondChart" style="width: 600px;height:600px;"></div>
        </div>
      </el-col>
      
    </el-row>
      
  </div>
</template>

<script>
import { getprotfoliobond } from "@/api/funds";

export default {
  name:"bond",
  data() {
    return {
      probond:{},
      bond_data:[],
      bondname:[],
      bondproportion:[],
      seriesData:[],
      pub_date:"",
      chartInstance:null,

    }
  },
  created() {
    const code = this.$route.params && this.$route.params.code;
    this.getData(code); 
    this.tempRoute = Object.assign({}, this.$route);
  },
  methods: {
    initbond () {
      this.chartInstance = this.$echarts.init(document.getElementById("bondChart"),'infographic')
      
      const initOption = {
        title: {
          text: '▎ 债券持仓信息',
          left: 20,
          top: 20,
          textStyle:{ 
                color:"#D50000",
            }
        },
        series: [
          {
            center: ['50%', '60%'],
            name:'债券名称',
            type: 'pie',
            data: this.seriesData,
          },
        ],
        selectedMode: "multiple",
        roseType: "area",
        legend: {
          data: this.bondname,
          top: '10%',
          icon: 'circle'
        },
        tooltip: {//提示框，可以在全局也可以在
            trigger: 'item',  //提示框的样式
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            color:'#000', //提示框的背景色
            textStyle:{ //提示的字体样式
                color:"black",
            }
        },
        roseType: 'radius',    //不同半径
        label: {  //饼图的提示文字
          normal: {
            show: true,
            position: 'top'
          },
          emphasis: {
             position: 'left',
             show: true,
             textStyle: {
               fontSize: '14',
               fontWeight: 'bold'
             },
             length: 1
            }
        },
        labelLine: {  //提示线
          show:true,
          normal: {
              lineStyle: {
                  color: '#000'
              },
              smooth: true,
              length: 20,
              length2: 10
          }
        },
        itemStyle: {
                emphasis: {   //选中效果
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
        },
        animationDuration: 2000
      }
      this.chartInstance.setOption(initOption)
    },
    
    getData(code) {
      let params = {'code__main_code':params}  
      getprotfoliobond(params)
        .then((response) => {
          this.probond = response.data;
          this.bond_data = this.probond.results;
          this.pub_date = this.bond_data[0].pub_date;
          this.bond_data.forEach((item=>{
            this.bondname.push(item.name)
            this.bondproportion.push(item.proportion)
          }))
          console.log(this.bondname)

          let size = this.bondname.length;
          for(let i = 0 ; i < size ;i++){
            let a = {};
            a.value = this.bondproportion[i];
            a.name = this.bondname[i];
            this.seriesData.push(a);
          } 
          this.$nextTick(()=>{
            this.initbond()
          })
        })
        .catch((err) => {
          console.log(err);
        });
      
    },
    int_formatter(row,columm){
      return parseInt(row.market_cap/10000);
    },
    market_formatter(row, column) {
    // 截取当前数据到小数点后两位      
      return (row.market_cap/10000).toFixed(2);
    },
    proportion_formatter(row, column){
      return (parseFloat(row.proportion).toFixed(2)).toString()+"%";
    },
    day_formatter(row, column) {
    // 截取当前数据到小数点后两位      
      return row.day.substr(0,10);
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
.el-table th{
    color: #8090c4;
    background: #e2e2e2;
    font-size: 15px;
  }
.el-table td{
    font-size: 17px;
}
.el-table--striped .el-table__body tr.el-table__row--striped td {
    background: #e2e2e2;
  }
.el-table td,.building-top .el-table th.is-leaf {
  border-bottom:  1px solid #ccc;
}
.el-table::before{
   border-bottom:  1px solid #ccc;
    height: 2px
  }
.el-table--enable-row-hover .el-table__body tr:hover>td {
    background-color: #114696;
}
.bond-title h5 {
    display: inline-block;
    font-size: 15px;
    font-weight: normal;
    width: 250px;
    margin-right: 100px;
    margin-bottom: 0px;
    color: #6d3737;
}
.bond-title .info {
    display: inline-block;
    font-weight: normal;
    font-size: 15px;
    color: #6d3737;
    margin-inline-start: 0px;
}
</style>