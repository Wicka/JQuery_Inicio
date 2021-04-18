//1.	Tens un array ple de noms de persones.
//Quan la pàgina està completament carregada, javascript escriu aquests noms en un div
//del html, un a un i amb un salt de línia entre cada un. Si vols pots usar aquests
//array de noms:
//var persones = ["joan", "maria", "pepe", "miquel", "oriol", "julia", "anna"];



$(document).ready(function(){ //se espera a que cargue la página
  //$(selector).metode()
  //$("#test").html("<p>Hola</p>");

  var persones = ["joan", "maria", "pepe", "miquel", "oriol", "julia", "anna"];

  $("#test").append ("<hr><hr>-- INICIO DE NOMBRES -- <hr><hr>");

  for (i=0; i<persones.length; i++ ){
      $("#test").append(persones[i]+"<br>");
  }

  $("#test").append ("<hr><hr>-- FIN DE NOMBRES --<hr><hr>");


});

//metodes html/css
//https://www.w3schools.com/jquery/jquery_ref_html.asp

//POSIBLIDADES...

//after()	Inserts content after selected elements
//append()	Inserts content at the end of selected elements
//appendTo()	Inserts HTML elements at the end of selected elements
//insertAfter()	Inserts HTML elements after selected elements
