<template>
  <div class="row">
    <!-- 左右两屏 -->
    <div class="col-md-4"> 
      <!-- 左边为编辑部分 -->
      <div class="form-group">
        <input type="hidden" v-model="url">
      </div>
      <div class="form-group">
        <input type="text" v-model="user_id" class="form-control" placeholder="用户id">
      </div>
      <div class="form-group">
        <input type="text" v-model="news_name" class="form-control" placeholder="新闻名称">
      </div>
      <div class="form-group">
        <textarea class="form-control" v-model="news_url" placeholder="新闻来源"></textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-block btn-success" @click="saveUser_news()">保存</button>
      </div>
      <div class="form-group"></div>
    </div>
    <div class="col-md-8">
      <!-- 右边是列表部分 -->
      <table class="table table-bordered table-hover">
        <thead>
          <th class="text_center">用户id</th>
          <th class="text_center">新闻名称</th>
          <th class="text_center">新闻url</th>
          <th class="text_center">编辑</th>
          <th class="text_center">删除</th> 
        </thead>
        <tbody>
          <tr v-for="user_news in user_newss" :key='user_news.url'>
            <td>{{user_news.user_id}}</td>
            <td>{{user_news.news_name}}</td>
            <td>{{user_news.news_url}}</td>
            <td>
              <button class="btn btn-success" @click="editUser_news(user_news)">
                <i class="fa fa-edit"></i>
              </button>
            </td>
            <td>
              <button class="btn btn-success" @click="deleteUser_news(user_news)">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
    
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Container',
  props: {
  },
  data(){
    return{
      base_url:'http://127.0.0.1:8000/api/user_news/',
      user_newss:null,
      url:'',
      user_id:'',
      news_name:'',
      news_url:''
    }
  },
  methods:{
    getAll(){
      axios.get(this.base_url)
         .then(res=>{
           this.user_newss = res.data;
           this.url = '';
           this.user_id = '';
           this.news_name = '';
           this.news_url = '';
         })
    },
    saveUser_news(){
      //两种情况，一种是新建博客，另一种是更新博客
      //通过url 是否为空来判断
      if(this.url == ''){
        //新增
        axios.post(this.base_url,{
                                  user_id:this.user_id,
                                  news_name:this.news_name,
                                  news_url:this.news_url})
             .then(()=>{
               this.getAll();
             })
      }else{
        //修改 由于要修改的url已经配置
        axios.put(this.url, {user_id:this.user_id,
                             news_name:this.news_name,
                             news_url:this.news_url})
             .then(()=>{
               this.getAll();
             })
      }

    },
    editUser_news(user_news){
      this.url = user_news.url;
      this.user_id = user_news.user_id;
      this.news_name = user_news.news_name;
      this.news_url = user_news.news_url;
    },
    deleteUser_news(user_news){
      axios.delete(user_news.url)
          .then(()=>{
             this.getAll(); 
          });
    }
  },
  mounted(){
    this.getAll();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
