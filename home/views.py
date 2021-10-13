from django.template import context
from home.models import Customer
from django.shortcuts import redirect, render
from django.http import HttpResponse
from .models import *
# Create your views here.

def homepage(request):
    medi = Medicine.objects.all()
    compi = Company.objects.all()
    emploi = Employee.objects.all()
    custi = Customer.objects.all()
    bili = Bill.objects.all()
    emploi_sal = EmployeeSalary.objects.all()
    context={'medi':medi, 'compi':compi, 'emploi':emploi, 'custi':custi, 'bili':bili, 'emploi_sal':emploi_sal}
    return render(request, 'home.html', context)
  
   #Medicine
def Medicine_add(request):
    if request.method=='POST':
        med= Medicine()
        med.name= request.POST.get('name1')
        med.desc = request.POST.get('desc1')
        med.sell_price = request.POST.get('sellprice')
        med.buy_price = request.POST.get('buyprice')
        med.in_stock = request.POST.get('stock1')
        med.shelf_no = request.POST.get('shelf')
        med.added_on = request.POST.get('date1')
        med.company_id = Company.objects.get(name=request.POST['name2'])
        med.save()
    return render(request, 'Add\Add_Medicine.html' )
def Medicine_view(request):
    medi= Medicine.objects.all()
    context={'medi':medi}
    return render(request, 'View\View_Medicine.html',context)

     #Company
def Company_add(request):
    if request.method=='POST':
     comp = Company()
     comp.name= request.POST.get('name2')
     comp.desc = request.POST.get('desc2')
     comp.address = request.POST.get('address2')
     comp.contact = request.POST.get('contact2')   
     comp.added_on = request.POST.get('date2')
     comp.save()
    return render(request, 'Add\Add_Company.html')
def Company_view(request):
    compi= Company.objects.all()
    context={'compi':compi}
    return render(request,'View\View_Company.html', context)


     # Customer
def Customer_add(request):
    if request.method=='POST':
     cust = Customer()
     cust.name= request.POST.get('name3')
     cust.address = request.POST.get('address3')
     cust.contact = request.POST.get('contact3')   
     cust.added_on = request.POST.get('date3')
     cust.save()
    return render(request, 'Add\Add_Customer.html',)

def Customer_view(request):
    custi = Customer.objects.all()
    context = {'custi':custi}
    return render(request, 'View\View_Customer.html', context)
   
     #Bill
def Bill_add(request):
    if request.method=='POST':
     bil = Bill()
     bil.medicine_id= Medicine.objects.get(name=request.POST['name1'])
     bil.qty = request.POST.get('quant')
     bil.customer_id = Customer.objects.get(name=request.POST['name3'])   
     bil.added_on = request.POST.get('date6')
     bil.save()
    return render(request, 'Add\Add_Bill.html') 
def Bill_view(request):
    bili= Bill.objects.all()
    context={'bili':bili}
    return render(request,'View\View_Bill.html', context)
  
    #Employee_Salary
def Employee_salary_add(request):
    if request.method=='POST':
     emplo_sal = EmployeeSalary()
     emplo_sal.added_on= request.POST.get('date5')
     emplo_sal.salary_amount = request.POST.get('salary_am')   
     emplo_sal.salary_date = request.POST.get('salary_mo')
     emplo_sal.employee_id = Employee.objects.get(name=request.POST['name4'])
     emplo_sal.save()
    return render(request,'Add\Add_Employee_salary.html')
def Employee_salary_view(request):
    emploi_sal = EmployeeSalary.objects.all()
    context= {'emploi_sal':emploi_sal}
    return render(request, 'View\View_Employee_salary.html', context)

    #Employee
def Employee_add(request):
    if request.method=='POST':
     emplo = Employee()
     emplo.name= request.POST.get('name4')
     emplo.address = request.POST.get('address4')
     emplo.contact = request.POST.get('contact4')   
     emplo.joining_date = request.POST.get('date4')
        
     emplo.save()
    return render(request, 'Add\Add_Employee.html')
def Employee_view(request):
    emploi = Employee.objects.all()
    context= {'emploi':emploi}
    return render(request, 'View\View_Employee.html', context)