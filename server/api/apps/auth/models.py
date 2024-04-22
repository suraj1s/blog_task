from django.contrib.auth.models import AbstractUser
from django.db import models
from api.apps.common.models import BaseModel

class CustomUser(AbstractUser, BaseModel):
    phone_number = models.BigIntegerField(
        blank=True,
        null=True,
    )
    is_active = models.BooleanField(default=True)

    class Meta:
        # Set a unique app_label if the model is in a different app
        app_label = 'authentication'

    # Define related_name for groups relationship
    groups = models.ManyToManyField(
        'auth.Group',
        verbose_name='groups',
        blank=True,
        related_name='custom_user_groups'
    )

    # Define related_name for user_permissions relationship
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        verbose_name='user permissions',
        blank=True,
        related_name='custom_user_permissions'
    )

    def __str__(self):
        return self.username
