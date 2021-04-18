
//2.	Descarrega dos imatges qualsevols i posa’n una en un document HTML. Mitjançant un esdeveniment onclick fes que es canviï:
//a.	L’atribut alt (text alternatiu).
//b.	L’atribut id
//c.	L’atribut src (source) i per tant es mostrarà la segona imatge.
//Fes que quan aparegui la segona imatge al fer clic torna a mostrar-se la primera.

//$(selector).metode()
//$("#test").html("<p>Hola</p>");

//$(selector).esdeveniment(function(){
//...
//});

$(document).ready(function(){

    $("#imagen").click(function(){

              if(this.id == "img_lisa"){

                  $(this).attr({"id" : "img_barth"});
                  $(this).attr({"src": "img/barth.png"});
                  $(this).attr({"alt": "dibujo Barth Simpson"});

              }else{

                  $(this).attr({"id" : "img_lisa"});
                  $(this).attr({"src": "img/lisa.png"});
                  $(this).attr({"alt": "dibujo Lisa Simpson"});

              }
    });
});















    /*
      $("#div_barth").click(function(){
        $("#div_imagenes").append('<img src="img/barth.png" alt="dibujo Barth Simpson" id="barth" class="dibujo">');
      });

      $("#div_lisa").click(function(){
        $("#div_imagenes").append('<img src="img/lisa.png" alt="dibujo Lisa Simpson" id="lisa" class="dibujo">');
      });

      $("#div_limpiar").click(function(){
        $("#div_imagenes").html("");
      });
    */
