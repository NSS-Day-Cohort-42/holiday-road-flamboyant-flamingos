export const forecastCard = currentDayArray => {
    // produce list of vars to pass into HTML formatter here
    // const averageTemp =
    // const hiTemp = 
    // const lowTemp =
    let conditions = currentDayArray[3].weather[0].main //Condition at 12 Noon
    let dayOfWeek = new Date(currentDayArray[0].dt * 1000).toLocaleString("en-US", {weekday: "long"})
    let icon = currentDayArray[3].weather[0].icon
    // let hiTemp = currentDayArray

    return `<div class="card forecastCard">
                <div>${dayOfWeek}</div>
                <div class="forecastCard__date">${conditions}</<div>
                <img class="forecastCard__icon" src="http://openweathermap.org/img/w/${icon}.png">
            </div>
            `
}

// ${new Date(currentParkForecastObject.dt).toLocaleDateString("en-US")}