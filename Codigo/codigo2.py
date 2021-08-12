def multiple(numberOne,numberTwo):
    resto = numberOne % numberTwo
    if(resto == 0):
        print("Es multiplo")
    else:
        print("No es multiplo")

multiple(int(input("Ingresa el primer numero ")), int(input("Ingresa el segundo numero ")))