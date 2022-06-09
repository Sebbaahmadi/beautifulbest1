from django.urls import path
from . import views

urlpatterns = [ 
    path("classtime", views.classtime , name = "classtime")
]