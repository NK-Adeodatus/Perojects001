function fetchWeather(city){
    const apiKey = "c66245d1dbbe28b8ef74cb80273f140c"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error("city not found or network issues")
        }
        return response.json()
    })
    .then(data => {
        document.getElementById("cityName").textContent = `city: ${data.name}`
        document.getElementById("weatherDescription").textContent = `weather: ${data.weather[0].description}`
        document.getElementById("temperature").textContent = `temperature: ${data.main.temp}°C`
        console.log(data)
    })
    .catch(error => {
        console.log("Error:", error)
        document.getElementById("cityName").textContent = ""
        document.getElementById("weatherDiscription").textContent = ""
        document.getElementById("temperature").textContent = "Error: unable to fetch weather data."
    });
    
}
document.getElementById("getWeatherButton").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value
    if(city){
        fetchWeather(city)
    }
    else{
        document.getElementById("cityName").textContent = ""
        document.getElementById("weatherDiscription").textContent = ""
        document.getElementById("temperature").textContent = "Please enter a city name."
    }
})