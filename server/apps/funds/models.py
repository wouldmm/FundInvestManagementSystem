from django.db import models
from apps.system.models import User
from utils.model import SoftModel, BaseModel
from apps.news_manage.models import News
# Create your models here.
class FundMain(models.Model):
    """
    基金主体信息
    """

    #基金运作方式编码
    OPERATE_MODE_ID = (
        (401001, "开放式基金"),
        (401002, "封闭式基金"),
        (401003, "QDII"),
        (401004, "FOF"),
        (401005, "ETF"),
        (401006, "LOF"),
    )

    #基金类别编码
    UNDERLYING_ASSET_TYPE_ID = (
        (402001,"股票型"),
        (402002,"货币型"),
        (402003,"债券型"),
        (402004,"混合型"),
        (402005,"基金型"),
        (402006,"贵金属"),
    )

    main_code = models.CharField(default="", max_length=12, verbose_name="基金主体代码", help_text="基金主体代码",primary_key=True)
    name = models.CharField(default="", max_length=100, verbose_name="基金名称", help_text="基金名称")
    advisor = models.CharField(default="", max_length=100,verbose_name="基金管理人", help_text="基金管理人")
    trustee = models.CharField(default="", max_length=100,verbose_name="基金托管人", help_text="基金托管人")
    operate_mode_id = models.IntegerField(choices=OPERATE_MODE_ID, verbose_name="基金运作方式代码", help_text="基金运作方式代码")
    operate_mode = models.CharField(default="", max_length=32,verbose_name="基金运作方式", help_text="基金运作方式")
    underlying_asset_type_id = models.IntegerField(choices=UNDERLYING_ASSET_TYPE_ID, verbose_name="投资标的类型代码", help_text="基金运作方式")
    underlying_asset_type = models.CharField(default="", max_length=32,verbose_name="投资标的类型", help_text="基金运作方式")
    start_date = models.DateTimeField(verbose_name="成立日期", help_text="成立日期",blank=True,null=True)
    end_date = models.DateTimeField(verbose_name="结束日期", help_text="结束日期", blank=True,null=True)
    
    class Meta:
        verbose_name = "基金主体信息"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name

class FundsNetvalue(models.Model):
    """
    基金净值信息
    """
    code = models.ForeignKey(FundMain,verbose_name="基金代码", on_delete=models.CASCADE)
    day = models.DateTimeField(verbose_name="交易日",help_text="交易日")
    net_value = models.DecimalField(default=0.00,max_digits=20,decimal_places=6, verbose_name="单位净值")
    sum_value = models.DecimalField(default=0.00,max_digits=20,decimal_places=6,verbose_name="累计净值",blank=True,null=True)
    factor = models.DecimalField(default=0.00,max_digits=20,decimal_places=6, verbose_name="复权因子")
    acc_factor = models.DecimalField(default=0.00,max_digits=20,decimal_places=6, verbose_name="累计复权因子")
    refactor_net_value = models.DecimalField(default=0.00,max_digits=20,decimal_places=6, verbose_name="累计复权净值")
    daily_return = models.DecimalField(max_digits=20,decimal_places=6, verbose_name="日收益",blank=True,null=True)
    month_return = models.DecimalField(max_digits=20,decimal_places=6, verbose_name="月收益",blank=True,null=True)
    quarter_return = models.DecimalField(max_digits=20,decimal_places=6, verbose_name="季收益",blank=True,null=True)
    total_return = models.DecimalField(max_digits=20,decimal_places=6, verbose_name="总收益",blank=True,null=True)

    class Meta:
        verbose_name = '基金净值信息'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.code

class Recommendfunds(models.Model):
    """
    推荐基金
    """
    #code = models.ForeignKey(FundMain,verbose_name="基金代码", on_delete=models.CASCADE)
    code = models.CharField(default="", max_length=12, verbose_name="基金主体代码", help_text="基金主体代码",primary_key=True)
    name = models.CharField(default="", max_length=100, verbose_name="基金名称", help_text="基金名称")
    comment = models.CharField(default="", max_length=200, verbose_name="评价", help_text="评价")
    total_return =  models.DecimalField(default=0.00,max_digits=20,decimal_places=6, verbose_name="回报率")
    
