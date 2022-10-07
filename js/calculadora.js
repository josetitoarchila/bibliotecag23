function realizar_operaciones_matematicas(){
    /*capturar el valor que ingresaron en las cajas de texto*/    
    var numero1 = document.getElementById("numero1").value;   
    var numero2 = document.getElementById("numero2").value;   

    if(numero1==''){
       document.getElementById("numero1").setAttribute("class", "form-control is-invalid");
       let parrafo1 = document.getElementById("parrafo_validar1");  
       parrafo1.innerHTML = "El campo numero 1 es obligatorio";
       parrafo1.setAttribute("class", "invalid-feedback");

    }else{
        document.getElementById("numero1").setAttribute("class", "form-control is-valid");
        let parrafo1 = document.getElementById("parrafo_validar1");  
        parrafo1.innerHTML = "";
    }

    if(numero2==''){
        document.getElementById("numero2").setAttribute("class", "form-control is-invalid");
        let caja1 = document.getElementById("div_validar2");
        caja1.innerHTML ="El campo numero 2 es obligatorio";
        caja1.setAttribute("class", "invalid-feedback");


    }
    else{
        document.getElementById("numero2").setAttribute("class", "form-control is-valid");
        let parrafo2 = document.getElementById("div_validar2");  
        parrafo2.innerHTML="";


    }
    if((numero1!='')&&(numero2!='')){
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        sumar(numero1, numero2);
        restar(numero1, numero2);
        multiplicar(numero1, numero2);  
    }

    function sumar(numero1, numero2){
        let resultado = numero1 + numero2;
        var caja_suma = document.getElementById("resultado_suma");
        caja_suma.innerHTML = "El resultado de la suma es "+resultado;
    }
    function restar(numero1, numero2){
        let resultado = numero1 - numero2;
        var caja_resta = document.getElementById("resultado_resta");
        caja_resta.innerHTML = "El resultado de la resta es "+resultado;
    }
    function multiplicar(numero1, numero2){
        let resultado = numero1 * numero2;
        var caja_multiplicar = document.getElementById("resultado_multiplicacion");
        caja_multiplicar.innerHTML = "El resultado de la multiplicacion es "+resultado; 
    }


}

/*let parrafos_html = new Array(5);*/

let parrafos = document.getElementsByTagName("p");

for(let i=0; i<parrafos.length; i++){
    let valor_parrafo=parrafos[i].textContent;
    console.log("valor parrafo "+valor_parrafo);
    if(i==3){
        parrafos[i].innerHTML = "le cambie el texto al parrafo";
    }
    //console.log("ingreso al for");   
}
/*crear etiqueta h5*/
let crear_etiqueta_h5 = document.createElement("h5");
let crear_texto_h5= document.createTextNode("TITULO EJEMPLO H3-11111");
crear_etiqueta_h5.appendChild(crear_texto_h5);

/*buscar caja donde pinr etiqueta*/
var caja_dinamica = document.getElementById("caja-uno");
caja_dinamica.appendChild(crear_etiqueta_h5);

var crear_caja = document.createElement("div");
var crear_texto_caja = document.createTextNode("crear texto para la caja");
crear_caja.appendChild(crear_texto_caja);

var buscar_punto_pintar = document.getElementById("caja-uno");
document.body.insertBefore(crear_caja, buscar_punto_pintar);

/*ejercicio base*/


var newDiv = document.createElement("div");
var newContent = document.createTextNode("hola mundo 2 div");
newDiv.appendChild(newContent); //añade texto al div creado.

var currentDiv = document.getElementById("caja-uno");
  document.body.insertBefore(newDiv, currentDiv);
  








