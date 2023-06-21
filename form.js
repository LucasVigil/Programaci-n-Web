document.getElementById("formularioContacto").addEventListener("submit", function(event) { //Addeventlistener sirve para que el codigo actue cuando detecta que se realiza un evento, en este caso cuando se apreta el botoncito de enviar.
  event.preventDefault(); 

  var nombre = document.getElementById("nombre").value; // con "var" puedo almacenar mas de un elemento en las variables, por lo que entendi es como poder armar las listas en python.
  var correo = document.getElementById("correo").value;  //getelement by id hace que vaya al html y la variable guarde el string que encuentre con ese id.
  var mensaje = document.getElementById("mensaje").value;

  // Estas dos lineas cambian el display del formulario para que pueda saltar el mensaje de confirmacion de recepcion de la consulta.
  document.getElementById("formularioContacto").style.display = "none";
  document.getElementById("mensajeEnviado").style.display = "block";

  // Estos console logs hacen que la informacion de las consultas se quede guardada en la consola, porque es la unica forma que entendi para hacer que queden almacenados de alguna forma en algun lado.
  console.log("Nombre: " + nombre);
  console.log("Correo electrónico: " + correo);
  console.log("Mensaje: " + mensaje);

  // Esta funcion hace que a los 3 segs de enviarse la consulta y se muestre el mensaje de confirmacion, el usuario pueda volver a enviar una consulta
  setTimeout(function() {
    document.getElementById("formularioContacto").style.display = "block";
    document.getElementById("mensajeEnviado").style.display = "none";
    document.getElementById("formularioContacto").reset();
  }, 3000);
});

function countdown() {
  var now = new Date();
  var openingTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 30, 0); // Establece la hora de apertura a las 9:30 AM de aca, que serian las 8.30 de nueva york
  var closingTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 0, 0); // Establece la hora de cierre a las 4:00 PM 

  var diff;

  if (now >= openingTime && now <= closingTime) {
    // Mercado abierto: calcular tiempo restante hasta el cierre
    setTimeout(function() {
      document.getElementById("cierre").style.display = "block";
      document.getElementById("apertura").style.display = "none";
    })
    diff = closingTime - now;
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "#fff";
  } else {
    // Mercado cerrado: calcular tiempo restante hasta la apertura
    //esto funciona como el elif de python
    if (now < openingTime) {
      diff = openingTime - now;
      setTimeout(function() {
        document.getElementById("apertura").style.display = "block";
        document.getElementById("cierre").style.display = "none";
      })
    } else {
      openingTime.setDate(openingTime.getDate() + 1); // Calcula próxima apertura para tirar el tiempo hasta el dia siguiente.
      diff = openingTime - now;
    }
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
  }

 
 //creando estas variables con este formato se hace que aparezcan las horas, despues los mins y despues los segundos.
  var hours = Math.floor(diff / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = hours + "h " + minutes + "m " + seconds + "s";

  setTimeout(countdown, 1000);
}

countdown();

