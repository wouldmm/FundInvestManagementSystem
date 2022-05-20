from django.http import HttpResponse
from django.views.generic import TemplateView,ListView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy

from .models import News

class NewsList(ListView):
    model = News
    context_object_name = 'news'

class NewsCreate(CreateView):
    model = News
    fields = '__all__'
    success_url = reverse_lazy('news_manage:news_list')

class NewsUpdate(UpdateView):
    model = News
    fields = '__all__'
    success_url = reverse_lazy('news_manage:news_list')

class NewsDelete(DeleteView):
    model = News
    success_url = reverse_lazy('news_manage:news_list')