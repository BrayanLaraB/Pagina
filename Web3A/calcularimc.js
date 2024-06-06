var peso, altura, imc, caja, texto

function calcularimc(){
    peso=parseFloat(document.getElementById("peso").value)
    altura=parseFloat(document.getElementById("altura").value)
    imc=peso/ (altura*altura)
    caja=document.getElementById("imc")
    caja.value=imc

    if(imc<18.5){
        texto="Bajo peso"
        document.getElementById("texto").innerHTML = texto
    }else if(imc>=18.5 && imc<=24.9){
        texto="Adecuado"
        document.getElementById("texto").innerHTML = texto
    }else if(imc>=25.0 && imc<=29.9){
        texto="Sobrepeso"
        document.getElementById("texto").innerHTML = texto
    }else if(imc>=30.0 && imc<=34.9){
        texto="Obesidad Grado I"
        document.getElementById("texto").innerHTML = texto
    }else if(imc>=35.0 && imc<=39.9){
        texto="Obesidad Grado II"
        document.getElementById("texto").innerHTML = texto
    }else{
        texto="Obesidad Grado III"
        document.getElementById("texto").innerHTML = texto
    }
}