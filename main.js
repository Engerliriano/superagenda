let datos = [];

window.onload = function () {
  cargar();
};

function cargar() {
  let dtp = localStorage.getItem("myagenda");
  if (dtp != null) {
    datos = JSON.parse(dtp);
    mostrar();
  }
}

function guardar() {
  let sp = {};
  sp.cedula = document.getElementById("cedula").value;
  sp.nombre = document.getElementById("nombre").value;
  sp.apellido = document.getElementById("apellido").value;
  sp.apodo = document.getElementById("apodo").value;
  sp.sangre = document.getElementById("sangre").value;
  sp.correo = document.getElementById("correo").value;
  sp.telegram = document.getElementById("telegram").value;
  sp.poderes = document.getElementById("poderes").value;
  sp.traje = document.getElementById("traje").value;

  datos.push(sp);

  let mdatos = JSON.stringify(datos);
  localStorage.setItem("myagenda", mdatos);

  clear();
  mostrar();
}

function mostrar() {
  destino = document.getElementById("tx_mostrar");

  destino.innerHTML = "";

  for (x = 0; x < datos.length; x++) {
    sp = datos[x];
    tr = document.createElement("tr");

    //Para la cedula
    td = document.createElement("td");
    td.innerHTML = sp.cedula;
    tr.appendChild(td);

    //Para el nombre
    td = document.createElement("td");
    td.innerHTML = sp.nombre;
    tr.appendChild(td);

    //Para el apellido
    td = document.createElement("td");
    td.innerHTML = sp.apellido;
    tr.appendChild(td);

    //Para el apodo
    td = document.createElement("td");
    td.innerHTML = sp.apodo;
    tr.appendChild(td);

    //Para el tipo de sangre
    td = document.createElement("td");
    td.innerHTML = sp.sangre;
    tr.appendChild(td);

    //Para el correo electronico
    td = document.createElement("td");
    td.innerHTML = sp.correo;
    tr.appendChild(td);

    //Para el telegram
    td = document.createElement("td");
    td.innerHTML = sp.telegram;
    tr.appendChild(td);

    //Para los poderes
    td = document.createElement("td");
    td.innerHTML = sp.poderes;
    tr.appendChild(td);

    //Para la descripcion del traje
    td = document.createElement("td");
    td.innerHTML = sp.traje;
    tr.appendChild(td);

    //Boton borrar
    td = document.createElement("td");
    btn = document.createElement("button");
    btn.innerHTML = "X";
    btn.setAttribute("class", "btn btn-danger");
    btn.setAttribute("onclick", "eliminar(" + x + ")");
    td.appendChild(btn);
    tr.appendChild(td);

    destino.appendChild(tr);
  }
}
function eliminar(idx) {
  if (confirm("¿Seguro que desea eliminar este super heroe de la lista?"))
    dtp = [];
  for (x = 0; x < datos.length; x++) {
    sp = datos[x];
    if (x != idx) {
      dtp.push(sp);
    }
  }

  datos = dtp;

  let mdatos = JSON.stringify(datos);
  localStorage.setItem("myagenda", mdatos);

  mostrar();
}

function clear() {
  document.getElementById("cedula").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("apodo").value = "";
  document.getElementById("sangre").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("telegram").value = "";
  document.getElementById("poderes").value = "";
  document.getElementById("traje").value = "";
}
