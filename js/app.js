const form = document.querySelector("form");
let array = Array.from(form)

form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)===true) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  }
});

function validateCardDetails(element) {
  //escribe tu código aqui
  let total = array.map((uno) => {
    return uno.value;// esto muestra un array de los datos que se metieron en los input
  });

console.log(total);// saca el arreglo en consola


  let valTajeta = document.getElementById('cn').value;
  let fechaVencimiento = document.getElementById('exp').value;
  let numSeguridad = document.getElementById('cvv').value;
  let name = document.getElementById('name').value;

  console.log(valTajeta); // con esto muestra lo que se guarda en la let
  console.log(fechaVencimiento);
  console.log(numSeguridad);
  console.log(name);
}
// condiciones para validar cada input

const validateCard = valTajeta => {
   if(valTajeta.length == 16){
    console.log("true");
  } else {
    console.log("false");
  }
};

const validateExp = fechaVencimiento => {
  if (fechaVencimiento.length > 4) {
    console.log("true");
  }else {
    console.log("false");
  }
};

const validateCvv  = numSeguridad => {
  if (numSeguridad.length > 99 && numSeguridad < 1000) {
    console.log("true");
  } else {
    console.log("false");
  }
};

const validateName = name => {
  if (name.length > 20 && name < 30) {
    console.log("true");
  } else{
    console.log("false");
  }
};
