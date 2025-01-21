//Module that get current weather depending on your location

//Importing functions from location.js
//import { initGeolocation } from "./location.js";
//We call initGeolocation to trigger positioning
//initGeolocation();

let latitud = "-33.0061792"; //document.getElementById('lat').value;
let longitud = "-71.2589016" //document.getElementById('long').value;
const currentWeather = document.querySelector('#current-weather');
const forecastWeather = document.querySelector('#forecast-weather');
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let apiKey = "334ec37862e9d191d96a78311a94387f";
let apiKey2 = "bf8367406b96ee36c06ed4dbd5da4714";

//Current Weather
let currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitud + "&lon=" + longitud + "&appid=" + apiKey + "&units=metric";

async function getCurrentWeatherData() {
    const response = await fetch(currentWeatherUrl);
    const data = await response.json();
    displayCurrentWeather(data);
}

getCurrentWeatherData();

function displayCurrentWeather(data) {
    // Creating main card
    let card = document.createElement('div');
    card.classList.add("weather-info");
    let icon = document.createElement('img');
    // Creating secundary main card
    let cardData = document.createElement('div');
    cardData.classList.add("weather-data");

    let location = document.createElement('p');
    location.textContent = `Location: ${data.name}, ${data.sys.country}`;
    let temp = document.createElement('p');
    temp.textContent = `Temperature: ${Math.floor(data.main.temp)}ºC`;
    let weat = document.createElement('p');
    weat.textContent = `Weather: ${data.weather[0].description.toUpperCase()}`;
    let high = document.createElement('p');
    high.textContent = `High: ${Math.floor(data.main.temp_max)}ºC`;
    let low = document.createElement('p');
    low.textContent = `Low: ${Math.floor(data.main.temp_min)}ºC`;
    let humidity = document.createElement('p');
    humidity.textContent = `Humidity: ${data.main.humidity}%`;

    //Sunrise and Sunset Time
    var dateSunrise = new Date(data.sys.sunrise * 1000);
    var dateSunset = new Date(data.sys.sunset * 1000);

    let sunrise = document.createElement('p');
    sunrise.textContent = `Sunrise: ${dateSunrise.getHours()}:${dateSunrise.getMinutes()} hrs`;
    let sunset = document.createElement('p');
    sunset.textContent = `Sunset: ${dateSunset.getHours()}:${dateSunset.getMinutes()} hrs`;

    // Build the image icon by setting all the relevant attributes
    icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    icon.setAttribute('alt', `Icon of ${data.weather[0].icon}`);
    icon.setAttribute('loading', 'lazy');

    // Appending sections
    cardData.appendChild(location);
    cardData.appendChild(temp);
    cardData.appendChild(weat);
    cardData.appendChild(high);
    cardData.appendChild(low);
    cardData.appendChild(humidity);
    cardData.appendChild(sunrise);
    cardData.appendChild(sunset);
    card.appendChild(icon);
    card.appendChild(cardData);

    currentWeather.appendChild(card);
}

//Forecast Weather
let forecastWeatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitud + "&lon=" + longitud + "&appid=" + apiKey2 + "&units=metric&cnt=24";

async function getForecastWeatherData() {
    const response = await fetch(forecastWeatherUrl);
    const data = await response.json();
    console.table(data);
    displayForecastWeather(data);
}

getForecastWeatherData();

function displayForecastWeather(data) {
    // Creating main card
    let card = document.createElement('div');
    card.classList.add("forecast-info");
    //Some varibales that will help find 3 days instead of same day different hours
    let currentDay = 0;
    let count = 0;

    //For that will loop 24 times
    for (var i = 0; i < 24; i++) {
        //New p tag element
        let temp = document.createElement('p');
        //Manipulation of datetime
        let timestamp = new Date(data.list[i].dt * 1000);
        let thisDay = daysOfWeek[timestamp.getDay()];
        //If the currentday mark is different than the current record day, we show it
        if(thisDay != currentDay && count < 3){
            currentDay = thisDay;
            //Variable that show today if the current recod name match the real current day
            let thisDayName = "";
            if(count == 0){thisDayName = "Today";}else{thisDayName = thisDay;}
            temp.textContent = `${thisDayName}: ${Math.floor(data.list[i].main.temp)}ºC`;
            // Appending sections
            card.appendChild(temp);
            count++;
        }
    }
    forecastWeather.appendChild(card);
}