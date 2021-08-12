# #Ejercicio Uno
cantidadOreo = 2
cantidadKitKat = 5
cantidadBrownie = 5
cantidadBanquillo = 5
selectedIce = 0
def ice():
    global cantidadOreo
    global cantidadKitKat
    global cantidadBrownie
    global cantidadBanquillo
    global selectedIce
    print("Bienvenido a la Tienda de Helados")
    print("El menu es el siguiente")
    print("1. El helado sin topping cuesta 1.900")
    print("2. El topping de oreo cuesta 1.000")
    print("3. El topping de KitKat cuesta 1.500")
    print("4. El topping de brownie cuesta 2.500")
    print("5. El topping de barquillo cuesta 950")
    selectedIce = int(input("Ingrese el helado seleccionado:  "))
    if(selectedIce == 1):
        print("El Helado seleccionado es un helado sin topping de 1900")
    if(selectedIce == 2 and cantidadOreo >= 1):
        cantidadOreo = cantidadOreo - 1 
        print("El Helado seleccionado es un helado de Oreo 1000")
        print(cantidadOreo)
    if(selectedIce == 3 and cantidadKitKat > 1):
        cantidadKitKat = cantidadKitKat - 1 
        print("El Helado seleccionado es un helado de KitKat 1500")
    if(selectedIce == 4 and cantidadBrownie >= 1):
        cantidadBrownie = cantidadBrownie - 1
        print("El Helado seleccionado es un helado de brownie 2500")
    if(selectedIce == 5 and cantidadBanquillo >= 1):
        cantidadBanquillo = cantidadBanquillo - 1
        print("El Helado seleccionado es un helado de banquillo 950")
    if(cantidadOreo == 0 or cantidadKitKat == 0 or cantidadBrownie == 0 or cantidadBanquillo == 0):
        print("No queda más del topping seleccionado")
        print("El valor de un helado sin topping es de 1.900")
    respuesta = input("Si quiere comprar otro helado digite 'Si' por otro lado si no gusta de más helados pues digite 'No'")
    if(respuesta == "Si" or respuesta == "si" or respuesta == "SI"):
        ice()
    if(respuesta == "No" or respuesta == "no" or respuesta == "NO"):
        print("Gracias")
ice()

# #Ejercicio 2
# consumo = 2557
# unidad = 7
# decena = 5
# centena = 5
# mil = 2
# cien = 557-100
# primerosCien = 100*10
# cien = cien*25
# masMil = 2000*95
# valor = primerosCien + cien + masMil
# print(valor)