from rest_framework import permissions

class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        # Untuk TalentProfile, pemiliknya adalah user
        if hasattr(obj, 'user'):
            return obj.user == request.user
        # Untuk PortfolioItem, pemiliknya adalah profil yang terhubung ke user
        if hasattr(obj, 'talent_profile'):
            return obj.talent_profile.user == request.user
        return False