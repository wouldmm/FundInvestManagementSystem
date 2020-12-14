<template>
  <div class="footer-item">
    <div class="wp19 fleft">
      <div class="item title">关于</div>
      <div class="item"><a href="/about#aboutUs">关于我们</a></div>
      <div class="item">联系我们：13386530038</div>
    </div>
    <div class="wp19 fleft">
      <div class="item title">帮助</div>
      <div class="item"><a href="/faq">常见问题</a></div>
      <div class="item"><a href="/api" target="_blank">API文档</a></div>
    </div>
    <div class="wp19 fleft">
      <div class="item title" style="padding-left:5px">数据来源</div>
      <div class="item"><a href="https://cdn.joinquant.com">JoinQuant</a></div>
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
.fleft {
    float: left;
}
.wp19 {
    width: 17%;
}
.footer-item {
    background-color: #0d1c30;
    color: #d3d3d3;
    position: absolute;
    bottom: 0;
    padding: 30px 30px 30px;
    width: 100%;
    font-size: 13px;
    line-height: 20px;
    box-sizing: border-box;
    display: block;
}
.title {
    color: #b9bbbe;
    font-size: 18px;
    padding-bottom: 15px;
}

</style>