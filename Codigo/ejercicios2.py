inmuebles = ['1. año: 2000, metros: 100, habitaciones: 3, garaje: Si Tiene, zona: A','2. año: 2012, metros: 60, habitaciones: 2, garaje: Si Tiene, zona: B','3. año: 1980, metros: 120, habitaciones: 4, garaje: No Tiene, zona: A','4. año: 2005, metros: 75, habitaciones: 3, garaje: Si Tiene, zona: B','5. año: 2015, metros: 90, habitaciones: 2, garaje: No Tiene, zona: A']
#Inmuebles zona A
PrecioInmuebleUnoA = (100*1000)+(3*5000)+(1*15000)
PrecioInmuebleDosA = (120*1000)+(4*5000)+(0*15000)
PrecioInmuebleTresA = (90*1000)+(2*5000)+(0*15000)
#Inmuebles zona B
PrecioInmuebleCuatroB = (60*1000)+(2*5000)+(1*15000)
PrecioInmuebleCincoB = (75*1000)+(3*5000)+(1*15000)

def busquedaInmueble():
    presupuesto = int(input("Ingrese la cantidad de presupuesto que tiene "))
    inmueblesImpresos = 0
    print("Buscando Inmuebles aptos...")
    if(presupuesto >= PrecioInmuebleUnoA):
        print(inmuebles[0], "Con un valor de " , PrecioInmuebleUnoA)
        inmueblesImpresos = inmueblesImpresos +1
    if(presupuesto >= PrecioInmuebleDosA):
        print(inmuebles[1], "Con un valor de " , PrecioInmuebleDosA)
        inmueblesImpresos = inmueblesImpresos +1
    if(presupuesto >= PrecioInmuebleTresA):
        print(inmuebles[2], "Con un valor de " , PrecioInmuebleTresA)
        inmueblesImpresos = inmueblesImpresos +1
    if(presupuesto >= PrecioInmuebleCuatroB):
        print(inmuebles[3], "Con un valor de " , PrecioInmuebleCuatroB)
        inmueblesImpresos = inmueblesImpresos +1
    if(presupuesto >= PrecioInmuebleCincoB):
        print(inmuebles[4], "Con un valor de " , PrecioInmuebleCincoB)
        inmueblesImpresos = inmueblesImpresos +1
    if(inmueblesImpresos>=1):
        seleccionInmueble = int(input("Ingrese el numero del inmueble preferido "))
        print("Inmueble seleccionado ", inmuebles[seleccionInmueble-1])
        volver= input("¿Quiere Consultar otros inmubles con un presupuesto diferente? ")
        if(volver == "Si" or volver == "si" or volver == "SI" or volver == "sI"):
            busquedaInmueble()
        elif(volver == "No" or volver == "no" or volver == "NO" or volver == "nO"):
            print("Gracias por usar el sistema.")
    else:
        print("No se encontro ningún inmueble con el presupuesto ingresado")
        volver= input("¿Quiere Consultar otros inmubles con un presupuesto diferente? ")
        if(volver == "Si" or volver == "si" or volver == "SI" or volver == "sI"):
            busquedaInmueble()
        elif(volver == "No" or volver == "no" or volver == "NO" or volver == "nO"):
            print("Gracias por usar el sistema.")

busquedaInmueble()