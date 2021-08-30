def parametros (idEstudiante,notaUno,notaDos,notaTres,notaCuatro,canNotas):
    promedio = (notaUno + notaDos + notaTres + notaCuatro)/canNotas
    estudiante = {
    'codigo estudiante' : idEstudiante,
    'nota uno' : notas[0],
    'nota dos' : notas[1],
    'nota tres' : notas[2],
    'nota cuatro' : notas[3],
    'promedio' : promedio
    }
    print(estudiante);
codigo = input("Ingrese el codigo del estudiante a conocer su promedio ")
notas = []
for i in range(0,5):
    nota = float(input("Ingrese la nota "))
    nota = round(nota , 2)
    notas.append(nota)
notas.sort()
notas.pop(0)
canNotas = len(notas)
parametros(codigo,notas[0],notas[1],notas[2],notas[3],canNotas)