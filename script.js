    
        function convertTemperature() {
            const temperatureInput = document.getElementById("temperature").value;
            const isCelsius = document.getElementById("celsius").checked;
            const resultElement = document.getElementById("result");

            if (isCelsius) {
                const convertedTemperature = (temperatureInput * 9/5) + 32;
                resultElement.innerHTML = `${temperatureInput}°C is ${convertedTemperature}°F`;
            } else {
                const convertedTemperature = (temperatureInput - 32) * 5/9;
                resultElement.innerHTML = `${temperatureInput}°F is ${convertedTemperature}°C`;
            }
        }
    