//se llama todo el formulario
const form = document.querySelector("form");

const cnInp = document.querySelector("#cn");
const expInp = document.querySelector("#exp");
const cvvInp = document.querySelector("#cvv");
const nameInp = document.querySelector("#name");


const arr = Array.from(form);

//se comprueba que la funcion "validateCardDetails" arroje true o false para consolear
form.addEventListener("submit", e => {
  e.preventDefault();

  if (validateCardDetails(form) == true) {
    console.log("datos válidos... enviar...");
  } else {
    console.log("datos inválidos");
  }
});

//funcion la cual debe recibir todos los true de las funciones posteriores para arrojar true
function validateCardDetails(element) {
  //escribe tu código aqui
  valInput (arr);
  return true
}

//fucncion que itera y obtiene todos los valores de los inputs
const valInput = array => {
  let newArray = array.map (element => element.value)
  let valTajeta = newArray[0];
  let fechaVencimiento = newArray[1];
  let numSeguridad = newArray[2];
  let nombre = newArray[3];
//llama a todas las funciones para asignarles su valor
  arrayStr(valTajeta);
  valdate(fechaVencimiento);
  valdCvv(numSeguridad);
  valdName(nombre);
}

//funciones para validar numero de tarjeta
//separa string obtenido de input y convierte a numero
const arrayStr = strNum =>{
  let arrayNum = [];
  for (let i in strNum) {
    let numberDivided = strNum[i].split();
    let allStr = parseInt(numberDivided.join());
    arrayNum.push(allStr);
  }
  //console.log(arrayNumbers);
  if (arrayNum == "") {
    cnInp.style.border = "2px solid #f91818";
  }else {
      luhn(arrayNum);
  }
}

const luhn = (numbers) =>{
  let result = [];
  const element = numbers.filter((item,index) => {
    if (index %2 == 0) {
    let multiply = ""+ item * 2;
      if (multiply.length == 1) {
        let number = parseInt(multiply);
        result.push(number)
      }else {
        let dig1 = multiply [0];
        let dig2 = multiply [1];
        let num1 = parseInt(dig1);
        let num2 = parseInt(dig2);
        let sumNum = num1 + num2;
        result.push(sumNum);
      }
    }else {
      let impares = item;
      result.push(impares);
    }
    //console.log(result);
    validated(result);
  })
}
//
const validated = arrResult => {
  const value = arrResult.reduce((sum,value) => sum + value, 0);
    if (value %10 !== 0 || ""){
        cnInp.style.border = "2px solid #f91818";
    }else if (value == 0){
        cnInp.style.border = "2px solid #f91818";
    }else {
      cnInp.style.border = "2px solid #56d937";
    }
}
/////funcion para validar la fecha  de vencimiento
const valdate = expirationDate =>{
    let digitsDate = [];
    for (let i in expirationDate) {
      let dateDivided = expirationDate[i].split();
      let allDate = parseInt(dateDivided.join());
      digitsDate.push(allDate);
    }
    if (digitsDate[0] < 2){//para que el primer indice cea mayor a 2
      if (digitsDate[1] > 0){//para que sea mayor a 0
        if ( digitsDate[2] < 2){
          if (digitsDate[3] >= 8){//y el cuarto que sea mayor a 8 por el año
            expInp.style.border = "2px solid #56d937";
          }else {
            expInp.style.border = "2px solid #f91818";
          }
        }
      }
    }else {
      expInp.style.border = "2px solid #f91818";
    }
  }

//funcion para que se validen num de seguridad 3 numeros
const valdCvv = elementCvv =>{
  if (elementCvv > 100 && elementCvv < 1000) {
    cvvInp.style.border = "2px solid #56d937";
  }else {
    cvvInp.style.border = "2px solid #f91818";
  }
}


//funcion que valida el input del nombre
const valdName = nombre =>{
  if(nombre.length <= 30){
    nameInp.style.border ="2px solid #f91818";
  }else {
    nameInp.style.border = "2px solid #56d937";
  }


}

/////////////////////////////////////////////////////////////////////////////////////////////////
//numero de tarjeta  4772 9130 2642 5324
