from django.urls import path
from . views import RegisterView, home
from . import views

# Add the following to the list of previous imports
from django.contrib.auth import views as auth_views
from .views import CustomLoginView  
from .forms import LoginForm

app_name = "home" 

urlpatterns = [
    path('', views.home, name = "home"),
    path('profile', views.profile, name = "profile"),
    path('register', RegisterView.as_view(), name='users-register'),
    path('Common Questions',views.commonquestion, name="Common Questions"),
    # Add this path for login and logout
    path('login', CustomLoginView.as_view(redirect_authenticated_user=True, template_name='home/login.html',authentication_form=LoginForm), name='login'),                             
    path('logout', auth_views.LogoutView.as_view(template_name='home/logout.html'), name='logout'),
    path('profile',views.profile, name='profile'),
    
]