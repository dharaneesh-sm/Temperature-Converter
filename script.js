
const input = document.getElementById("input");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const result = document.getElementById("result");

function convert()
{
    if(celsius.checked){
        temp = Number(input.value);
        temp = temp * 9 / 5 + 32;
        temp = Number(temp)
        result.textContent = temp.toFixed(1) + "°F" 
    }
    else if(fahrenheit.checked){
        temp = Number(result.value);
        temp = (temp -32) * (5/9);
        temp = Number(temp)
        result.textContent = temp.toFixed(1) + "°C"
    }
    else{
        result.textContent = "Select a Unit"
    }

}