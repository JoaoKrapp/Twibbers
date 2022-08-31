from email.policy import default
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

def upload_to(instance, filename):
    return f'avatar/{filename}'

class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    avatar = models.ImageField(upload_to='avatar/', default='default_avatar.jpg')
    