class UsersFunds(models.Model):
    """
    用户相关的基金
    1. 如用户是基金经理，则该基金是该基金经理运作的基金
    2. 如用户是投资者，则该基金是投资者关注的基金
    """
    #基金类别编码
    STATUS_TYPE = (
        (1,"关注"),
        (2,"取消关注"),
    )

    users = models.ForeignKey(User,verbose_name="用户ID", on_delete=models.CASCADE)
    funds = models.ForeignKey(FundMain,verbose_name="基金代码", on_delete=models.CASCADE,related_name='myfunds')
    description = models.CharField('描述', max_length=250, blank=True, null=True)
    status = models.IntegerField(choices=STATUS_TYPE, verbose_name="状态", help_text="基金状态") 

    class Meta:
        verbose_name = '关注基金'
        verbose_name_plural = verbose_name   

class UsersInvestFunds(models.Model):
    usersfunds = models.ForeignKey(UsersFunds,verbose_name="用户ID", on_delete=models.CASCADE)                                        
    amount = models.DecimalField(default=0.00,max_digits=20,decimal_places=6, verbose_name="基金份额")                  #投资者相关字段    
    enter_netvalue = models.DecimalField(default=0.00,max_digits=20,decimal_places=6, verbose_name="买入基金净值")      #投资者相关字段  
    enter_date = models.DateTimeField(verbose_name="买入基金日期",help_text="买入基金日期")                              #投资者相关字段

    class Meta:
        verbose_name = '投资基金'
        verbose_name_plural = verbose_name   

class UsersManageFunds(models.Model):    
    usersfunds = models.ForeignKey(UsersFunds,verbose_name="用户ID", on_delete=models.CASCADE)       
    total_amount = models.DecimalField(default=0.00,max_digits=20,decimal_places=6, verbose_name="基金总规模")          #基金经理相关字段
    fund_start = models.DateTimeField(verbose_name="基金开始日期",help_text="基金开始日期",null=True)                    #基金经理相关字段    

    class Meta:
        verbose_name = '管理基金'
        verbose_name_plural = verbose_name   

class UsersNews(models.Model):
    """
    用户相关的新闻
    """
    #基金类别编码
    STATUS_TYPE = (
        (1,"关注"),
        (2,"取消关注"),
    )

    users = models.ForeignKey(User,verbose_name="用户ID", on_delete=models.CASCADE)
    newsname  = models.ForeignKey(News,verbose_name="新闻名称", on_delete=models.CASCADE,related_name='news_name_id')
    newsurl = models.ForeignKey(News,verbose_name="新闻链接", on_delete=models.CASCADE,related_name='news_url_id')
    newsori = models.ForeignKey(News,verbose_name="信息来源", on_delete=models.CASCADE,related_name='origin_id')
    newsdate = models.ForeignKey(News,verbose_name="发布时间", on_delete=models.CASCADE,related_name='date_id')
    

    class Meta:
        verbose_name = '关注新闻'
        verbose_name_plural = verbose_name 

class ProtfolioStock(models.Model):
    """
    基金持股信息
    """
    code = models.ForeignKey(FundMain,verbose_name="基金代码", on_delete=models.CASCADE)
    period_start = models.DateTimeField(verbose_name="开始日期",help_text="开始日期")
    period_end = models.DateTimeField(verbose_name="报告期",help_text="报告期")
    pub_date = models.DateTimeField(verbose_name="公告日期",help_text="公告日期")
    rank = models.IntegerField(verbose_name="持仓排名", help_text="报告类持仓排名")
    symbol = models.CharField(default="", max_length=32,verbose_name="股票代码", help_text="股票代码")
    name = models.CharField(default="", max_length=100,verbose_name="股票名称", help_text="股票名称")
    shares = models.DecimalField(default=0.00,max_digits=20,decimal_places=4, verbose_name="持有股票数量",blank=True,null=True)
    market_cap = models.DecimalField(default=0.00,max_digits=20,decimal_places=4,verbose_name="持有股票的市值",blank=True,null=True)
    proportion = models.DecimalField(default=0.00,max_digits=10,decimal_places=4, verbose_name="占净值比例",blank=True,null=True)
    
    class Meta:
        verbose_name = '基金持股信息'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.code

