<template>
  <div class="footer-item">
    <img src="../../../public/static/img/logo.png" alt="" width="10%" height="10%">
    
    <div class="wp19 fleft">
      <div class="item title">关于</div>
      <div class="item"><a href="/about#aboutUs">关于我们</a></div>
      <div class="item">联系我们：13386530038</div>
    </div>
    <div class="wp19 fleft">
      <div class="item title">帮助</div>
      <div class="item"><a href="/faq">常见问题</a></div>
      <div class="item"><a href='http://localhost:8000/docs/' target="_blank">API文档</a></div>
    </div>
    <div class="wp19 fleft">
      <div class="item title" style="padding-left:5px">数据来源</div>
      <div class="item"><a href="https://joinquant.com/">JoinQuant</a></div>
      <div class="item"><a href="http://tushare.org/index.html?f=joinquant">TuShare</a></div>
      <div class="item"><a href="https://finance.sina.com.cn/">新浪财经</a></div>
      <div class="item"><a href="https://fund.eastmoney.com/">天天基金网</a></div>
      <div class="item"><a href="https://www.pedaily.cn/">投资界</a></div>
      <div class="item"><a href="https://guorn.com/?from=joinquant">果仁网</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sys-footer',
}
</script>

<style>
.img{
  left: 200px;
}
.fleft {
  right: 100px;
}
.wp19 {
  display: inline-block;
  vertical-align: top;
  margin-left: 50px;
  margin-right: 10px;
  width: 20%;
}
.footer-item {
    background-color: #0d1c30;
    color: #787d84;
    position: absolute;
    padding: 30px 30px 30px;
    width: 100%;
    font-size: 13px;
    line-height: 20px;
    box-sizing: border-box;
    display: block; 
}
.img{
  padding-left: 30px;
}
.title {
    color: #b9bbbe;
    font-size: 18px;
    padding-bottom: 15px;
}

</style>