import { getWeather, useWeatherCopy } from "./WeatherProvider.js"
import { forecastCard } from "./ForecastCard.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".forecast")

eventHub.addEventListener("parkSelected", () => {
    Forecast()
})

const render = (forecastData) => {
    contentTarget.innerHTML = `
                            <section>
                                <h3 class="forecastHeading">5-day Forecast for this Park Destination</h3>
                                ${
                                    forecastData.map(forecastObj => {
                                        return `<div class="forecastCard">${forecastCard(forecastObj)}<div>`
                                    }).join("")
                                }
                                </section>
                                `
                            } 
                            
const Forecast = () => {
    getWeather()
    .then( () => {
        const currentParkWeather = useWeatherCopy()
        render(currentParkWeather)
    })
}


                            