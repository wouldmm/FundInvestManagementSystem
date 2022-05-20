from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator
from .models import FundMain,FundsNetvalue,Recommendfunds,UsersFunds,UsersNews,ProtfolioStock,ProtfolioBond,FundProtfolio

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

class UserfundsSerializer(serializers.ModelSerializer):
    users = serializers.HiddenField(
        default=serializers.CurrentUserDefault()  # 表示user为隐藏字段，默认为获取当前登录用户
    )
    
    class Meta:
        model = UsersFunds
        validators = [
            UniqueTogetherValidator(
                queryset=UsersFunds.objects.all(),
                fields=('users', 'funds'),
                message="已经收藏"
            )
        ]
        fields = '__all__'

class UserFundsDetailSerializer(serializers.ModelSerializer):
    
    funds = FundMainSerializer()

    class Meta:
        model = UsersFunds
        fields = '__all__'

class UsernewsSerializer(serializers.ModelSerializer):
    users = serializers.HiddenField(
        default=serializers.CurrentUserDefault()  # 表示user为隐藏字段，默认为获取当前登录用户
    )
    
    class Meta:
        model = UsersNews
        validators = [
            UniqueTogetherValidator(
                queryset=UsersFunds.objects.all(),
                fields=('users', 'newsname'),
                message="已经收藏"
            )
        ]
        fields = '__all__'
class UserNewsDetailSerializer(serializers.ModelSerializer):
    
    newsname = FundMainSerializer()

    class Meta:
        model = UsersNews
        fields = '__all__'

class ProtfolioStockSerializer(serializers.ModelSerializer):
    code = FundMainSerializer()
    class Meta:
        model = ProtfolioStock
        fields = '__all__'
class ProtfolioBondSerializer(serializers.ModelSerializer):
    code = FundMainSerializer()
    class Meta:
        model = ProtfolioBond
        fields = '__all__'
class FundProtfolioSerializer(serializers.ModelSerializer):
    code = FundMainSerializer()
    class Meta:
        model = FundProtfolio
        fields = '__all__'
        