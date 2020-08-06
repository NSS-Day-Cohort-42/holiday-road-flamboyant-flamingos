export const forecastCard = currentParkForecastObject => {
    return `<div class="card forecastCard">
                <div class="forecastCard__date">${new Date(currentParkForecastObject.dt).toLocaleDateString("en-US")}</<div>
                <div 
            </div>
            `
}