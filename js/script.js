const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
// const API = `https://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const form = document.querySelector("form")
const weather = document.querySelector("#weather")
const search = document.querySelector("#search")

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url)
    
    const data = await response.json()
    // console.log(data)
    return showWeather(data)
  
}
const showWeather = (data) => {
     console.log(data)
    weather.innerHTML = `
    <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png "height="80px" width="100%" id = "img">
    </div>
        <div>
            <h2 class = "new">${data.main.temp}°C</h2>
            <h4 class = "new">${data.weather[0].main}</h4>
     </div>
`

}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    getWeather(search.value);
})