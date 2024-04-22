from django.db import models
from api.apps.common.models import BaseModel
from api.apps.auth.models import CustomUser

class Blog (BaseModel):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(CustomUser , on_delete=models.CASCADE)

    def __str__(self):
        return self.title