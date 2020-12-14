"""FIMS URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin

from django.urls import path,include
from rest_framework import routers
from user_manage.views import UserNewsViewSet,UserFundViewSet
from fund_manage.views import FundMainViewSet ,FundsNetvalueViewSet,RecommendfundsViewSet
from rest_framework.authtoken import views
from rest_framework.documentation import include_docs_urls
from rest_framework_jwt.views import obtain_jwt_token

router = routers.DefaultRouter()
router.register('user_news',UserNewsViewSet)
router.register('user_fund',UserFundViewSet)

router.register(prefix="fund_manage/fundmain",viewset=FundMainViewSet)
router.register(prefix="fund_manage/fundsnetvalue",viewset=FundsNetvalueViewSet)
router.register(prefix="fund_manage/recommendfunds",viewset=RecommendfundsViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include(router.urls)),
    path('api-token-auth/',views.obtain_auth_token), #获取Token的接口
    path('api-jwt-auth/', obtain_jwt_token, name='authorizations'), #JWT接口
    path("docs/", include_docs_urls(title="DRF API文档", description="Django REST framework快速入门"))
]

# import theme.views


# urlpatterns = [
#     path('', theme.views.home),
#     path('user_manage/', include('user_manage.urls')),
#     path('news_manage/', include('news_manage.urls')),
#     path('fund_manage/', include('fund_manage.urls')),
#     path('admin/', admin.site.urls),
# ]