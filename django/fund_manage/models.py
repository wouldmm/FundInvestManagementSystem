from django.db import models

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
        return self.name

class Recommendfunds(models.Model):
    """
    推荐基金
    """
    #code = models.ForeignKey(FundMain,verbose_name="基金代码", on_delete=models.CASCADE)
    code = models.CharField(default="", max_length=12, verbose_name="基金主体代码", help_text="基金主体代码",primary_key=True)
    name = models.CharField(default="", max_length=100, verbose_name="基金名称", help_text="基金名称")
    comment = models.CharField(default="", max_length=200, verbose_name="评价", help_text="评价")
    total_return =  models.DecimalField(default=0.00,max_digits=20,decimal_places=6, verbose_name="回报率")
    
