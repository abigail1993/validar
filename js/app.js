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
/*  total.forEach((inputValidate) => {
})*/

  let valTajeta = document.getElementById('cn').value;
  let fechaVencimiento = document.getElementById('exp').value;
  let numSeguridad = document.getElementById('cvv').value;
  let name = document.getElementById('name').value;

  console.log(valTajeta);


  console.log(total);
  getValues(element)
}
  console.log(array);
  const getValues = (array) => {
}

function validCard (element){
  let compararTarjeta = valTajeta =>{
    if(valTajeta < 16){
    }
    console.log(compararTarje);/// tengo que hacer expresiones regulares donde ver que sean 16 numeros 

  }

}
