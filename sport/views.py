from django.shortcuts import render

# Create your views here.

def sport(reauest):
    return render (reauest , 'sport/sport.html')