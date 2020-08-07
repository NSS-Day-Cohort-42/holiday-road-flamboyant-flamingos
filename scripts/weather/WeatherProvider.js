import keyObj from "../Settings.js"

let parkPostalCode

const eventHub = document.querySelector(".container")
eventHub.addEventListener("parkSelected", customEvent => {
    parkPostalCode = customEvent.detail.zip.substring(0, 5)
})

let weather = []

export const useWeatherCopy = () => {
    return weather.slice()
}

export const getWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${parkPostalCode}&units=imperial&appid=${keyObj.weatherKey}`)
        .then(response => response.json())
        .then(parsedWeather => {
            weather = parsedWeather.list
        })
}
