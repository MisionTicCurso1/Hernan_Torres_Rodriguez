peso =  float(input("Bienvenido, por favor ingrese su peso  "))
estatura =  float(input("Ingrese su altura  "))
estatura = estatura*estatura
imc = peso/estatura
if (imc <= 18.5 ):
    print("Insuficiencia ponderal")
if (imc > 18.5 and  imc >= 24.9):
    print("Intervalo Normal")
if (imc >= 25.0 and  imc >= 29.9):
    print("Preobesidad")
if (imc == 30):
    print("Obesidad")
if (imc > 30.0 and  imc >= 34.9):
    print("Obesidad clase 1")
if (imc >= 35.0 and  imc >= 39.9):
    print("Obesidad clase 2")
if (imc >= 40.0):
    print("Obesidad clase 3")