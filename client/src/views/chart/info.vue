<template>
  <div class="pd_detail_box mt40">
      <div class="pd_detail_tit">
          <span class="ic_01">▎ 基本档案</span>
      </div>
      <div class="data_table2">
          <table class="lr_str2" border="0" width="75%" cellpadding="0" cellspacing="0">
              <tbody><tr>
                  <th width="10%">基金代码</th>
                  <td width="20%" id="tem_code">{{fundmain.main_code}}</td>
                  <th width="10%">基金名称</th>
                  <td width="20%" id="tem_name">{{fundmain.name}}</td>
              </tr>
              <tr>                                       
                  <th>基金类型</th>
                  <td id="tem_type">{{ fundmain.underlying_asset_type }}</td>
                  <th >运作方式</th>
                  <td id="run_way">{{fundmain.operate_mode}}</td>
              </tr>
              <tr>
                  <th>基金管理人</th>
                  <td id="tem_manage">{{fundmain.advisor}}</td>
                  <th>基金托管人</th>
                  <td id="tem_custodian">{{fundmain.trustee}}</td>
              </tr>
              <tr>
                  <th>成立日期</th>
                  <td id="tem_start">{{fundmain.start_date}}</td>
              </tr>
          </tbody></table>
      </div>
  </div>
</template>

<script>
export default {
    name:"info",
    props:["fundmain"],
}
</script>

<style>
.mt40{
  margin-top: 40px !important;  
}

.data_table2 th{
	text-align: center;
	border: 1px solid #F1F1F1;
	background: #f9f9f9;
	font-size: 16px;
	font-weight: normal;
	color: #808080;
	padding: 5px 10px;
	height: 20px;
	line-height: 10px;
	vertical-align: middle;
}

.data_table2 td{
	text-align: center;
	border: 1px solid #F1F1F1;
	font-size: 16px;
	line-height: 20px;
	padding: 5px 10px;
	height: 40px;
	vertical-align: middle;
}
.ic_01{
    display: block;
    margin-top: -20px;
    color:#6d3737
}
</style>