function calcularDescuento()
{
var valorTicket=200;


var cantidadTickets=document.getElementById("cantidadForm").value;

var select=document.getElementById("categoriaSelect");
var selectActiva=select.options[select.selectedIndex].value;

var resultado=0
var valorSinDesc=0
var descuento=0

switch(selectActiva=parseInt(selectActiva))
{
    case 1:
        valorSinDesc=cantidadTickets*valorTicket;
        descuento=(valorSinDesc*80)/100;
        resultado=valorSinDesc-descuento;
        break;
    
    case 2:
        valorSinDesc=cantidadTickets*valorTicket;
        descuento=(valorSinDesc*50)/100;
        resultado=valorSinDesc-descuento;
        break;
    
    case 3:
        valorSinDesc=cantidadTickets*valorTicket;
        descuento=(valorSinDesc*15)/100;
        resultado=valorSinDesc-descuento;
        break;
}

document.getElementById("totalAPagar").value="Total a Pagar: $"+resultado;

}

function limpiar()
{

document.getElementById("totalAPagar").value="Total a Pagar: $0"

}