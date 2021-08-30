def parametros (idEstudiante,notaUno,notaDos,notaTres,notaCuatro,canNotas):
    promedio = (notaUno + notaDos + notaTres + notaCuatro)/canNotas
    mensajeFinal = "El promedio ajustado del estudiante ", idEstudiante, " es: ", promedio
    return mensajeFinal
codigo = input("Ingrese el codigo del estudiante a conocer su promedio ")
notas = []
for i in range(0,5):
    nota = float(input("Ingrese la nota "))
    nota = round(nota , 2)
    notas.append(nota)
notas.sort()
notas.pop(0)
canNotas = len(notas)
mensaje = parametros(codigo,notas[0],notas[1],notas[2],notas[3],canNotas)
print(mensaje)