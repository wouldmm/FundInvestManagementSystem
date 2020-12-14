import django_filters

from .models import FundsNetvalue
from django.db.models import Q

class FundsFilter(django_filters.rest_framework.FilterSet):
    '''
    基金过滤类
    '''
    netvaluemin = django_filters.NumberFilter(name="net_value", lookup_expr='gte')
    netvaluemax = django_filters.NumberFilter(name="net_value", lookup_expr='lte')
    asset_type = django_filters.NumberFilter(name='code',method='assettype_filter')

    def assettype_filter(self,queryset,value):

        return queryset.filter(Q(code__underlying_asset_type_id=value))

    class Meta:
        model = FundsNetvalue
        fields = ['netvaluemin','netvaluemax']