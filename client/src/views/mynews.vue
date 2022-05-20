<template>
  <div>
  <div class="funds-list">
    <div class="fund_left">
      <img src="../assets/i_juxing.png" alt="" />
      自选新闻列表
    </div>
    
    <el-table
      style="width: 100%"
      :default-sort="{ prop: 'newsname', order: 'descending' }"
    >
      <el-table-column prop="newsname" label="新闻名称"  width="200">
      </el-table-column>
      <el-table-column label="访问链接" width="400" show-overflow-tooltip>
        <template slot-scope="scope">
          <a :href="scope.row.news_url" target="_blank" class="buttonText">{{scope.row.newsurl}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="newsori" label="信息来源" width="120" >
      </el-table-column>
      <el-table-column prop="newsdate" label="发布日期" width="120" >
      </el-table-column>     
      <el-table-column align="center" label="取消收藏" width="120">
        <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleDeleteFavFund(scope.$index, scope.row)">取消收藏</el-button>
      </template>
      </el-table-column>     
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" name='fund_page'/>
  </div>      
  </div>
</template>

<script>
import { getfundsnetvalueall,getfundsnetvalueone,getuserfavfundslist,getuserfavfund,deleteuserfavfund } from "@/api/funds"
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { mapGetters } from 'vuex'

export default {
  name: "myfavfunds",
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
        limit: 10
      },
      FundsData: [
      ],
      newsData:[],
    };
  },
  computed: {
    ...mapGetters([
      'name',  //用户名
      'perms',  //用户权限
      'id'
    ])
  },
  filters:{
    numFilter (value) {
    // 截取当前数据到小数点后两位-+
    let realVal = parseFloat(value).toFixed(2)
    return realVal
    }
  },
  methods: {
    handleDeleteFavFund(index,row){
      this.params = {
        "funds": row.code.main_code,
        "users": this.id
      }
      console.log(this.params)
      getuserfavfund(this.params).then((response) =>{
        let userfund_id = response.data.results[0].id
        deleteuserfavfund(userfund_id).then((res) => {
          alert("成功取消关注！")
          this.getFundsNetValue();
        });

      })
    },    
    handleSelect(key, keyPath) {
      if (key == 1) {
           this.getFundsNetValue();
           this.currentIndex = 1;
      }else if  (key == 2) {
      //   this.params = {'code__underlying_asset_type_id':402001}
      //   this.currentIndex = 2
      //   getfundsnetvalueone(this.params).then((res) => {
      //       this.funds_list = res.data;
      //       this.FundsData = this.funds_list.results
      //       this.total = res.data.count
      //  });         
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
        getuserfavfundslist(this.listQuery).then((res) => {
            this.funds_list = res.data;
            this.FundsData = this.funds_list.results
            this.total = res.data.count
       });
    },
    getList() {
      if (this.currentIndex == 1){
       getuserfavfundslist(this.listQuery).then((res) => {
            this.funds_list = res.data.results;
            this.FundsData = this.funds_list
            this.total = res.data.count
       });     
      }else if (this.currentIndex == 2){
      //   this.params = {'code__underlying_asset_type_id':402001,'page':this.listQuery.page,'limit':this.listQuery.limit}
      //   getfundsnetvalueone(this.params).then((res) => {
      //       this.funds_list = res.data;
      //       this.FundsData = this.funds_list.results
      //       this.total = res.data.count
      //  }); 
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
.fund_left {
    /*margin: 10px;*/
    /* float: left; */
    text-align:left;
}
</style>