from django.db import models

# Create your models here.
class News(models.Model):
    news_name = models.CharField(max_length = 200,primary_key = True)
    news_url = models.CharField(max_length = 200)
    origin = models.CharField(max_length = 200)
    date = models.DateTimeField()

    def __str__(self):
        return self.news_name