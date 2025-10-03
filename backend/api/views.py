from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import TalentProfile, PortfolioItem
from .serializers import TalentProfileSerializer, PortfolioItemSerializer
from .permissions import IsOwnerOrReadOnly

class TalentProfileViewSet(viewsets.ModelViewSet):
    queryset = TalentProfile.objects.all()
    serializer_class = TalentProfileSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

    @action(detail=False, methods=['get', 'put', 'patch'], permission_classes=[permissions.IsAuthenticated])
    def me(self, request):
        profile = TalentProfile.objects.get(user=request.user)
        if request.method == 'GET':
            serializer = self.get_serializer(profile)
            return Response(serializer.data)
        
        serializer = self.get_serializer(profile, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class PortfolioItemViewSet(viewsets.ModelViewSet):
    serializer_class = PortfolioItemSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]

    def get_queryset(self):
        return PortfolioItem.objects.filter(talent_profile__user=self.request.user)

    def perform_create(self, serializer):
        profile = TalentProfile.objects.get(user=self.request.user)
        serializer.save(talent_profile=profile)