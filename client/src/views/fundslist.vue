<template>
  <div class="funds-list">
    <div class="left">
      <img src="../assets/i_juxing.png" alt="" />
      基金列表
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      height="800"
      active-text-color="#5AB9EA"
    >
      <el-menu-item index="1">全部</el-menu-item>

      <el-submenu index="2" >
        <template slot="title" >基金运作方式分类</template>
        <el-menu-item index="2-1">开放式基金</el-menu-item>
        <el-menu-item index="2-2">封闭式基金</el-menu-item>
        <el-menu-item index="2-3">QDII</el-menu-item>
        <el-menu-item index="2-4">FOF</el-menu-item>
        <el-menu-item index="2-5">ETF</el-menu-item>
        <el-menu-item index="2-6">LOF</el-menu-item>
      </el-submenu>

       <el-submenu index="3" >
        <template slot="title">基金类型分类</template>
        <el-menu-item index="3-1">股票型</el-menu-item>
        <el-menu-item index="3-2">货币型</el-menu-item>
        <el-menu-item index="3-3">债券型</el-menu-item>
        <el-menu-item index="3-4">混合型</el-menu-item>
        <el-menu-item index="3-5">基金型</el-menu-item>
        <el-menu-item index="3-6">贵金属</el-menu-item>
      </el-submenu>

    </el-menu>
    <el-table
      :data="FundsData"
      style="width: 100%"
      :default-sort="{ prop: 'net_value', order: 'descending' }"
    >
      <el-table-column align="center" prop="code.name" label="基金名称"  width="180">
      </el-table-column>
      <el-table-column prop="day" label="净值日期" width="100" :formatter="day_formatter">
      </el-table-column>
      <el-table-column prop="net_value" label="单位净值" sortable :formatter="formatter">
      </el-table-column>
      <el-table-column prop="daily_return" label="日涨跌" sortable :formatter="daily_formatter">
      </el-table-column>
      <el-table-column prop="month_return" label="月回报" sortable  :formatter="month_formatter">
      </el-table-column>
      <el-table-column prop="quarter_return" label="季回报" sortable  :formatter="quarter_formatter">
      </el-table-column>
      <el-table-column prop="total_return" label="总回报" sortable :formatter="total_formatter">
      </el-table-column>
      <el-table-column align="center" label="基金详情" width="120">
        <template slot-scope="scope">
          <router-link :to="'/funds/detail/'+scope.row.code.main_code">
            <el-button type="primary" size="small" icon="el-icon-edit">
              Detail
            </el-button>
          </router-link>
        </template>
      </el-table-column>  
      <el-table-column align="center" label="关注" width="120">
        <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleFavFund(scope.$index, scope.row)">加关注</el-button>
      </template>
      </el-table-column> 

    </el-table>
    
    <pagination 
      v-show="total>0" 
      :total="total" 
      :page.sync="listQuery.page" 
      :limit.sync="listQuery.limit" 
      @pagination="getList" 
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      name='fund_page'/>
  </div>  
</template>

<script>

import { getfundsnetvalueall,getfundsnetvalueone,createuserfavfund } from "@/api/funds"
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

