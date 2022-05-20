from django.shortcuts import render
from django.views.generic import TemplateView,ListView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy

from rest_framework import viewsets
from .models import User_info,User_news,User_fund
from .serializers import UserInfoSeriazlizer,UserNewsSeriazlizer,UserFundSeriazlizer

class UserInfoViewSet(viewsets.ModelViewSet):
    queryset = User_info.objects.all()
    serializer_class = UserInfoSeriazlizer

class UserNewsViewSet(viewsets.ModelViewSet):
    queryset = User_news.objects.all()
    serializer_class = UserNewsSeriazlizer

class UserFundViewSet(viewsets.ModelViewSet):
    queryset = User_fund.objects.all()
    serializer_class = UserFundSeriazlizer

# def index(request):
#     return render(request, 'user_index.html')

# #用户基本信息
# class UserInfoList(ListView):
#     model = User_info
#     context_object_name = 'user_infos'

# class UserInfoCreate(CreateView):
#     model = User_info
#     fields = '__all__'
#     success_url = reverse_lazy('user_manage:user_info_list')

# class UserInfoUpdate(UpdateView):
#     model = User_info
#     fields = '__all__'
#     success_url = reverse_lazy('user_manage:user_info_list')

# class UserInfoDelete(DeleteView):
#     model = User_info
#     success_url = reverse_lazy('user_manage:user_info_list')

# #用户收藏基金
# class UserFundList(ListView):
#     model = User_fund
#     context_object_name = 'user_funds'

# class UserFundCreate(CreateView):
#     model = User_fund
#     fields = '__all__'
#     success_url = reverse_lazy('user_manage:user_fund_list')

# class UserFundUpdate(UpdateView):
#     model = User_fund
#     fields = '__all__'
#     success_url = reverse_lazy('user_manage:user_fund_list')

# class UserFundDelete(DeleteView):
#     model = User_fund
#     success_url = reverse_lazy('user_manage:user_fund_list')

# #用户收藏新闻
# class UserNewsList(ListView):
#     model = User_news
#     context_object_name = 'user_newss'

# class UserNewsCreate(CreateView):
#     model = User_news
#     fields = '__all__'
#     success_url = reverse_lazy('user_manage:user_news_list')

# class UserNewsUpdate(UpdateView):
#     model = User_news
#     fields = '__all__'
#     success_url = reverse_lazy('user_manage:user_news_list')

# class UserNewsDelete(DeleteView):
#     model = User_news
#     success_url = reverse_lazy('user_manage:user_news_list')