from django.contrib import admin

# Register your models here.

from user_manage.models import User_fund,User_info,User_news

admin.site.register(User_info)
admin.site.register(User_news)
admin.site.register(User_fund)
