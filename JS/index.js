//variables
let nombre = "Facundo";
let apellido = "Heinze";

//objeto
let misDatos = { nombre: "Facundo", apellido: "Heinze" };

//para manejar string dentro del LOCALSTORAGE o SESSIONSTORAGE
//LOCAL-STORAGE --> ALMACENAMIENTO LOCAL 💾
localStorage.setItem(nombre, apellido);

//para manejar objetos dentro del LOCALSTORAGE o SESSIONSTORAGE
//JSON.stringify()
localStorage.setItem(nombre, JSON.stringify(misDatos));
sessionStorage.setItem(nombre, JSON.stringify(misDatos));

//COOKESSTORAGE 

