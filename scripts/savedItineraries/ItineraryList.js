import { getItineraries, useItineraries } from "./ItineraryProvider.js"
import { itinerary } from "./Itinerary.js"

const contentTarget = document.querySelector(".itineraryList")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("itineraryStateChanged", () => {
    ItineraryList()
})

const render = (currentItineraryArray) => {
    contentTarget.innerHTML = `
                            ${
                                currentItineraryArray.map(itineraryObj => {
                                    return itinerary(itineraryObj)
                                }).reverse().join("")
                            }
    `
}

export const ItineraryList = () => {
    getItineraries()
        .then(() => {
            const itineraryArray = useItineraries()
            render(itineraryArray)
        })
}