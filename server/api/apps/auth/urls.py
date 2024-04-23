from django.urls import path
from .views import (
    UserCreateAPIView,
    UserLoginAPIView,
    UserLogoutAPIView,
    MyTokenObtainPairView,
)
from rest_framework_simplejwt.views import( 
    TokenRefreshView,
    TokenVerifyView
    )

urlpatterns = [
    path('token/', MyTokenObtainPairView, name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('signup/', UserCreateAPIView.as_view(), name='user-signup'),
    path('signin/', UserLoginAPIView.as_view(), name='user-login'),
    path('signout/', UserLogoutAPIView.as_view(), name='user-logout'),
]