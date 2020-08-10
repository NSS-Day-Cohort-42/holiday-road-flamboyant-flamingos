import { getWeather, useWeatherCopy } from "./WeatherProvider.js"
import { forecastCard } from "./ForecastCard.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".forecast")

eventHub.addEventListener("parkSelected", () => {
    Forecast()
})

const render = (forecastData) => {

    const day1 = forecastData.slice(0, 8)
    const day2 = forecastData.slice(8, 16)
    const day3 = forecastData.slice(16, 24)
    const day4 = forecastData.slice(24, 32)
    const day5 = forecastData.slice(32)
    
    const fiveDayForeCastArray = [day1, day2, day3, day4, day5]


    contentTarget.innerHTML = `
                            <section class="forcastStylingCard">
                                <h3 class="forecastHeading">5-day Forecast for this Park Destination</h3>
                                ${
                                    fiveDayForeCastArray.map(day => {
                                        return `<div class="forecastCard">${forecastCard(day)}<div>`
                                    }).join("")
                                }
                                </div>
                                `
                            } 
                            
const Forecast = () => {
    getWeather()
    .then( () => {
        const currentParkWeather = useWeatherCopy()
        render(currentParkWeather)
    })
}


                            