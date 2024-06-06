window.addEventListener("load", inicio);

function inicio() {
  ocultarSecciones();

  let botones = document.querySelectorAll(".btnSeccion");
  for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", mostrarSeccion);
  }

  document.querySelector("#seccionLogin").style.display = "block";
  document.querySelector("#seccionRegistro").style.display = "block";
  document.querySelector("#navPrincipal").style.display = "none";
}

// -------------------- FUNCIONES DE NAVEGACION -------------------- //

function mostrarSeccion() {
  ocultarSecciones();
  let idBtn = this.getAttribute("id"); //"btnSeccionAgregar"
  let idSeccion = idBtn.charAt(3).toLowerCase() + idBtn.substring(4); //seccionAgregar
  document.querySelector("#" + idSeccion).style.display = "block";
}

function ocultarSecciones() {
  let secciones = document.querySelectorAll(".seccion");
  for (let i = 0; i < secciones.length; i++) {
    secciones[i].style.display = "none";
  }
}
//TODO: ver si usamos eso
function mostrarBotones(tipo) {
  ocultarBotones();

  let botonesMostrar = document.querySelectorAll("." + tipo);
  for (let i = 0; i < botonesMostrar.length; i++) {
    botonesMostrar[i].style.display = "block";
  }
}
//TODO: ver si usamos eso
function ocultarBotones() {
  let botonesOcultar = document.querySelectorAll(".btnSeccion");
  for (let i = 0; i < botonesOcultar.length; i++) {
    botonesOcultar[i].style.display = "none";
  }
}

// -------------------- FUNCIONES DE ACCESO Y REGISTRO -------------------- //
