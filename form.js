document.getElementById("formularioContacto").addEventListener("submit", function(event) {   //con getelementbyid lo que hago es que en cada variable se vaya al html a buscar lo que hay almacenado con ese ID y lo almacene en la variable que quiero en el Js./ el AddEventListener hace que el js actue cuando detecta algun evento, en este caso cuando detecta que se toca el submit
  event.preventDefault();

  var nombre = document.getElementById("nombre").value; //var se usa para que la variable pueda ir almacenando mas de una cosa
  var correo = document.getElementById("correo").value;
  var mensaje = document.getElementById("mensaje").value;


  document.getElementById("formularioContacto").style.display = "none"; //con esto hago que al momento de tocar el submit el fomrulario desaparezca
  document.getElementById("mensajeEnviado").style.display = "block";

  // esta funcion hace la inversa de lo anterios,  hace que el mensaje que salta con la confirmacion desaparezca solo a los 3 segs dejando que se pueda mandar otro mensaje
  setTimeout(function() {
    document.getElementById("formularioContacto").style.display = "block";
    document.getElementById("mensajeEnviado").style.display = "none";
  }, 3000);
});
