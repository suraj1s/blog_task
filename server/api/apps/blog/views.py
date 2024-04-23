from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework.views import APIView
from .models import Blog
from .serializers import BlogSerializer
from django.db.models import Q

class BlogListAPIView(generics.ListAPIView):
    serializer_class = BlogSerializer
    permission_classes = [permissions.AllowAny]
    
    def get_queryset(self):
        search_value = self.request.query_params.get('search', '')
        queryset = ''
        if search_value:
            queryset = Blog.objects.filter(
                Q(title__icontains=search_value) |
                Q(content__icontains=search_value)
            )
        else :
            queryset = Blog.objects.all()
        return queryset
    

class BlogListByUserAPIView(generics.ListAPIView):
    serializer_class = BlogSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        search_value = self.request.query_params.get('search', '')

        queryset = Blog.objects.filter(author=user)

        if search_value:
            queryset = queryset.filter(
                Q(title__icontains=search_value) |
                Q(content__icontains=search_value)
            )
        return queryset


class BlogCreateAPIView(generics.CreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = [permissions.IsAuthenticated]

class BlogDetailAPIView(generics.RetrieveAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = [permissions.AllowAny]


class BlogUpdateAPIView(generics.UpdateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = [permissions.IsAuthenticated]


class BlogDeleteAPIView(generics.DestroyAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = [permissions.IsAuthenticated]
   