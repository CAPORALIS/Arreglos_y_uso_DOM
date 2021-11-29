

let trianguloPascal = (capas, resultado) => {

    let res = resultado
    let limite = capas
   
    //Creación de la matriz bidimensional
    let matriz = new Array()
    matriz[0] = new Array(1)
    matriz[0][0] = 1
    matriz[1] = new Array(2)
    matriz[1][0] = 1
    matriz[1][1] = 1

    //Arrays y valores
    for (let i = 2; i < limite; i++) {
        matriz[i] = new Array(matriz[i - 1].length + 1)
        matriz[i][0] = 1
        matriz[i][matriz[i].length - 1] = 1

        
        for (let n = 1; n < matriz[i].length - 1; n++) {
            matriz[i][n] = matriz[i - 1][n - 1] + matriz[i - 1][n]
        }

    }
    
    let texto = ""
    for (var n = 0; n < limite; n++) {
        for (let i = 0; i < matriz[n].length; i++) {

            texto = texto + (matriz[n][i] + " ")
            res.innerHTML = texto
        }
        texto = texto + ("<br/>")
        res.innerHTML = texto

    }




}

let imprimirTriangulo = () => {

    let ncapas = document.getElementById("inputcapas").value
    let resultado = document.getElementById("resultado")
    trianguloPascal(ncapas, resultado)

}