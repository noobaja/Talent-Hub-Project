from rest_framework import serializers
from .models import TalentProfile, PortfolioItem
from dj_rest_auth.registration.serializers import RegisterSerializer
from django.contrib.auth import get_user_model
import django.db.transaction

class PortfolioItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = PortfolioItem
        fields = ['id', 'title', 'description', 'image_url', 'project_url']

class TalentProfileSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.email')
    portfolio_items = PortfolioItemSerializer(many=True, read_only=True)

    class Meta:
        model = TalentProfile
        fields = ['id', 'user', 'full_name', 'headline', 'bio', 'created_at', 'portfolio_items']
        read_only_fields = ['user']

User = get_user_model()

class CustomRegisterSerializer(RegisterSerializer):
    full_name = serializers.CharField(max_length=100)
    username = None # Abaikan username dari input

    @django.db.transaction.atomic
    def save(self, request):
        user = super().save(request)
        user.username = self.validated_data.get('email').split('@')[0]
        if User.objects.filter(username=user.username).exists():
            import random
            user.username = f"{user.username}{random.randint(100, 999)}"
        user.save()
        
        TalentProfile.objects.create(
            user=user,
            full_name=self.validated_data.get('full_name', ''),
            headline="Posisi atau Jabatan Anda",
            bio="Ceritakan tentang diri Anda..."
        )
        return user