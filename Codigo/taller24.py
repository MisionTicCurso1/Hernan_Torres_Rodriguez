#EjercicioUno
# def verificacionCorreo(correo):
#     if(correo.find("@") == True):
#         print("Su correo es valido")
#     else:
#         print("Su correo es valido")
# correoUsuario = input("Ingrese su correo electrónico: ")
# verificacionCorreo(correoUsuario)

#ejercicio2
# total = 0
# def sumas(a,b): 
#     global total
#     total = a+b
#     print(total)
# numero = int(input("Ingresa un numero"))
# while (numero != 0):
#     sumas(numero,total)
#     numero = int(input("Ingresa un numero"))
    
#ejercicio3
# total = 0
# def sumas(a,b): 
#     global total
#     total = a+b
#     print(total)
# numero = int(input("Ingresa un numero"))
# while (numero != 0):
#     sumas(numero,total)
#     numero = int(input("Ingresa un numero"))
#     if(numero == 0):
#         print(total)
#         break;


#ejercicio4



# ejercicio5 
# number = input("Ingrese cualquier numero ")
# can = int(len(number))
# print(can)
# numberOneD = input("Ingrese un numero de solo digito")
# contador = 0
# contadorF = 0
# for i in number:
#     if(i == numberOneD ):   
#         contadorF = contadorF + 1
#         print(contadorF)
#     if(contador == can):
#         if(contador>0):
#             print("La cantidad de frecuencia es ", contadorF)
#         else:
#             print("La cantidad de frecuencia es ", contadorF)

#ejercicio6
# def factorial(num):
#     if num == 0 or num == 1:
#         resultado = 1
#         print(resultado)
#     elif num > 1:
#         resultado = num * factorial(n-1)
#     return resultado
# ResultadoFac = factorial(float(input("Ingrese su numero a conocer su factorial ")))
# print(ResultadoFac)