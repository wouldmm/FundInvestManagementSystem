# Create your views here.
from django.shortcuts import render
from rest_framework import viewsets
from django.db.models import Q,F
from .models import FundMain,FundsNetvalue,Recommendfunds,UsersFunds,UsersNews,ProtfolioStock,ProtfolioBond,FundProtfolio
from .serializers import UsernewsSerializer,FundMainSerializer,FundsNetvalueSerializer,RecommendfundsSerializer,UserfundsSerializer,UserFundsDetailSerializer,ProtfolioStockSerializer,ProtfolioBondSerializer,FundProtfolioSerializer
from datetime import datetime
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination import PageNumberPagination
# from .filters import FundsFilter

class LargeResultsSetPagination(PageNumberPagination):
    page_size = 3000
    page_size_query_param = 'page_size'
    max_page_size = 10000

# Create your views here.
class FundMainViewSet(viewsets.ModelViewSet):
    queryset = FundMain.objects.all()
    serializer_class = FundMainSerializer

class FundsNetvalueViewSet(viewsets.ModelViewSet):
    queryset = FundsNetvalue.objects.all()
    #queryset = FundsNetvalue.objects.filter(Q(code__underlying_asset_type_id=402002))
    # queryset = FundsNetvalue.objects.filter(day='2020-12-03T00:00:00Z')
    serializer_class = FundsNetvalueSerializer
    filter_backends = [DjangoFilterBackend]
    #filter_class = FundsFilter
    filterset_fields = ['day', 'code_id','code__underlying_asset_type_id','code__operate_mode_id','daily_return','month_return','quarter_return','total_return']    

class FundsNetvaluelistViewSet(viewsets.ModelViewSet):
    # queryset = FundsNetvalue.objects.filter(day='2020-12-03T00:00:00Z')
    queryset = FundsNetvalue.objects.all()
    serializer_class = FundsNetvalueSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['day', 'code_id','code__main_code','code__underlying_asset_type_id','code__operate_mode_id','daily_return','month_return','quarter_return','total_return']
    pagination_class = LargeResultsSetPagination       

class RecommendfundsViewSet(viewsets.ModelViewSet):
    queryset = Recommendfunds.objects.all()
    serializer_class = RecommendfundsSerializer        

class UserfundsViewSet(viewsets.ModelViewSet):
    queryset = UsersFunds.objects.all()
    serializer_class = UserfundsSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['users_id','funds_id']    

    def get_queryset(self):
        return UsersFunds.objects.filter(users=self.request.user) 

    def get_serializer_class(self):
        if self.action == "list":
            return UserFundsDetailSerializer
        elif self.action == "create":
            return UserfundsSerializer

        return UserfundsSerializer

class UserfundsListViewSet(viewsets.ModelViewSet):

    queryset = FundsNetvalue.objects.filter(day='2020-12-03T00:00:00Z')
    serializer_class = FundsNetvalueSerializer

    def get_queryset(self):
        UserFavFunds = UsersFunds.objects.filter(users=self.request.user).values_list('funds__main_code')
        return self.queryset.filter(code__main_code__in=UserFavFunds)     

class UsernewsViewSet(viewsets.ModelViewSet):
    queryset = UsersNews.objects.all()
    serializer_class = UsernewsSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['users_id','newsname_id']    

    def get_queryset(self):
        return UsersNews.objects.filter(users=self.request.user) 

    def get_serializer_class(self):
        if self.action == "list":
            return UserNewsDetailSerializer
        elif self.action == "create":
            return UsernewsSerializer

        return UsernewsSerializer

class ProtfolioStockViewSet(viewsets.ModelViewSet):
    queryset = ProtfolioStock.objects.all()
    serializer_class = ProtfolioStockSerializer
    # filter_backends = [DjangoFilterBackend]
    #filter_class = FundsFilter
    # filterset_fields = ['code', 'period_start', 'period_end', 'pub_date', 'rank', 'symbol', 'name', 
    #                     'shares', 'market_cap','proportion']    

class ProtfolioBondViewSet(viewsets.ModelViewSet):
    queryset = ProtfolioBond.objects.all()
    serializer_class = ProtfolioBondSerializer
    # filter_backends = [DjangoFilterBackend]
    # filterset_fields = ['code', 'period_start', 'period_end', 'pub_date','rank', 'symbol', 'name', 
                        # 'shares', 'market_cap', 'proportion']   

class FundProtfolioViewSet(viewsets.ModelViewSet):
    queryset = FundProtfolio.objects.all()
    # queryset = FundProtfolio.objects.filter(id%10==1)
    serializer_class = FundProtfolioSerializer
    # filter_backends = [DjangoFilterBackend]
    # filterset_fields = ['code', 'name', 'period_start', 'period_end', 'pub_date',
    #    'report_type_id', 'report_type', 'equity_value', 'equity_rate',
    #    'stock_value', 'stock_rate', 'fixed_income_value', 'fixed_income_rate',
    #    'precious_metal_value', 'precious_metal_rate', 'derivative_value',
    #    'derivative_rate', 'buying_back_value', 'buying_back_rate',
    #    'deposit_value', 'deposit_rate', 'others_value', 'others_rate',
    #    'total_asset']   