from django.urls import path,include

from django.contrib import admin
from . import views

app_name = 'fund_manage'

urlpatterns = [
  path('', views.index, name='fund_index'),

  path('fund_rough/', views.FundRoughList.as_view(), name='fund_rough_list'),
  path('fund_rough_create/', views.FundRoughCreate.as_view(), name='fund_rough_create'),
  path('fund_rough_edit/<str:pk>/', views.FundRoughUpdate.as_view(), name='fund_rough_edit'),
  path('fund_rough_delete/<str:pk>/', views.FundRoughDelete.as_view(), name='fund_rough_delete'),

  path('fund_detail/', views.FundDetailList.as_view(), name='fund_detail_list'),
  path('fund_detail_create/', views.FundDetailCreate.as_view(), name='fund_detail_create'),
  path('fund_detail_edit/<str:pk>/', views.FundDetailUpdate.as_view(), name='fund_detail_edit'),
  path('fund_detail_delete/<str:pk>/', views.FundDetailDelete.as_view(), name='fund_detail_delete'),

  path('fund_managers/', views.FundManagersList.as_view(), name='fund_managers_list'),
  path('fund_managers_create/', views.FundManagersCreate.as_view(), name='fund_managers_create'),
  path('fund_managers_edit/<str:pk>/', views.FundManagersUpdate.as_view(), name='fund_managers_edit'),
  path('fund_managers_delete/<str:pk>/', views.FundManagersDelete.as_view(), name='fund_managers_delete'),
 
  path('fund_individual/', views.FundIndividualList.as_view(), name='fund_individual_list'),
  path('fund_individual_create/', views.FundIndividualCreate.as_view(), name='fund_individual_create'),
  path('fund_individual_edit/<str:pk>/', views.FundIndividualUpdate.as_view(), name='fund_individual_edit'),
  path('fund_individual_delete/<str:pk>/', views.FundIndividualDelete.as_view(), name='fund_individual_delete'),

]