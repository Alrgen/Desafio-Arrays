let value; //Variable que guarda el dato ingresado mediante prompt

let values = []; //Array donde se almacenan los datos ingresados
let finalValue = 0; //Valor final de la suma

//Funcion que muestra un prompt por pantalla y guarda el dato en la variable "value"
function ShowPrompt(){
    value = prompt("Ingrese un número o ESC para finalizar");
    DetectPromptValue();
}

//Detecta el tipo de daato ingresado
function DetectPromptValue(){
    if (value == "ESC"){
        CalculateValues();
    } else if (!isNaN(Number(value))) {
        values.push(Number(value));
        ShowPrompt();
    } else {
        alert("Error al ingresar el dato"); //Si el valor ingresado no es un numero ni "ESC" devuelve una alerta por pantalla
    }
}

//Función que recorre el array "values" y los suma a "finalValues"
function CalculateValues(){
    for (let i = 0; i < values.length; i++) {
        finalValue += values[i];
    }
    ShowValues();
}

//Función que muestra el valor final por pantalla
function ShowValues(){1
    alert(`El valor total es: ${finalValue}`);
}1

ShowPrompt();