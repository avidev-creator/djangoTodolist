
from django.contrib import admin
from django.urls import path
from api.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TaskList.as_view(), name='tasks' ),
    path('task/<int:pk>', TaskDetail.as_view(), name='task' ),
]
