# Create your views here.
from django.shortcuts import render
from rest_framework import viewsets
from django.db.models import Q,F
from .models import FundsNetvalue,FundMain,Recommendfunds
from .serializers import FundMainSerializer,FundsNetvalueSerializer,RecommendfundsSerializer
from datetime import datetime
from django_filters.rest_framework import DjangoFilterBackend
from .filters import FundsFilter
from rest_framework import filters


# Create your views here.
class FundMainViewSet(viewsets.ModelViewSet):
    queryset = FundMain.objects.all()
    serializer_class = FundMainSerializer

class FundsNetvalueViewSet(viewsets.ModelViewSet):
    #queryset = FundsNetvalue.objects.filter(Q(code__underlying_asset_type_id=402002))
    #queryset = FundsNetvalue.objects.all()
    queryset = FundsNetvalue.objects.filter(day='2020-12-03T00:00:00Z')
    serializer_class = FundsNetvalueSerializer
    filter_backends = [DjangoFilterBackend,filters.SearchFilter]
    search_fields = ['code__main_code','code__name']
    #filter_class = FundsFilter
    filterset_fields = ['day', 'code__main_code','code__underlying_asset_type_id','code__operate_mode_id']
    # def get_queryset(self):
    #     #return FundsNetvalue.objects.filter(code_id='000001')
    #     queryset = FundsNetvalue.objects.all()
    #     #query_day = self.request.query_params.get('query_day','2010-01-04')
    #     query_id = self.request.query_params.get('query_id','000001')
    #     #queryset = queryset.filter(day=datetime.strptime(query_day,"%Y-%m-%d"))
    #     queryset = queryset.filter(code_id=query_id)
    #     return queryset
        

class RecommendfundsViewSet(viewsets.ModelViewSet):
    queryset = Recommendfunds.objects.all()
    serializer_class = RecommendfundsSerializer        