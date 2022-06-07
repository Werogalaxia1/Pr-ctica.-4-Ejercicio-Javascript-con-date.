let No, Ed,Lo,Pr;
No=prompt("Escribir el Nombre, porfavor:")
Ed=prompt("Escribir la Edad, porfavor:")
Lo=prompt("Escribir la Localidad, porfavor:")
Pr=prompt("Escribir la Profesión, porfavor:")



document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<center>");
document.write("<table border=3 ");
document.write("<tr>");
document.write("<td rowspan=4 width=30%  >");
document.write("<img src=img/pe.jpg>");
document.write("<center>");
document.write ("<h1></h1>");
document.write("</center>");
document.write("</td>");
document.write("<td >")
document.write("Nombre:");
document.write("</td>");
document.write("<td>");
document.write("",No);
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("Edad:");
document.write("</td>");
document.write("<td>");
document.write("",Ed);
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("Localidad:");
document.write("</td>");
document.write("<td>");
document.write("",Lo);
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("Profesión:");
document.write("</td>");
document.write("<td>");
document.write("",Pr);
document.write("</td>");
document.write(" </tr>")
document.write("</table>");
document.write("</center>");

let fecha =new Date();
let horas=fecha.getHours();
horas=parseInt(horas);
document.write(horas);

if(horas>=19 || horas<=5){
   window.alert("BUENAS NOCHES USUARIO");
  
}else{
if(horas>=19 || horas<=12  ){
    window.alert("BUENOS DIAS USUARIO");
}else{
if(horas>=13 || horas<=18 ){
    window.alert("BUENAS TARDES USUARIO");
} 
}
}