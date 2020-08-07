import keyObj from "../Settings.js"

let parkPostalCode

const eventHub = document.querySelector(".container")
eventHub.addEventListener("parkSelected", customEvent => {
    parkPostalCode = parseInt(customEvent.detail.zip)
})

let weather = []

export const useWeatherCopy = () => {
    return weather.slice()
}

export const getWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${parkPostalCode}&appid=${keyObj.weatherKey}`)
        .then(response => response.json())
        .then(parsedWeather => {
            weather = parsedWeather.list
        })
}
