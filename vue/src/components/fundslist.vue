<template>
  <div class="funds-list">
    <div class="left">
      <img src="" alt="" />
      <a href="/home">基金列表</a>
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">全部</el-menu-item>

      <el-submenu index="2">
        <template slot="title">基金运作方式分类</template>
        <el-menu-item index="2-1">开放式基金</el-menu-item>
        <el-menu-item index="2-2">封闭式基金</el-menu-item>
        <el-menu-item index="2-3">QDII</el-menu-item>
        <el-menu-item index="2-4">FOF</el-menu-item>
        <el-menu-item index="2-5">ETF</el-menu-item>
        <el-menu-item index="2-6">LOF</el-menu-item>
      </el-submenu>

       <el-submenu index="3">
        <template slot="title">基金类型分类</template>
        <el-menu-item index="3-1">股票型</el-menu-item>
        <el-menu-item index="3-2">货币型</el-menu-item>
        <el-menu-item index="3-3">债券型</el-menu-item>
        <el-menu-item index="3-4">混合型</el-menu-item>
        <el-menu-item index="3-5">基金型</el-menu-item>
        <el-menu-item index="3-6">贵金属</el-menu-item>
      </el-submenu>
    </el-menu>
    <el-table ref="multipleTable" 
      @select="handleSelect" 
      @selection-change="handleSelectionChange"
      :data="FundsData"
      style="width: 80%"
      height="800"
      border
      :default-sort="{ prop: 'net_value', order: 'descending' }"
    >
      <el-table-column prop="code.main_code" label="基金代码"  width="100" ></el-table-column>
      <el-table-column prop="code.name" label="基金名称"  width="100"></el-table-column>
      <el-table-column prop="day" label="净值日期" width="100"></el-table-column>
      <el-table-column prop="net_value" label="单位净值" sortable ></el-table-column>
      <el-table-column prop="daily_return" label="日涨跌" sortable :formatter="daily_formatter"></el-table-column>
      <el-table-column prop="month_return" label="月回报" sortable  :formatter="month_formatter"></el-table-column>
      <el-table-column prop="quarter_return" label="季回报" sortable  :formatter="quarter_formatter"></el-table-column>
      <el-table-column prop="total_return" label="总回报" sortable :formatter="total_formatter"></el-table-column>
    
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="AddtoUser(scope.$index, tableData)"
            type="text"
            size="small">
            加自选
          </el-button>
        </template>
    </el-table-column>
    
    </el-table>

    <div class="fy">
    <el-pagination
      @current-change="current_change"
      @size-change="handleSizeChange"
      @click.native="getFundsNetValue"
      v-model="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    </div>

  </div>
  
</template>

<script>
export default {
  name: "fundslist",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      funds_list:[],
      FundsData: [
      ],
      total: 1000,
      currentPage: 1,
      page_size: 1,
      offset: 0,
      currentID1:401001,
      currentID2:402001,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key == "1") {
          console.log(key);
          this.$http.get('api/fund_manage/fundsnetvalue/').then((res) => {
            this.funds_list = res.data;
            this.FundsData = this.funds_list.results;

       });
       }
       else if (key == "2-1") {
        console.log(key);
        this.$http.get('api/fund_manage/fundsnetvalue/',{params:{'code__operate_mode_id':401001}}).then((res) => {
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results
        });
      }
      else if (key == "2-2") {
        console.log(key);
        this.$http.get('api/fund_manage/fundsnetvalue/',{params:{'code__operate_mode_id':401002}}).then((res) => {
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results
        });
      }
      else if (key == "2-3") {
        console.log(key);
        this.$http.get('api/fund_manage/fundsnetvalue/',{params:{'code__operate_mode_id':401003}}).then((res) => {
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results
        });
      }
      else if (key == "2-4") {
        console.log(key);
        this.$http.get('api/fund_manage/fundsnetvalue/',{params:{'code__operate_mode_id':401004}}).then((res) => {
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results
        });
      }
      else if (key == "2-5") {
        console.log(key);
        this.$http.get('api/fund_manage/fundsnetvalue/',{params:{'code__operate_mode_id':401005}}).then((res) => {
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results
        });
      }
      else if (key == "2-6") {
        console.log(key);
        this.$http.get('api/fund_manage/fundsnetvalue/',{params:{'code__coperate_mode_id':401006}}).then((res) => {
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results
        });
      }else if  (key == "3-1") {
        console.log(key);
        this.$http.get('api/fund_manage/fundsnetvalue/',{params:{'code__underlying_asset_type_id':402001}}).then((res) => {
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results
       });          
      }else if (key == "3-2") {
        console.log(key);
        this.$http.get('api/fund_manage/fundsnetvalue/',{params:{'code__underlying_asset_type_id':402002}}).then((res) => {
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results
        });
      }
      else if (key == "3-3") {
        console.log(key);
        this.$http.get('api/fund_manage/fundsnetvalue/',{params:{'code__underlying_asset_type_id':402003}}).then((res) => {
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results
        });
      }
      else if (key == "3-4") {
        console.log(key);
        this.$http.get('api/fund_manage/fundsnetvalue/',{params:{'code__underlying_asset_type_id':402004}}).then((res) => {
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results
        });
      }
      else if (key == "3-5") {
        console.log(key);
        this.$http.get('api/fund_manage/fundsnetvalue/',{params:{'code__underlying_asset_type_id':402005}}).then((res) => {
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results
        });
      }
      else if (key == "3-6") {
        console.log(key);
        this.$http.get('api/fund_manage/fundsnetvalue/',{params:{'code__underlying_asset_type_id':402006}}).then((res) => {
          this.funds_list = res.data;
          this.FundsData = this.funds_list.results
        });
      }
      
    },
    handleSelectionChange(val){
      
    },

    formatter(row, column) {
      return row.net_value;
    },
    daily_formatter(row, column) {
      return row.daily_return+'%';
    },
    month_formatter(row, column) {
      return row.month_return+'%';
    },
    quarter_formatter(row, column) {
      return row.quarter_return+'%';
    },
    total_formatter(row, column) {
      return row.total_return+'%';
    },
    getFundsNetValue() {
      if (this.currentPage == 1){
        console.log(this.offset);
        console.log(this.currentID);
        this.$http.get('api/fund_manage/fundsnetvalue/',{
            params: {'code__operate_mode_id':this.currentID1,"code__underlying_asset_type_id":this.currentID2}}).then((res) => {
            this.funds_list = res.data;
            this.FundsData = this.funds_list.results
       })
      }
      else{
        this.offset=(this.currentPage-1)*10;
        console.log(this.offset);
        console.log(this.currentID);
        this.$http.get('api/fund_manage/fundsnetvalue/',{
            params: {'offset':this.offset,'code__operate_mode_id':this.currentID1,"code__underlying_asset_type_id":this.currentID2}}).then((res) => {
            this.funds_list = res.data;
            this.FundsData = this.funds_list.results
      })
      }
    },
    
    current_change(currentPage){
        this.currentPage = currentPage;
    },
    handleCurrentChange(val) {
                this.cur_page = val;
                this.getData({});
    },
    handleSizeChange(val) {
				// 每页数据量发生变化时执行的方法
				this.page_size = val;
			},
  },
  mounted() {
    this.getFundsNetValue();//初始化接口
  },
};
</script>

<style scoped>
.funds-list {
  color: rgb(8, 8, 8);
  line-height: 10px;
}
.left{
  line-height: 120px;
}
.fy{
        text-align:center;
        margin-top:30px;
}

</style>