from django.db import models

from fund_manage.models import FundMain
from news_manage.models import News
# Create your models here.

class User_info(models.Model):
    user_id = models.CharField(max_length=200,primary_key=True)
    password = models.CharField(max_length=20,default='')
    qq = models.CharField(max_length=20,default='')
    vx = models.CharField(max_length=200,default='')

    def __str__(self):
        return self.user_id

class User_fund(models.Model):
    user_id = models.CharField(max_length=200,default='')
    fund_code = models.ForeignKey(FundMain,on_delete=models.CASCADE)

    def __str__(self):
        return ('{0:200s} ==> {1:200s}').format(str(self.user_id),str(self.fund_code))

    def __str__(self):
        return ('{0:200s} ==> {1:200s}').format(str(self.user_id),str(self.fund_code))

class User_news(models.Model):
    #user_id = models.ForeignKey(User_info,on_delete = models.CASCADE,to_field="user_id")
    user_id = models.CharField(max_length=200,default='')
    news_name = models.CharField(max_length=200,default='')
    news_url = models.CharField(max_length=200,default='')
    def __str__(self):
        return ('{0:200s} ==> {1:200s}').format(str(self.user_id),str(self.news_name))
