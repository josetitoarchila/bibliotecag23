/*alert("mensaje en archivo ejercicio 1");*/
/*
    implementar con la sumatoria de dos numeros
*/
let numero1 = prompt("ingresar numero 1");
let numero2 = prompt("ingresar numero 2");
let resultado= parseInt(numero1)+parseInt(numero2);
//1-mostrar sumatoria por la ventana emergente
alert("la sumatoria es "+resultado);
//2-mostrar sumatoria por la consola del navegador
console.log("la sumatoria es "+resultado);
//3-mostrar sumatoria escribiendo sobre la pagina html
document.write("<p style=text-align:center>la sumatoria es " +resultado+ "</p>");

document.write("<p class='estilo1'>(2)la sumatoria es " +resultado+ "</p>");

/*implementar estilos de bootstrap en el javascript*/


//saignar un numero de tipo float
let numero3=5.45;
//asignar un numero de tipo entero
let numero4=35685;

//crear arreglos en JavaScript
var arreglo1=["Quimica", "Fisica", 5, 2.3, true, "Idiomas" ];

document.write(arreglo1[0]+"</br>");
document.write(arreglo1[1]+"</br>");
document.write(arreglo1[2]+"</br>");
document.write(arreglo1[3]+"</br>");
document.write(arreglo1[4]+"</br>");
document.write(arreglo1[5]+"</br>");
document.write(arreglo1[6]+"</br>");
arreglo1[arreglo1.length] = "Matematicas";
arreglo1[arreglo1.length] = "Deportes";
document.write(arreglo1[7]+"</br>");
document.write(arreglo1[8]+"</br>");


for(let i=0; i<arreglo1.length; i++){
    document.write(arreglo1[i]+"</br>");
}

document.write("<p class='text-primary' style='text-align:center'>" +arreglo1.join('<br />')+"</p>");
document.write("<p class='text-primary' style='text-align:center'>" +arreglo1.sort()+"</p>");

/*ejercicios con ciclos
while
*/

var tabla_multiplicar=prompt("ingrese Tabla de multiplicar");
tabla_multiplicar=parseInt(tabla_multiplicar);
let j=1;
/*document.write("<div style='text-align:center' class='p-3 mb-2 bg-info text-white'>");*/
while(j<10){
    document.write("<p>"+tabla_multiplicar + " por " +j+" es "+j*tabla_multiplicar+"</p>");
    j++;
}
/*document.write("</div");*/

let i = 0; 
do { 
    i += 1; 
    console.log(i); 
} while (i < 5);

/*hacer ejercicio con if - else if -else
*/

let edad= prompt("ingrese edad");
edad= parseInt(edad);
if(edad<18){
    document.write("<p class='text-primary' style='text-align:center'>es menor de edad</p>");
    
    
}else if(edad<70){
    document.write("<p class='text-primary' style='text-align:center'>es mayor de edad</p>");
    
}else{
    document.write("<p class='text-primary' style='text-align:center'>es tercera de edad</p>");
    
}
document.write("<div>");
let fruta= prompt("ingrese fruta");
switch(fruta){
    case 'naranjas':
        document.write("<p class='text-primary' style='text-align:center'>las naranjas valen 3000</p>");
        break;
    case 'manzanas':
        document.write("<p class='text-primary' style='text-align:center'>las manzanas valen 6000</p>");
        break;
    case 'peras':
            document.write("<p class='text-primary' style='text-align:center'>las peras valen 7000</p>");
            break;
    default:
        document.write("<p class='text-primary' style='text-align:center'>la fruta no esta en el sistema</p>");
        break;


}

suma(5, 7, 6 );


function suma(numero1, numero2, numero3){
    resultado = numero1, numero2, numero3;
    alert("resultado "+resultado);
}

document.write("</div>");


var nombres = document.getElementById("nombres");

var precio = document.getElementsByTagName("span");



