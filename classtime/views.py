from django.shortcuts import render
from classtime.models import Blog1

# Create your views here.

def classtime(request):
    post=Blog1.objects.all()
    return render (request, 'class_time/class_time.html', {'post':post})