from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TalentProfileViewSet, PortfolioItemViewSet

router = DefaultRouter()
router.register(r'profiles', TalentProfileViewSet, basename='talentprofile')
router.register(r'portfolios', PortfolioItemViewSet, basename='portfolioitem')

urlpatterns = [
    path('', include(router.urls)),
]