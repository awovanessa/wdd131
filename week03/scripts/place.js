document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;

const temperature = 8;   // °C
const windSpeed = 15;    // km/h

const calculateWindChill = (temp, wind) =>
  13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);

let windChillDisplay = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
  windChillDisplay = calculateWindChill(temperature, windSpeed).toFixed(1) + "°C";
}

document.querySelector('#windchill').textContent = windChillDisplay;