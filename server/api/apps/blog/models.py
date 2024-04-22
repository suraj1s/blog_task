from django.db import models
from django.contrib.auth.models import User
from api.apps.common.models import BaseModel


class Blog (BaseModel):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(User , on_delete=models.CASCADE)

    def __str__(self):
        return self.title