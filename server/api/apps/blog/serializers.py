from rest_framework import serializers
from .models import Blog


class BlogSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField(read_only=True)
    class Meta:
        model = Blog
        fields = '__all__'
        read_only_fields = ['author']

    def get_author(self, obj):
        return obj.author.username
        
    def create(self, validated_data):
        user = self.context['request'].user
        blog = Blog.objects.create(author=user, **validated_data)
        return blog

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.content = validated_data.get('content', instance.content)
        instance.save()
        return instance