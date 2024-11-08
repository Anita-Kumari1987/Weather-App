const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "13b927dbff18826b4da2d77dde6730dd";
const button = document.querySelector("#search_btn");

async function getWeatherInformation(){
  const requiredLocation = document.querySelector("#location").value;
  let response = await fetch(url + requiredLocation + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);
  let weatherImage = document.querySelector("#cloud_img");
    if(data.cod !='404'){
    if (data.weather[0].main==='Clear'){
      weatherImage.src = "clear.png";
    }else if(data.weather[0].main==='Mist'){
      weatherImage.src = "Mist.png";
    }else if(data.weather[0].main==='Clouds'){
      weatherImage.src = "cloudy.png";
    }else if(data.weather[0].main==='Snow'){
      weatherImage.src = "snow.png";
    }else if(data.weather[0].main==='Rain'){
      weatherImage.src = "rain.png";
    }else if(data.weather[0].main==='Drizzle'){
      weatherImage.src = "drizzle.jpg";
    }else{
      weatherImage.src = "weather.png";
    }
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp)+'°C';
    document.querySelector("#realFeel").innerHTML = "(Feel like " + Math.round(data.main.feels_like) + '°C)'
    document.querySelector("#currlocation").innerHTML = data.name ;
    document.querySelector(".wind_data").innerHTML = data.wind.speed + 'mph';
    document.querySelector(".humid_data").innerHTML = data.main.humidity + '%';
  } else {
    alert("Entered city name is incorrect");
  }
}
getWeatherInformation();

button.addEventListener("click",()=>{
  if(document.querySelector("#location").value ===""){
    alert("Please enter the city name")
  }else{
  getWeatherInformation();
  let myWeatherBox =document.querySelector(".weatherBox")
  myWeatherBox.style.display='block'
  }
});