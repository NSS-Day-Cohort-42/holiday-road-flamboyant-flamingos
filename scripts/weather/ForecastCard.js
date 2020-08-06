export const forecastCard = currentDayArray => {
    // produce list of vars to pass into HTML formatter here
    // const averageTemp =
    // const hiTemp = 
    // const lowTemp =
    let conditions = currentDayArray[3].weather[0].main //Condition at 12 Noon
    let date = new Date(currentDayArray[0].dt * 1000).toLocaleString("en-US", {weekday: "long"})
    // let hiTemp = currentDayArray

    return `<div class="card forecastCard">
                <div>${date}</div>
                <div class="forecastCard__date">${conditions}</<div>
            </div>
            `
}

// ${new Date(currentParkForecastObject.dt).toLocaleDateString("en-US")}