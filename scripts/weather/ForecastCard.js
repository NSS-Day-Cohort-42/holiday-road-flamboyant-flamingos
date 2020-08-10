export const forecastCard = currentDayArray => {

    let conditions = currentDayArray[3].weather[0].main 
    if (conditions === "Clouds") {
        conditions = "Cloudy"
    }

    let dayOfWeek = new Date(currentDayArray[0].dt * 1000).toLocaleString("en-US", {weekday: "long"})

    let icon = currentDayArray[3].weather[0].icon

    let allDailyTemps = currentDayArray.map(snapshot => {
        return snapshot.main.temp
    })
    let max = Math.max(...allDailyTemps)
    let min = Math.min(...allDailyTemps)

    let high = Math.round(max)
    let low = Math.round(min)

    return `<section class="card forecastCard">
                <div class="forecastItem forecastCard__day">${dayOfWeek}</div>
                <div class="forecastItem forecastCard__conditions">${conditions}</<div>
                <img class="forecastItem forecastCard__icon" src="http://openweathermap.org/img/w/${icon}.png">
                <div class="forecastItem forecastCard_hiLow">High: ${high}&#176F Low: ${low}&#176F</div>
                </br>
            </section>
            `
}

