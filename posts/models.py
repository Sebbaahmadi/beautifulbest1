from django.db import models

# Create your models here.
# posts/models.py

class Post(models.Model):
    title = models.TextField()
    date = models.DateTimeField()
    text = models.TextField(max_length=250)
    cover = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.title