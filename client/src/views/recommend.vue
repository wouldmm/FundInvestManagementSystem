<template>
  <div class="fund-main">
    <div class="left">
      <img src="../assets/i_juxing.png" alt="" />
      长期投资精选
    </div>
    <div class="long-list">
      <div class="long-card" v-for="fund in funds.results" :key="fund.code">
        <el-card shadow="hover">
          <div class="long-item-name" style="display: block">{{fund.name}}</div>
          <div class="long-item-tag">
            <p>{{fund.comment}}</p>
          </div>
          <div class="long-item-per">+{{fund.total_return|numFilter}}%</div>
          <div class="long-item-income">近五年收益率</div>
          <div class="long-item-detail">
            <a href="">
              基金详情
              <img src="../assets/i_jiantou.png" alt="" />
            </a>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecommends } from "@/api/funds"

export default {
  name: "recommend",
  data() {
    return {
      funds: [],
    }
  },
  filters:{
    numFilter (value) {
    // 截取当前数据到小数点后两位
    let realVal = parseFloat(value).toFixed(2)
    return realVal
    }
  },  
  methods: {
    getRecommendfunds() {
      getRecommends().then((res) => {
        this.funds = res.data;
        console.log(this.funds)
      });
    },
  },
  mounted() {
    this.getRecommendfunds();
  },
};
</script>

<style scoped>
.fund-main {
  /* background-color: #e9eef3; */
  color: rgb(8, 8, 8);
  text-align: center;
  /* line-height: 160px; */
}
.left {
  float: left;
  margin: 10px;
  padding: 0;
  border: 0;
  /* height: 100px; */
}
.long-list {
  margin: 0 -12px;
  /* height: 300px; */
  clear: both;
  box-sizing: border-box;
}
.long-card {
  width: 25%;
  height: 100%;
  float: left;
  padding: 0 12px;
  margin: 0;
  box-sizing: border-box;
}
.el-card {
  background-color: rgb(249, 252, 243);
  border-bottom: 3px solid #e66d0a;
}
.long-item-name {
  font-size: 22px;
  color: #404040;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 15px;
  float: left;
  line-height: 15px;
}
.long-item-tag {
  font-size: 14px;
  color: #d50000;
  margin-top: 0px;
  float: left;
  line-height: 30px;
}
.long-item-per {
  font-size: 30px;
  color: #d50000;
  line-height: 40px;
}
.long-item-income {
  font-size: 12px;
  color: #808080;
  line-height: 20px;
  /* margin-top: 8px; */
}
.long-item-detail {
  font-size: 16px;
  color: #d50000;
  margin-top: 32px;
  float: left;
  line-height: 25px;
  cursor: pointer;
}
a {
  text-decoration: none;
}
</style>