class ProtfolioBond(models.Model):
    """
    基金持有债券信息
    """
    code = models.ForeignKey(FundMain,verbose_name="基金代码", on_delete=models.CASCADE)
    period_start = models.DateTimeField(verbose_name="开始日期",help_text="开始日期")
    period_end = models.DateTimeField(verbose_name="报告期",help_text="报告期")
    pub_date = models.DateTimeField(verbose_name="公告日期",help_text="公告日期")
    rank = models.IntegerField(verbose_name="持仓排名", help_text="报告类持仓排名")
    symbol = models.CharField(default="", max_length=32,verbose_name="债券代码", help_text="债券代码")
    name = models.CharField(default="", max_length=100,verbose_name="债券名称", help_text="债券名称")
    shares = models.DecimalField(default=0.00,max_digits=20,decimal_places=4, verbose_name="持有债券数量",blank=True,null=True)
    market_cap = models.DecimalField(default=0.00,max_digits=20,decimal_places=4,verbose_name="持有债券的市值",blank=True,null=True)
    proportion = models.DecimalField(default=0.00,max_digits=10,decimal_places=4, verbose_name="占净值比例",blank=True,null=True)
    
    class Meta:
        verbose_name = '基金持股信息'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.code

class FundProtfolio(models.Model):
    """
    基金持有资产组合信息
    """
    code = models.ForeignKey(FundMain,verbose_name="基金代码", on_delete=models.CASCADE)
    name = models.CharField(default="",max_length=80,verbose_name="基金名称",help_text="基金名称")
    period_start = models.DateTimeField(verbose_name="开始日期",help_text="开始日期")
    period_end = models.DateTimeField(verbose_name="报告期",help_text="报告期")
    pub_date = models.DateTimeField(verbose_name="公告日期",help_text="公告日期")
    equity_value = models.DecimalField(default=0.00,max_digits=20,decimal_places=4, verbose_name="权益类投资金额",blank=True,null=True)
    equity_rate = models.DecimalField(default=0.00,max_digits=10,decimal_places=4, verbose_name="权益类投资占比",blank=True,null=True)
    stock_value= models.DecimalField(default=0.00,max_digits=20,decimal_places=4, verbose_name="股票投资金额",blank=True,null=True)
    stock_rate = models.DecimalField(default=0.00,max_digits=10,decimal_places=4, verbose_name="股票投资占比",blank=True,null=True)
    fixed_income_value = models.DecimalField(default=0.00,max_digits=20,decimal_places=4, verbose_name="固定收益投资金额",blank=True,null=True)
    fixed_income_rate = models.DecimalField(default=0.00,max_digits=10,decimal_places=4, verbose_name="固定收益投资占比",blank=True,null=True)
    precious_metal_value = models.DecimalField(default=0.00,max_digits=20,decimal_places=4, verbose_name="贵金属投资金额",blank=True,null=True)
    precious_metal_rate = models.DecimalField(default=0.00,max_digits=10,decimal_places=4, verbose_name="贵金属投资占比",blank=True,null=True)
    derivative_value = models.DecimalField(default=0.00,max_digits=20,decimal_places=4, verbose_name="金融衍生品投资金额",blank=True,null=True)
    derivative_rate = models.DecimalField(default=0.00,max_digits=10,decimal_places=4, verbose_name="金融衍生品投资占比",blank=True,null=True)
    buying_back_value = models.DecimalField(default=0.00,max_digits=20,decimal_places=4, verbose_name="买入返售金融资产金额",blank=True,null=True)
    buying_back_rate = models.DecimalField(default=0.00,max_digits=10,decimal_places=4, verbose_name="买入返售金融资产占比",blank=True,null=True)
    deposit_value = models.DecimalField(default=0.00,max_digits=20,decimal_places=4, verbose_name="银行存款和结算备付金合计",blank=True,null=True)
    deposit_rate = models.DecimalField(default=0.00,max_digits=10,decimal_places=4, verbose_name="银行存款和结算备付金合计占比",blank=True,null=True)
    others_value = models.DecimalField(default=0.00,max_digits=20,decimal_places=4, verbose_name="其他资产",blank=True,null=True)
    others_rate = models.DecimalField(default=0.00,max_digits=10,decimal_places=4, verbose_name="其他资产占比",blank=True,null=True)
    total_asset = models.DecimalField(default=0.00,max_digits=20,decimal_places=4, verbose_name="总资产合计",blank=True,null=True)
    
    class Meta:
        verbose_name = '基金资产组合信息'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.code       