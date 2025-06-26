// var searchInput = document.querySelector("#searchInput");
var searchInput = document.querySelector(".main .home .container input");
var searchBtn = document.querySelector(".main .home .container button");
var forecast =[];
var data = [];



async function getWeather(city = "cairo") {

var response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=d7bb1f38848f4995a3d100713252106&q=${city}&days=3`);
var data = await response.json();


        console.log(response);
        console.log(data);
        console.log(data.location.name);
       displayCurrentDay(data);
       displaySecondDay(data);
       displayThirdDay(data);
 
     


}
getLocation()










 function displayCurrentDay(data){
     var  dayOne =`   
              <div class="card-header d-flex justify-content-between px-3 py-2">
                <div id="day" class="text-light" >${getDateName(data.forecast.forecastday[0].date)}</div>
                <div id="date" class="text-light">${data.forecast.forecastday[0].date}</div>
              </div>
              <div class="card-body">
                <h2 class="h5 City text-light">${data.location.name}</h2>
                <h1 class="display-1 fw-bold text-light">${data.current.temp_c}°C</h1>
                
           
          
            <img src="https:${data.current.condition.icon}" alt="" width="90">
                <h2 class="h5 text-info ">${data.current.condition.text}</h2>
              </div>
              <div class="card-footer d-flex flex-row"  >
              <div class="d-flex me-4 " >
                <img src="images/icon-umberella.png" alt="" >
                <h5 class="ms-2">${data.current.precip_in}%</h5>
                </div>
                 <div class="d-flex me-4 " >
                <img src="images/icon-wind.png" alt="" >
                <h5 class="ms-2">${data.current.wind_mph}mph</h5>
                </div>
                 <div class="d-flex me-4 " >
                <img src="images/icon-compass.png" alt="" >
                <h5 class="ms-2">${data.current.wind_dir}</h5>
                </div>
             
              </div>       
        `
    document.querySelector('.today').innerHTML = dayOne
 console.log(data.location.name);
    
}

 function displaySecondDay(data){
     var  dayTwo =`
              <div class="card-header text-center px-3 py-2">
                <div id="day" class="text-light text-center " >${getDateName(data.forecast.forecastday[1].date)}</div>
               
              </div>
              <div class="card-body py-5 text-center">
              
               <img src="https:${data.forecast.forecastday[1].day.condition.icon}" alt="" width="50">
                <h1 class="h4  text-light text-center">${data.forecast.forecastday[1].day.maxtemp_c}°C</h1>
                <h1 class="h5 text-black-emphasis text-center">${data.forecast.forecastday[1].day.mintemp_c}°C</h1>
                <h2 class="h5 text-info text-center">${data.current.condition.text}</h2>
              </div>

        `
    document.querySelector('.secondDay').innerHTML = dayTwo
 console.log(data.location.country);
    
}

function displayThirdDay(data){
     var  dayThree =`
              <div class="card-header text-center px-3 py-2 ">
                <div id="day" class="text-light " >${getDateName(data.forecast.forecastday[2].date)}</div>
               
              </div>
              <div class="card-body py-5 text-center">
               <img src="https:${data.forecast.forecastday[2].day.condition.icon}" alt="" width="50">
                <h1 class="h4  text-light text-center">${data.forecast.forecastday[2].day.maxtemp_c}°C</h1>
                <h1 class="h5  text-black-emphasis text-center">${data.forecast.forecastday[2].day.mintemp_c}°C</h1>
                
          
            
                <h2 class="h5 text-info text-center">${data.current.condition.text}</h2>
              </div>
             
             
          
        `
    document.querySelector('.thirdDay').innerHTML = dayThree
 console.log(data.location.country);
    
}

   function getDateName(dateNum) {
    var day = dateNum;
    var date = new Date(day);
    var dateText = date.getDay();
    var dateName = days[dateText];
    return dateName;
  }


  var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];






searchInput.addEventListener( 'input', function(e){
getWeather(this.value)
    console.log('hello');
    
} );



searchBtn.addEventListener( 'click', function(e){
getWeather(this.value)
    console.log('tamam');
    
} );
getWeather(position.value)

const x = document.getElementById("position");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function success(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function error() {
  alert("Sorry, no position available.");
}

