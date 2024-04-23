from django.urls import path
from .views import BlogListAPIView, BlogCreateAPIView, BlogDetailAPIView, BlogUpdateAPIView, BlogDeleteAPIView, BlogListByUserAPIView

urlpatterns = [
    path('getAll/', BlogListAPIView.as_view(), name='list'),
    path('create/', BlogCreateAPIView.as_view(), name='create'),
    path('detail/<uuid:pk>/', BlogDetailAPIView.as_view(), name='detail'),
    path('update/<uuid:pk>/', BlogUpdateAPIView.as_view(), name='update'),
    path('delete/<uuid:pk>/', BlogDeleteAPIView.as_view(), name='delete'),
    path('getByUser/', BlogListByUserAPIView.as_view(), name='list_by_user'),

]