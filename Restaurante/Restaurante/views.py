from django.shortcuts import render

def home(request):
      return render(request, 'index.html')
def login(request):
      return render(request,'login.html')
def Registro(request):
      return render(request,'registro.html')