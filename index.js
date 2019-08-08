// const Axios = require('axios')

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=e4bc92a2b88c41c65d239e8d126bf543
 
function fetchWeatherDetails() {
    console.log('I am here!')
    // Axios.get('https://api.openweathermap.org/data/2.5/weather?q=leiden&appid=e4bc92a2b88c41c65d239e8d126bf543').then(response => {
    //     console.log(response)
    // })
    fetch('https://api.openweathermap.org/data/2.5/weather\?q\=leiden\&appid\=e4bc92a2b88c41c65d239e8d126bf543', {
        method: 'GET'
    })
    .then(body => {
        console.log('DATA: ', body)
        displayWeatherDetails(body)
    })
    .catch(err => console.log('ERROR:', err))
    
}

function displayWeatherDetails(){
    const cityName = document.getElementById("city-name");
    const icon = document.getElementById("icon");
    const temperature = document.getElementById("temperature");
    const humidity = document.getElementById("humidity");

    // cityName.textContent = 

}

fetchWeatherDetails()

console.log("hallo")































/*
const appKey = 'e4bc92a2b88c41c65d239e8d126bf543'
const searchButton = document.getElementById("search-btn");
const searchInput = document.getElementById("search-txt");
const cityName = document.getElementById("city-name");
const icon = document.getElementById("icon");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");

function fetchWeatherDetails() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=leiden&appid=e4bc92a2b88c41c65d239e8d126bf543')
    .then(res => {
        getResponse(res)
    })
    .catch(err => console.log(err))
}

searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", ifEnterIsPressed);

function ifEnterIsPressed(event) {
    if (event.key === "Enter") {
        findWeatherDetails();
    }
}

function findWeatherDetails() {
    if (searchInput.value === "") {

    }else{
        fetchWeatherDetails()
    }
}

function getResponse(res) {
    let jsonObject = JSON.parse(response);
    cityName.textContent = jsonObject.name;
    icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    temperature.textContent = jsonObject.main.temp;
    humidity.textContent = jsonObject.main.humidity;
console.log("hello")

}

*/