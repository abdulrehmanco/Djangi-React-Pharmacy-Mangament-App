from django.urls import path
from . import views

urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('home', views.homepage, name='homepage'),
    path('medicine_view', views.Medicine_view, name='medicine_view'),
    path('medicine_add', views.Medicine_add, name='medicine_add'),
    path('customer_add', views.Customer_add, name='customer_add'),
    path('customer_view', views.Customer_view, name='customer_view'),
    path('bill_view', views.Bill_view, name='bill_view'),
    path('bill_add', views.Bill_add, name='bill_add'),
    path('company_add', views.Company_add, name='company_add'),
    path('company_view', views.Company_view, name='company_view'),
    path('employee_view', views.Employee_view, name='employee_view'),
    path('employee_add', views.Employee_add, name='employee_add'),
    path('emplo_sal_view', views.Employee_salary_view, name='emplo_sal_view'),
    path('emplo_sal_add', views.Employee_salary_add, name='employ_sal_add'),
   
    
    
]


