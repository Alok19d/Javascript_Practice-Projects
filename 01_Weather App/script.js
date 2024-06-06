// 985a2cb924724104799c7efe2d34959f
// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=985a2cb924724104799c7efe2d34959f
const apiKey = "985a2cb924724104799c7efe2d34959f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(cityName){
    const response = await fetch(apiUrl + cityName +`&appid=${apiKey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{

        let data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src = "images/mist.png";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
}
function search(){
    const inp = document.querySelector(".search input");
    checkWeather(inp.value);
}
let elem = document.querySelector(".search button");
elem.addEventListener("click", search);