from rest_framework import serializers
from fund_manage.models import FundMain,FundsNetvalue,Recommendfunds

class FundMainSerializer(serializers.ModelSerializer):
    class Meta:
        model = FundMain
        fields = '__all__'

class FundsNetvalueSerializer(serializers.ModelSerializer):
    code = FundMainSerializer()
    class Meta:
        model = FundsNetvalue
        fields = '__all__'

class RecommendfundsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Recommendfunds
        fields = '__all__'