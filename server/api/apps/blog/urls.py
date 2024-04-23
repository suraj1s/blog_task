from django.urls import path
from .views import BlogListAPIView, BlogCreateAPIView, BlogDetailAPIView, BlogUpdateAPIView, BlogDeleteAPIView

urlpatterns = [
    path('getAll/', BlogListAPIView.as_view(), name='list'),
    path('create/', BlogCreateAPIView.as_view(), name='create'),
    path('detail/<int:pk>/', BlogDetailAPIView.as_view(), name='detail'),
    path('update/<int:pk>/', BlogUpdateAPIView.as_view(), name='update'),
    path('delete/<int:pk>/', BlogDeleteAPIView.as_view(), name='delete'),

]