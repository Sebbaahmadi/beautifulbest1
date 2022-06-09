from django.shortcuts import render
from django.http import HttpResponse
from . models import Contact

# Create your views here.

def contact(request):
    if request.method == 'POST':
        # get the data from the form
        v_name = request.POST.get("firstname")
        v_emile = request.POST.get("email")
        v_subject = request.POST.get("subject") 
        v_text = request.POST.get("text") 

        # send the data to data base
        #this is object: name of the class 
        v_contact = Contact(
            name =  v_name,
            email = v_emile,
            subject = v_subject,
            masseage = v_text)
        v_contact.save()
        return render(request, 'contact/contact.html')
    else:
        return render(request, 'contact/contact.html')
