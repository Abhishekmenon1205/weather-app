function search() {
  cityname=dest.value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=5b4bee0ba241d092159faf007e166080`).then(data=>data.json())
  .then(data=>display_data(data))
  }
function display_data(destinationDetails){
  place = destinationDetails.name;
  description = destinationDetails.weather[0].description
  temp = destinationDetails.main.temp
  humidity = destinationDetails.main.humidity
  wind = destinationDetails.wind.speed
  icon = destinationDetails.weather[0].icon;
  feelsLike = destinationDetails.main.feels_like;
  temp = Math.round(temp - 273.15);
 
  result.innerHTML=`<div class="w-50 container rounded mt-2" style="background-color: rgba(255, 255, 255, 0.534);text-align: center;">
              <div class="p-2">
              <h1 class=""><i class="fa-solid fa-temperature-three-quarters"></i>${temp}<sup>°</sup>C</h1>
              <h2 class="" id="city"><i class="fa-solid fa-location-pin"></i>${place}</h2>
              <h4 class="" id="humidity">Humidity- <i class="fa-solid fa-droplet me-1"></i>${humidity}%</h4>
              <h4 class="" id="weather">Wind speed- <i class="fa-sharp fa-solid fa-wind"></i>&ensp;${wind}kmph</h4>
              <h3 class="" id="date">${description}</h3>
              <h3 class="" id="date">${feelsLike}</h3>
              </div>`
}
