from dataclasses import field
import imp
from rest_framework import serializers
from . import models


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Profile
        fields = ['avatar']