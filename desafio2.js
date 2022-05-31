function desafio2() {
    const pi = Math.PI;
    var radio = parseFloat(prompt("Ingresa el radio del circulo"));


    while(!validar(radio)) {
        var radio = parseFloat(prompt("Elegi otro numero: "));
    }
    
    var area = pi * radio * radio;
    alert("El resultado del area es: " + area);
}

function validar(num) {
    if (num<0) {
        alert("No se puede operar con numeros negativos");
    } 
    else if (num==0) {
        alert("No se puede operar con cero");
    }
    else if (num>100) {
        alert("El valor tiene que ser menor que 100");
    }
    else{
        return true;
    }
    return false;
}