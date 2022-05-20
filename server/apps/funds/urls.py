
from django.contrib import admin
from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(prefix="funds/fundmain",viewset=views.FundMainViewSet)
router.register(prefix="funds/fundsnetvalue",viewset=views.FundsNetvalueViewSet)
router.register(prefix="funds/fundsnetvaluelist",viewset=views.FundsNetvaluelistViewSet)
router.register(prefix="funds/recommendfunds",viewset=views.RecommendfundsViewSet)
router.register(prefix="funds/UserfundsViewSet",viewset=views.UserfundsViewSet)
router.register(prefix="funds/UserfundsListViewSet",viewset=views.UserfundsListViewSet)
router.register(prefix="funds/UsernewsViewSet",viewset=views.UsernewsViewSet)
router.register(prefix="funds/ProtfolioStock",viewset=views.ProtfolioStockViewSet)
router.register(prefix="funds/ProtfolioBond",viewset=views.ProtfolioBondViewSet)
router.register(prefix="funds/FundProtfolio",viewset=views.FundProtfolioViewSet)

urlpatterns = [
    path('api/',include(router.urls))
]