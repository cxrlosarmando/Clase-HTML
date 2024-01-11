// index.js

function convertirTemperatura() {
    let inputCelsius = document.getElementById('celsiusInput').value;

    // Verificar si la entrada es un número válido
    inputCelsius = parseFloat(inputCelsius);

    if (!isNaN(inputCelsius)) {
        const fahrenheit = celsiusToFahrenheit(inputCelsius);
        const kelvin = celsiusToKelvin(inputCelsius);

        const resultadosDiv = document.getElementById('resultados');
        resultadosDiv.innerHTML = `Grados Fahrenheit: ${fahrenheit.toFixed(2)}<br>Grados Kelvin: ${kelvin.toFixed(2)}`;
    } else {
        alert('Por favor, ingrese una temperatura válida.');
    }
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}
