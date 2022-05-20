from django.urls import path
from . import views

app_name = 'news_manage'

urlpatterns = [
    path('', views.NewsList.as_view(), name='news_list'),
    path('create/', views.NewsCreate.as_view(), name='news_create'),
    path('edit/<str:pk>/', views.NewsUpdate.as_view(), name='news_edit'),
    path('delete/<str:pk>/', views.NewsDelete.as_view(), name='news_delete'),
]
