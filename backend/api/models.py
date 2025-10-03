from django.db import models
from django.conf import settings

class TalentProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='talentprofile')
    full_name = models.CharField(max_length=100)
    headline = models.CharField(max_length=200, blank=True)
    bio = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.email

class PortfolioItem(models.Model):
    talent_profile = models.ForeignKey(TalentProfile, related_name='portfolio_items', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    image_url = models.URLField(max_length=255, blank=True)
    project_url = models.URLField(max_length=255, blank=True)

    def __str__(self):
        return self.title