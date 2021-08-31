def nota_quices (idEstudiante,notaUno,notaDos,notaTres,notaCuatro,canNotas):
    promedio = (notaUno + notaDos + notaTres + notaCuatro)/(canNotas)/(2)
    mensajeFinal = f"El promedio ajustado del estudiante {idEstudiante}, es: {promedio}"
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
resultado = nota_quices(codigo,notas[0],notas[1],notas[2],notas[3],canNotas)
print(resultado)
# promedio = nota_quices(codigo,notas[0],notas[1],notas[2],notas[3],canNotas)
# print( f"El promedio ajustado del estudiante {codigo}, es: {promedio}")