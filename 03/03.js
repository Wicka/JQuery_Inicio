//Tens un array ple de noms de persones.
//Quan la pàgina està completament carregada, javascript crida una
//funció i escriu aquests noms en un div del html,
//un a un i amb un salt de línia entre cada un.
//Si vols pots usar aquests array de noms:
//var persones = ["joan", "maria", "pepe", "miquel", "oriol", "julia", "anna"];
//Després crida una altra funció que ordena alfabèticament l’array
//de persones i torna a cridar la funció que escriu els noms un darrera
//l’altre.



$(document).ready(function(){
    var persones = ["joan", "maria", "pepe", "miquel", "oriol", "julia", "anna"];    
    muestra_nombres(persones);
    persones=ordena_nombres(persones);
    muestra_nombres(persones);
});

function muestra_nombres(persones){
      $("#nombres").append ("<hr><hr>-- INICIO DE NOMBRES -- <hr><hr>");
      for (i=0; i<persones.length; i++ ){
          $("#nombres").append(persones[i]+"<br>");
      }
      $("#nombres").append ("<hr><hr>-- FIN DE NOMBRES --<hr><hr>");
  }

function ordena_nombres(persones){
      persones.sort();
      return persones;
}