export default {
  name: "fundslist",
  components: { Pagination },  
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      currentIndex: 1,
      funds_list:[],
      params:{},
      total: 0,
      listQuery: {
        page: 1,
        limit: 10,
        day: "2020-12-03 08:00:00"//日期
      },
      FundsData: [
      ],
      nowDate:"2020-12-03 08:00:00"
    };
  },
  filters:{
    numFilter (value) {
    // 截取当前数据到小数点后两位-+
    let realVal = parseFloat(value).toFixed(2)
    return realVal
    }
  },
  methods: {
    handleFavFund(index,row){
      let favfund = {
        funds:row.code.main_code,
        status: 1
      }
      createuserfavfund(favfund).then((res) => {
          alert("成功添加关注！")
       });
    },
    handleSelect(key, keyPath) {
      if (key == "1") {
          this.getFundsNetValue();
          this.currentIndex = 1;
       }
      else if (key == "2-1") {
        this.params = {'day':this.nowDate,'code__operate_mode_id':401001}
        this.currentIndex = 2
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      }
      else if (key == "2-2") {
        this.params = {'day':this.nowDate,'code__operate_mode_id':401002}
        this.currentIndex = 3
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      }
      else if (key == "2-3") {
        this.params = {'day':this.nowDate,'code__operate_mode_id':401003}
        this.currentIndex = 4
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      }
      else if (key == "2-4") {
        this.params = {'day':this.nowDate,'code__operate_mode_id':401004}
        this.currentIndex = 5
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      }
      else if (key == "2-5") {
        this.params = {'day':this.nowDate,'code__operate_mode_id':401005}
        this.currentIndex = 6
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      }
      else if (key == "2-6") {
        this.params = {'day':this.nowDate,'code__operate_mode_id':401006}
        this.currentIndex = 7
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      }
      else if  (key == "3-1") {
        this.params = {'day':this.nowDate,'code__underlying_asset_type_id':402001}
        this.currentIndex = 8
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      }        
      else if (key == "3-2") {
       this.params = {'day':this.nowDate,'code__underlying_asset_type_id':402002}
        this.currentIndex = 9
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      } 
      else if (key == "3-3") {
        this.params = {'day':this.nowDate,'code__underlying_asset_type_id':402003}
        this.currentIndex = 10
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      } 
      else if (key == "3-4") {
        this.params = {'day':this.nowDate,'code__underlying_asset_type_id':402004}
        this.currentIndex = 11
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      } 
      else if (key == "3-5") {
        this.params = {'day':this.nowDate,'code__underlying_asset_type_id':402005}
        this.currentIndex = 12
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      } 
      else if (key == "3-6") {
        this.params = {'day':this.nowDate,'code__underlying_asset_type_id':402006}
        this.currentIndex = 13
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      }
    //   console.log(key);
    },    
    formatter(row, column) {
    // 截取当前数据到小数点后两位      
      return parseFloat(row.net_value).toFixed(2);
    },
    day_formatter(row, column) {
    // 截取当前数据到小数点后两位      
      return row.day.substr(0,10);
    },
    daily_formatter(row, column) {
      return parseFloat(row.daily_return).toFixed(2)+'%';
    },
    month_formatter(row, column) {
      return parseFloat(row.month_return).toFixed(2)+'%';
    },
    quarter_formatter(row, column) {
      return parseFloat(row.quarter_return).toFixed(2)+'%';
    },
    total_formatter(row, column) {
      return parseFloat(row.total_return).toFixed(2)+'%';
    },
    getFundsNetValue() {
        getfundsnetvalueall(this.listQuery).then((res) => {
            this.funds_list = res.data;
            this.FundsData = this.funds_list.results
            this.total = res.data.count
            console.log(this.total)
       });
    },
    getList() {
      if(this.currentIndex == 1){
        getfundsnetvalueall(this.listQuery).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = this.data.count;
        });
      }
      else if(this.currentIndex == 2){
        this.params = {'day':this.nowDate,'code__operate_mode_id':401001,'page':this.listQuery.page,'limit':this.listQuery.limit}
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      }
      else if(this.currentIndex == 3){
        this.params = {'day':this.nowDate,'code__operate_mode_id':401002,'page':this.listQuery.page,'limit':this.listQuery.limit}
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      }
      else if(this.currentIndex == 4){
        this.params = {'day':this.nowDate,'code__operate_mode_id':401003,'page':this.listQuery.page,'limit':this.listQuery.limit}
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      }
      else if(this.currentIndex == 5){
        this.params = {'day':this.nowDate,'code__operate_mode_id':401004,'page':this.listQuery.page,'limit':this.listQuery.limit}
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      }
      else if(this.currentIndex == 6){
        this.params = {'day':this.nowDate,'code__operate_mode_id':401005,'page':this.listQuery.page,'limit':this.listQuery.limit}
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      }
      else if(this.currentIndex == 7){
        this.params = {'day':this.nowDate,'code__operate_mode_id':401006,'page':this.listQuery.page,'limit':this.listQuery.limit}
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      }
      else if(this.currentIndex == 8){
        this.params = {'day':this.nowDate,'code__code__underlying_asset_type_id':402001,'page':this.listQuery.page,'limit':this.listQuery.limit}
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      }
      else if(this.currentIndex == 9){
        this.params = {'day':this.nowDate,'code__code__underlying_asset_type_id':402002,'page':this.listQuery.page,'limit':this.listQuery.limit}
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      }
      else if(this.currentIndex == 10){
        this.params = {'day':this.nowDate,'code__code__underlying_asset_type_id':402003,'page':this.listQuery.page,'limit':this.listQuery.limit}
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      }
      else if(this.currentIndex == 11){
        this.params = {'day':this.nowDate,'code__code__underlying_asset_type_id':402004,'page':this.listQuery.page,'limit':this.listQuery.limit}
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      }
      else if(this.currentIndex == 12){
        this.params = {'day':this.nowDate,'code__code__underlying_asset_type_id':402005,'page':this.listQuery.page,'limit':this.listQuery.limit}
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      }
      else if(this.currentIndex == 13){
        this.params = {'day':this.nowDate,'code__code__underlying_asset_type_id':402006,'page':this.listQuery.page,'limit':this.listQuery.limit}
        getfundsnetvalueone(this.params).then((res)=>{
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results;
          this.total = res.data.count;
        });
      }
    }
  },
  mounted() {
    this.getFundsNetValue();
  },
}
</script>

<style scoped>
.funds-list {
  /* background-color: #e9eef3; */
  color: rgb(8, 8, 8);
  /* text-align: center; */
  line-height: 60px;
}
.left{
  line-height: 120px;
  margin-left: 10px;
  margin-top: -20px;
  margin-bottom: -40px;
}
.fy{
  text-align:center;
  margin-top:30px;
}

.el-submenu{
  padding-left:20px;
  padding-right:10px;
}
</style>