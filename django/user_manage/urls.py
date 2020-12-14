from django.urls import path,include

from . import views

app_name = 'user_manage'

urlpatterns = [
    path('', views.index,name='user_index'),

    path('user_info/', views.UserInfoList.as_view(), name='user_info_list'),
    path('user_info_create/', views.UserInfoCreate.as_view(), name='user_info_create'),
    path('user_info_edit/<str:pk>/', views.UserInfoUpdate.as_view(), name='user_info_edit'),
    path('user_info_delete/<str:pk>/', views.UserInfoDelete.as_view(), name='user_info_delete'),
    
    path('user_fund/', views.UserFundList.as_view(), name='user_fund_list'),
    path('user_fund_create/', views.UserFundCreate.as_view(), name='user_fund_create'),
    path('user_fund_edit/<str:pk>/', views.UserFundUpdate.as_view(), name='user_fund_edit'),
    path('user_fund_delete/<str:pk>/', views.UserFundDelete.as_view(), name='user_fund_delete'),

    path('user_news/', views.UserNewsList.as_view(), name='user_news_list'),
    path('user_news_create/', views.UserNewsCreate.as_view(), name='user_news_create'),
    path('user_news_edit/<str:pk>/', views.UserNewsUpdate.as_view(), name='user_news_edit'),
    path('user_news_delete/<str:pk>/', views.UserNewsDelete.as_view(), name='user_news_delete'),

]
