

let matrizTriangular = () => {

    
    let n = document.getElementById("nfilcol").value
    let matriz = new Array(n)
    for (let k = 0; k < n; k++) {
        matriz[k] = new Array(n)

    }

    //Valores para la matriz
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {

            valor = parseInt(prompt("LLenando la matriz de " + n + "X" + n + "\nValor de la posicion [" + i + "][" + j + "]"))

            if (isNaN(valor)) {
                numero = 0
            } else {
                numero = valor
            }
            matriz[i][j] = numero
        }

    }
    //Imprimir matriz
    let p = document.getElementById("matriz")
    let txt = ""
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            txt = txt + matriz[i][j]

            p.innerHTML = txt
        }
        txt = txt + "<br/>"
        p.innerHTML = txt
    }
    //Verificar la matriz
    
    let resultmatriz = document.getElementById("resmatriz")
    if (verificarMatriz(matriz, n)) {
        resultmatriz.style.color = "#00008B"
        resultmatriz.innerHTML = "Si es triangular superior"
    } else {
        resultmatriz.style.color = "purple"
        resultmatriz.innerHTML = "No es triangular superior"
    }

}

let verificarMatriz = (matriz, n) => {


    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i > j && matriz[i][j] != 0) {
                return false
            }
        }
    }
    return true
}