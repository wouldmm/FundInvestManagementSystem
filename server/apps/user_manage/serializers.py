from rest_framework import serializers
from .models import User_info,User_fund,User_news

class UserInfoSeriazlizer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User_info
        fields = '__all__'

class UserFundSeriazlizer(serializers.HyperlinkedModelSerializer):
    # user_id = serializers.ReadOnlyField(source='User_info.user_id') 
    # fund_id = serializers.ReadOnlyField(source='Fund_rough.fund_id') 
    class Meta:
        model = User_fund
        fields = '__all__'

class UserNewsSeriazlizer(serializers.HyperlinkedModelSerializer):
    # user_id = serializers.ReadOnlyField(source='User_info.user_id') 
    class Meta:
        model = User_news
        fields = '__all__'
