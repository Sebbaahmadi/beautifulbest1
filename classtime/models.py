from asyncio.windows_events import NULL
from pickle import TRUE
from django.db import models
from operator import truediv 

# Create your models here.

class Blog1(models.Model):
    title = models.CharField(max_length=250)
    text = models.TextField()
    date = models.DateTimeField()
    image = models.ImageField(upload_to ="img/%y", null = True) #this

    def _str_(self):
        return self.title
