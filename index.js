
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=e4bc92a2b88c41c65d239e8d126bf543
 
async function fetchWeatherDetails() {

    axios.get('https://api.openweathermap.org/data/2.5/weather?q=leiden&appid=e4bc92a2b88c41c65d239e8d126bf543')
    .then(response => response.data)
    .then(data => {
        console.log(data)
        displayWeatherDetails(data)
    })
    .catch(err => console.log('ERROR:', err))
}

function displayWeatherDetails(data){
    const cityName = document.getElementById("city-name");
    const icon = document.getElementById("icon");
    const temperature = document.getElementById("temperature");
    const humidity = document.getElementById("humidity");

    cityName.innerHTML = data.name

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