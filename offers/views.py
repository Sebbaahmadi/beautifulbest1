from django.shortcuts import render

# Create your views here.

def offers(reauest):
    return render (reauest , 'offers/offers.html')