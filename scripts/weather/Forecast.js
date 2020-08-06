const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector('.forecast')

eventHub.addEventListener("parkSelected", () => {
    Forecast()
})

const render = (forecastData) => {
    contentTarget.innerHTML = `
                            <section>
                                <h3 class="forecastHeading">5-day Forecast for this Park Destination</h3>
                                </section>
                                `
                            } 
                            
const Forecast = () => {
    render()
}


                            
                                        // ${
                                        //     forecastData.map(forecastObj => {
                                        //         return forecastCard(forecastObj)
                                        //     })
                                        // }